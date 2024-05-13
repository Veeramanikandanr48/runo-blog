import { createContext, useContext, useState} from "react";

const ArticlesContext = createContext();

export const useArticlesContext = () => useContext(ArticlesContext);

const Blog = [
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Travelling to Ruritania for his cousin’s coronation, Rudolf Rassendyll is forced to impersonate the king when the real monarch is poisoned. Duels, swimming moats at night, forbidden love – it all starts with the opening line, a classic call to adventure: “I wonder when in the world you’re going to do anything, Rudolf?” It spawned the Ruritanian romance, a genre featuring adventure in a fictional country – a famous descendent is William Goldman’s sublime The Princess Bride (1973).",
      "id": 1,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image.png?alt=media&token=26e2d61a-eb59-4797-b47f-1fb8d89828aa",
      "job": "Thinker & Designer",
      "name": "Jennifer Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(5).png?alt=media&token=289411c2-a4d6-44af-97e1-6f28fc0d3d2e",
      "title": "Dream destinations to visit this year in Paris",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Spanning the golden era of comic books, Josef Kavalier arrives in New York a refugee and teams up with his cousin Sammy Klayman to create The Escapist, a Jewish fusion of Superman and The Scarlet Pimpernel. Travelling from Europe to Antarctica, the novel is a quest to escape from the horrors of the Holocaust: “Having lost his mother, father, brother and grandfather … his city, his history – his home – the usual charge levelled against comic books, that they offered merely an easy escape from reality, seemed to Joe actually to be a powerful argument on their behalf.”",
      "id": 2,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(1).png?alt=media&token=9e7ab1c8-b82b-4931-b5d2-f1007ff419ef",
      "job": "Thinker & Designer",
      "name": "Sean Anderson",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(7).png?alt=media&token=53413ca2-edee-4ce5-9cd9-bf08b49cd02b",
      "title": "Breathtaking first-person photos around Europe",
      "type": "Travel"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "The Internet of Things, or IoT, refers to the network of interconnected devices that can collect and exchange data over the internet. This technology enables devices, appliances, vehicles, and other objects to communicate with each other, creating a seamless and interconnected ecosystem. IoT has already made significant advancements in areas like smart homes, wearable devices, and industrial automation. As IoT continues to develop, it is expected to streamline processes, optimize resource management, and enhance overall efficiency.",
      "id": 3,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(2).png?alt=media&token=26170c5d-83f3-4eda-8887-07822de39a6f",
      "job": "Journalist",
      "name": "Sarah Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(2).png?alt=media&token=18c675cd-9384-49aa-b8dd-476d554ac4a1",
      "title": "What collectors need to know about authenticity",
      "type": "Technology"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Throughout history, fashion has been a reflection of social, political, and economic changes. Each era is characterized distinct styles, fabrics, and silhouettes that mirror the prevailing cultural norms and societal attitudes. From the elegant and structured fashion of the Victorian era to the vibrant and carefree styles of the swinging sixties, every period leaves an indelible mark on the evolution of fashion.",
      "id": 4,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(3).png?alt=media&token=724d279d-7790-456d-b522-a5d7a2406e73",
      "job": "Thinker",
      "name": "David Tomas",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(4).png?alt=media&token=6c6c7a91-ffc4-404e-be0a-d22e642abc72",
      "title": "Instagram artists with great photography skills",
      "type": "Fashion"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "While much adventure fiction begins with a privileged white man escaping boredom (see John Buchan’s 39 Steps), the genre is at its most powerful when the protagonist is reaching for adventure as the opposite of tyranny. That’s the case in this blistering novel following George Washington Black, born into enslavement on a Barbados plantation run the English Wilde brothers. Beginning  and shares DNA with Robert Louis Stevenson in its fraught coming-of-age dynamic ",
      "id": 5,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(7).png?alt=media&token=a36df7c4-9c84-4f2e-9873-ee4321217ad6",
      "job": "Thinker & Designer",
      "name": "Jennifer Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(5).png?alt=media&token=289411c2-a4d6-44af-97e1-6f28fc0d3d2e",
      "title": "Thins to know before visiting Cave in Germany",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Fashion designers are visionaries who blend artistry and craftsmanship to create wearable masterpieces. Haute couture, the pinnacle of high fashion, represents the epitome of creativity and luxury, with handcrafted designs that push the boundaries of imagination. Fashion shows and exhibitions have become artistic spectacles that showcase the artistry of designers while celebrating diversity and inclusivity on the runway.",
      "id": 6,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(4).png?alt=media&token=9ae2e218-fc84-46bb-b575-19bf6cf8bbc2",
      "job": "Designer",
      "name": "David Arthur",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(1).png?alt=media&token=8b406cde-d24f-45a6-8519-f22c3c9c6a2f",
      "title": "Nina Smith vibrant work collab with Nike Dunk",
      "type": "Fashion"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Blockchain technology gained fame as the underlying technology behind cryptocurrencies like Bitcoin. However, its potential goes beyond digital currencies. At its core, a blockchain is a decentralized and tamper-resistant digital ledger that records transactions across multiple computers. This technology ensures transparency, security, and immutability of data, making it valuable for various applications such as supply chain management, voting systems, and digital identity verification.",
      "id": 7,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(5).png?alt=media&token=d3e10ccb-70a0-407c-a445-153fb3d13375",
      "job": "Thinker",
      "name": "Andrey Edison",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(6).png?alt=media&token=b694b32b-1868-4d60-9459-fd808349d086",
      "title": "Richard Norton photorealistic rendering as real photos",
      "type": "Technology"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "The Internet of Things, or IoT, refers to the network of interconnected devices that can collect and exchange data over the internet. This technology enables devices, appliances, vehicles, and other objects to communicate with each other, creating a seamless and interconnected ecosystem. IoT has already made significant advancements in areas like smart homes, wearable devices, and industrial automation. As IoT continues to develop, it is expected to streamline processes, optimize resource management, and enhance overall efficiency.",
      "id": 8,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(5).png?alt=media&token=d3e10ccb-70a0-407c-a445-153fb3d13375",
      "job": "Journalist",
      "name": "Emilie Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204.png?alt=media&token=9a6d73d2-3ea5-4021-b790-3d73ee718543",
      "title": "Richard Norton photorealistic rendering as real photos",
      "type": "Technology"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "As the fashion industry continues to grow, so does the awareness of its environmental and ethical impact. Sustainable fashion focuses on reducing waste, minimizing carbon footprints, and using eco-friendly materials. Ethical fashion, on the other hand, prioritizes fair labor practices and safe working conditions for garment workers. The rise of sustainable and ethical fashion has spurred a conscious consumer movement, encouraging people to make mindful choices that support a greener and more equitable industry.",
      "id": 9,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(6).png?alt=media&token=fa39927f-a517-4f73-a072-b5f3c504ae0e",
      "job": "Singer",
      "name": "William Tomas",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(4).png?alt=media&token=6c6c7a91-ffc4-404e-be0a-d22e642abc72",
      "title": "25 quality collectors toys inspired famous films",
      "type": "Fashion"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Escaping her husband and the restrictive Restoration court for Cornwall, Lady Dona discovers a French pirate ship hiding in her creek. She falls in love with Captain Jean Aubrey, but their idyll can’t last. Aubrey has freedom, and Lady Dona could have it, too, were she to leave her children. The ending is a devastatingly clear-eyed reflection on the responsibilities that can keep women from flights of adventure.",
      "id": 10,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image.png?alt=media&token=26e2d61a-eb59-4797-b47f-1fb8d89828aa",
      "job": "Thinker & Designer",
      "name": "Emilie Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204.png?alt=media&token=9a6d73d2-3ea5-4021-b790-3d73ee718543",
      "title": "Dream destinations to visit this year in Paris",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Fashion designers are visionaries who blend artistry and craftsmanship to create wearable masterpieces. Haute couture, the pinnacle of high fashion, represents the epitome of creativity and luxury, with handcrafted designs that push the boundaries of imagination. Fashion shows and exhibitions have become artistic spectacles that showcase the artistry of designers while celebrating diversity and inclusivity on the runway.",
      "id": 11,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(8).png?alt=media&token=d49310b8-8ccc-4fde-afd8-876f01d92d27",
      "job": "Designer",
      "name": "David Arthur",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(1).png?alt=media&token=8b406cde-d24f-45a6-8519-f22c3c9c6a2f",
      "title": "Richird Norton photorealistic rendering as real photos",
      "type": "Fashion"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "While much of the Famous Five books reflect the narrow-minded views of its time, the character of George was revolutionary and remained so for me as a girl with short hair who dressed in “boys’ clothes” and wanted nothing to do with Anne making house! Here, we get Kirrin Island, suspected smugglers and a kidnapping.",
      "id": 12,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(9).png?alt=media&token=ce30706e-43d2-4eb4-9e14-73fc808ddd9e",
      "job": "Journalist",
      "name": "Sarah Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(2).png?alt=media&token=18c675cd-9384-49aa-b8dd-476d554ac4a1",
      "title": "Dream destinations to visit this year in Paris",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "While many of Heyer’s Regency Romances take place in England, The Spanish Bride mixes the Napoleonic wars, adventure and romance – or, in Heyer’s words, “all incident & love-stuff”. Heyer taught me dialogue. I love her wit, plotting and research. A true story, Brigade-Major Harry Smith and his teenage bride, the unwavering Juana Los Dolores de León, met on a Spanish battlefield, fell in love and were married two days later with the Duke of Wellington as a witness.",
      "id": 13,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(10).png?alt=media&token=451cf273-9f25-460e-bce1-f9480000bbf3",
      "job": "Thinker & Designer",
      "name": "Jennifer Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(3).png?alt=media&token=da4dc570-1e00-47bf-ac02-a77fc2626517",
      "title": "Dream destinations to visit this year in Paris",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Travelling to Ruritania for his cousin’s coronation, Rudolf Rassendyll is forced to impersonate the king when the real monarch is poisoned. Duels, swimming moats at night, forbidden love – it all starts with the opening line, a classic call to adventure: “I wonder when in the world you’re going to do anything, Rudolf?”",
      "id": 14,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(11).png?alt=media&token=74cd250e-25f0-4de3-85fc-0f8a20b3a694",
      "job": "Thinker",
      "name": "David Tomas",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(4).png?alt=media&token=6c6c7a91-ffc4-404e-be0a-d22e642abc72",
      "title": "Art of Seasons: 40+ Bright Illustrations Nature",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Fashion serves as a universal language through which individuals communicate their personalities, values, and beliefs. What we choose to wear can convey confidence, playfulness, professionalism, or even rebellion. It enables us to tell a story about ourselves without uttering a single word. The freedom to experiment with different styles empowers people to embrace their individuality and celebrate their differences.",
      "id": 15,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(12).png?alt=media&token=789575ae-57b7-41bd-8c77-7a27f7ff8fbe",
      "job": "Thinker & Designer",
      "name": "Jennifer Lawrence",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(5).png?alt=media&token=289411c2-a4d6-44af-97e1-6f28fc0d3d2e",
      "title": "The Anatomy of a Web Page and Basic Elements",
      "type": "Fashion"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "My only non-fiction pick, I couldn’t resist starting with Celia Fiennes, the woman who rode side-saddle on a donkey around England, solo, in the 17th century. Fiennes writes with beauty and bravery. She collects fossils and Bristol diamonds; prints her own name in Oxford; inspects anatomised bodies in Newcastle; and rides to the peak of the Malvern Hills in order to discover just how far her eyes can see without limits.",
      "id": 16,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(13).png?alt=media&token=a1bfceba-174d-449b-9a81-0cfe61f7e6e4",
      "job": "Thinker & Designer",
      "name": "Andrey Edison",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(6).png?alt=media&token=b694b32b-1868-4d60-9459-fd808349d086",
      "title": "Types of Contrast in User Interface Design",
      "type": "Adventure"
  },
  {
      "date": "08.08.2021",
      "description": "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
      "detailedDescription": "Travel opens doors to uncharted territories, both within and outside ourselves. Stepping out of our comfort zones and embracing unfamiliar environments allows us to break free from routine and discover hidden facets of our personalities. It challenges us to adapt, learn, and grow as we navigate through diverse landscapes, cultures, and lifestyles.",
      "id": 17,
      "imageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Blog%20Image%20(14).png?alt=media&token=07c1300e-4fc8-415f-b897-1cd424b535a2",
      "job": "Thinker & Designer",
      "name": "Sean Anderson",
      "profileImageURL": "https://firebasestorage.googleapis.com/v0/b/runo-blog.appspot.com/o/Ellipse%204%20(7).png?alt=media&token=53413ca2-edee-4ce5-9cd9-bf08b49cd02b",
      "title": "Dream destinations to visit this year in Paris",
      "type": "Travel"
  },
  ]

  export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([]);
  
    // Set initial articles when the component mounts
    useState(() => {
      setArticles(Blog);
    }, []);
  
    // Function to update articles
    const updateArticles = (newArticles) => {
      setArticles(newArticles);
    };
  
    return (
      <ArticlesContext.Provider value={{ articles, updateArticles }}>
        {children}
      </ArticlesContext.Provider>
    );
  }