import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Admin.scss";
import { getDatabase, ref, push } from "firebase/database";
import DOMPurify from "dompurify";
import { useArticlesContext } from "../ArticlesContext";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const articlesContext = useArticlesContext();

  const handleTitleChange = (content, delta, source, editor) => {
    setTitle(content);
  };

  const handleDescriptionChange = (content, delta, source, editor) => {
    setDescription(content);
  };

  const handleDetailedDescriptionChange = (content, delta, source, editor) => {
    setDetailedDescription(content);
  };

  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDetailedDescriptionTypeChange = (
    content,
    delta,
    source,
    editor
  ) => {
    setType(content);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    setSelectedProfile(file);
  };

  const handleAddBlog = async () => {
    // Create FormData object to send file data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("detailedDescription", detailedDescription);
    formData.append("job", job);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("image", selectedImage);
    formData.append("profileImage", selectedProfile);
  
    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        // Handle success
        console.log("Blog added successfully:", data);
        // Clear form fields
        setTitle("");
        setDescription("");
        setDetailedDescription("");
        setJob("");
        setName("");
        setType("");
        setSelectedImage(null);
        setSelectedProfile(null);
        alert("Blog added successfully!");
      } else {
        // Handle error
        console.error("Failed to add blog:", response.statusText);
        alert("Failed to add blog. Please try again.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("An error occurred while adding blog. Please try again.");
    }
  };
  

  const sanitizeHtml = (html) => {
    return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
    normalize: false,
  };
  const formats = [];

  return (
    <>
      <h1 className="greeting">Welcome To Admin Page</h1>
      <div className="editor-container">
        <p className="hint">Please Choose Your Blogs Image</p>
        <input
          type="file"
          onChange={handleImageChange}
          className="image-choosing-input"
        />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Image"
            className="blog-image"
          />
        )}
      </div>
      <div className="editor-container">
        <p className="hint">Please Choose Your Profile Image</p>
        <input
          type="file"
          onChange={handleProfileChange}
          className="image-choosing-input"
        />
        {selectedProfile && (
          <img
            src={URL.createObjectURL(selectedProfile)}
            alt="Selected Profile"
            className="profile-image"
          />
        )}
      </div>
      <div className="name-input-container">
        <p className="hint">
          Here you should write your name, surname, and job
        </p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <input
          type="text"
          value={job}
          onChange={handleJobChange}
          placeholder="Job"
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title Of Blog"
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={detailedDescription}
          onChange={handleDetailedDescriptionChange}
          placeholder="Detailed Description"
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={type}
          onChange={handleDetailedDescriptionTypeChange}
          placeholder="Type of Blog"
          modules={modules}
          formats={formats}
        />
      </div>
      <button className="add-blog" onClick={handleAddBlog}>
        Add Your Blog
      </button>
    </>
  );
}

export default Admin;
