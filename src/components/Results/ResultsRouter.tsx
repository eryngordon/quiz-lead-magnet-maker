
import React from "react";
import { ResultPage } from "./ResultPage";

const DESTINATIONS = {
  florence: {
    destination: "Florence, Italy",
    image: "/lovable-uploads/dd8d3b51-537e-4238-9eca-e4792c13ce42.png",
    description: "Florence, also known as the cradle of the Italian Renaissance, is the intersection of literature, art, and cultural advancement. You're passionate about culture and history, so it's no wonder that you should visit Florence, Italy! The city was founded by Julius Caesar in 59 BC, and its original purpose was to become a military colony. That is, until the Italian Renaissance, when Florence became the hotbed for artistic expression and a geographical shake-up for the status quo.",
    quote: "In Paris, you learn wit, in London you learn to crush your social rivals, and in Florence you learn poise.",
    quoteAuthor: "Virgil Thompson",
    features: [
      "Renaissance Heritage",
      "Artistic Landmarks",
      "Historical Significance",
      "Cultural Transformation",
      "Literary Influence",
      "Architectural Marvels"
    ],
    tips: [
      {
        title: "Learn to be a Better Traveler",
        description: "We send out a newsletter once a month to authentic travelers. It's your secret power when it comes to finding hidden gems, accessing travel tips from locals, and information on how to become a better traveler. Better travel experiences for you, better stewardship to the places you visit.",
      },
      {
        title: "Access Hidden Gems of Florence",
        description: "Florence is a stunning example of history, art, and culture--you'll be roaming through the city and find significant landmarks almost everywhere you look. Our Florence Map has a complete list of scenic viewpoints, museums, and locally-owned restaurants, along with the monuments, both big and small. Explore Florence Like a Local.",
      },
      {
        title: "Essential Blogs to Get Started",
        description: "Dive into our curated content: '5-Day Florence and Tuscany Itinerary', 'The Essential Guide to Italian Culture', and 'The Sagre: 10 Local Festivals You Can't Miss in Italy'.",
      }
    ],
    newsletterText: "Join our community of passionate travelers and unlock the secrets of authentic travel experiences. Sign up now and transform your next journey!",
  },
  kyoto: {
    destination: "Kyoto, Japan",
    image: "/lovable-uploads/c907a6c6-3056-4dc9-b73b-297ee93f8a2a.png",
    description: "Kyoto, the cultural heart of Japan, offers a perfect blend of ancient traditions and natural beauty. With over 1,600 Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage sites, this former imperial capital invites you to step back in time while experiencing the refined elegance of Japanese culture. From the golden pavilion of Kinkaku-ji to the bamboo groves of Arashiyama, Kyoto captures the essence of wabi-sabi – finding beauty in imperfection and transience.",
    quote: "In Kyoto, time flows with the rhythm of the seasons, and beauty is found in the spaces between moments.",
    quoteAuthor: "Pico Iyer",
    features: [
      "Ancient Temples",
      "Traditional Gardens",
      "Tea Ceremony Culture",
      "Seasonal Festivals",
      "Traditional Craftsmanship",
      "Culinary Excellence"
    ],
    tips: [
      {
        title: "Navigate Kyoto Like a Local",
        description: "Kyoto's grid system makes it navigable, but the city's true essence lies in its backstreets. Our newsletter subscribers receive exclusive walking routes that connect major sites through atmospheric neighborhoods tourists rarely discover.",
      },
      {
        title: "Experience Kyoto's Changing Seasons",
        description: "Each season transforms Kyoto into a different world. Spring brings cherry blossoms, summer offers vibrant festivals, autumn delivers fiery maple leaves, and winter cloaks temples in snow. Plan your visit according to these seasonal spectacles using our detailed calendar guide.",
      },
      {
        title: "Essential Kyoto Experiences",
        description: "Don't miss our guides to 'Staying in a Traditional Ryokan', 'Navigating Kyoto's Temple Etiquette', and 'Finding Authentic Matcha Experiences Beyond Tourist Spots'.",
      }
    ],
    newsletterText: "Discover hidden Kyoto through the eyes of locals and seasoned travelers. Our newsletter brings you insider tips and seasonal highlights!",
  },
  santorini: {
    destination: "Santorini, Greece",
    image: "/lovable-uploads/8c0d1aa9-d022-43c8-829a-8aab3faf39b3.png",
    description: "Santorini rises dramatically from the Aegean Sea, its iconic white-washed buildings with blue domes cascading down volcanic cliffs. This Greek island is actually a caldera – the result of one of history's largest volcanic eruptions. Today, it offers a perfect blend of natural wonder, ancient history, and luxurious relaxation. From black sand beaches to archaeological treasures at Akrotiri, Santorini combines Mediterranean charm with breathtaking vistas that make it a photographer's paradise.",
    quote: "Santorini is the perfect marriage of what makes Greece a dream destination: sun-drenched landscapes, gleaming white architecture, and a rich history layered with myths and legends.",
    quoteAuthor: "Anthony Bourdain",
    features: [
      "Dramatic Caldera Views",
      "Sunset in Oia",
      "Ancient Archaeological Sites",
      "Volcanic Beaches",
      "Local Wine Culture",
      "Cycladic Architecture"
    ],
    tips: [
      {
        title: "Beyond the Crowds",
        description: "While Oia sunset crowds are legendary, our subscribers receive a map of equally stunning viewpoints where you can enjoy Santorini's famous sunset with breathing room. Perfect for photography enthusiasts who want that iconic shot without the photobombers.",
      },
      {
        title: "Santorini's Hidden Beaches",
        description: "Skip the packed beaches of Kamari and Perissa. Our local guides share directions to secluded coves accessible only by foot or boat, where you can experience the unique volcanic landscapes in peaceful solitude.",
      },
      {
        title: "Essential Santorini Reads",
        description: "Prepare for your trip with our guides: 'Understanding Santorini's Volcanic History', 'Island-Hopping from Santorini', and 'The Local Cuisine: Beyond Greek Salad and Souvlaki'.",
      }
    ],
    newsletterText: "Let us guide you through Santorini's hidden corners and secret spots that most travelers miss. Sign up for insider knowledge!",
  },
  patagonia: {
    destination: "Patagonia, Argentina & Chile",
    image: "/lovable-uploads/acd47713-f7fa-45d4-84e4-610d986dc09a.png",
    description: "Patagonia, straddling Argentina and Chile at the southern tip of South America, is nature at its most dramatically untamed. This vast wilderness region encompasses the jagged peaks of Torres del Paine, the otherworldly Perito Moreno Glacier, and windswept grasslands stretching to the horizon. Home to resilient wildlife like guanacos, pumas, and Andean condors, Patagonia offers adventures ranging from world-class hiking and climbing to peaceful fly fishing in pristine waters.",
    quote: "In Patagonia, you feel force of the earth still at work - raw, dynamic, and utterly indifferent to human presence.",
    quoteAuthor: "Bruce Chatwin",
    features: [
      "Epic Mountain Landscapes",
      "Advancing Glaciers",
      "Diverse Wildlife",
      "Remote Wilderness",
      "Adventure Trekking",
      "Pristine National Parks"
    ],
    tips: [
      {
        title: "Preparing for Patagonian Weather",
        description: "Patagonia's weather can shift dramatically within hours. Our subscribers receive a comprehensive packing guide covering all seasons, with specific advice on layering techniques and gear recommendations from seasoned Patagonia guides.",
      },
      {
        title: "Lesser-Known Trekking Routes",
        description: "While the W Trek in Torres del Paine gets all the glory, our local experts have mapped equally spectacular routes with a fraction of the foot traffic. Gain access to detailed trail maps and logistical advice for these hidden gems.",
      },
      {
        title: "Essential Patagonia Resources",
        description: "Prepare with our guides: 'Navigating the Argentina-Chile Border in Patagonia', 'Wildlife Photography Tips for Patagonian Conditions', and 'Supporting Conservation While Traveling in Fragile Ecosystems'.",
      }
    ],
    newsletterText: "Patagonia's vastness can be overwhelming to plan. Let our expertise guide your adventure through one of Earth's last great wildernesses!",
  },
  morocco: {
    destination: "Morocco",
    image: "/lovable-uploads/6524a925-e80b-4782-96fe-8b8d48084059.png",
    description: "Morocco offers a sensory feast where ancient traditions blend seamlessly with vibrant modernity. From the labyrinthine medinas of Fes and Marrakech to the towering dunes of the Sahara and the snow-capped Atlas Mountains, Morocco's diverse landscapes match its cultural richness. Berber, Arab, and French influences create a unique tapestry evident in the country's architecture, cuisine, and daily life. Here, the call to prayer mingles with market haggling and the aroma of spices to create an unforgettable North African experience.",
    quote: "Morocco is a country whose magic casts its spell on the traveler in slow, subtle ways, working its way through all the senses.",
    quoteAuthor: "Paul Bowles",
    features: [
      "Ancient Medinas",
      "Sahara Desert Experience",
      "Atlas Mountain Adventures",
      "Rich Culinary Traditions",
      "Vibrant Marketplaces",
      "Architectural Wonders"
    ],
    tips: [
      {
        title: "Navigating Morocco's Medinas",
        description: "The medieval maze-like medinas can be both captivating and confusing. Our subscribers receive detailed walking guides to Fes and Marrakech with unmapped shortcuts and recommendations for genuine artisan workshops beyond tourist traps.",
      },
      {
        title: "Desert Experiences Worth the Journey",
        description: "Skip the overcrowded desert camps close to Merzouga. Our Morocco specialists have scouted authentic desert experiences where you'll encounter traditional Berber culture and enjoy star-gazing from remote dunes far from light pollution.",
      },
      {
        title: "Essential Moroccan Insights",
        description: "Enhance your journey with our guides: 'Moroccan Hammam Etiquette', 'The Art of Mint Tea Ceremony', and 'Mountain Trekking: Meeting Berber Communities of the High Atlas'.",
      }
    ],
    newsletterText: "Morocco's complexity deserves thoughtful navigation. Join our community for insights that transform your journey from tourist to traveler!",
  },
  peru: {
    destination: "Peru",
    image: "/lovable-uploads/b6a20972-a5b2-44bf-ab20-9734ef0b86a3.png",
    description: "Peru captivates travelers with its extraordinary blend of ancient civilizations, dramatic Andean landscapes, and vibrant cultural traditions. From the mystical ruins of Machu Picchu to the biodiverse Amazon rainforest and the stunning Sacred Valley, Peru offers an adventure that spans thousands of years of human history and some of Earth's most varied ecosystems. Experience the living culture of indigenous communities, savor world-renowned cuisine that has revolutionized gastronomy, and trek along ancient pathways that once formed the backbone of the mighty Inca Empire.",
    quote: "Peru is a country with more than 5,000 years of history and traditions, a megadiverse country where every corner tells a different story.",
    quoteAuthor: "Mario Testino",
    features: [
      "Ancient Inca Ruins",
      "Andean Mountain Landscapes",
      "Amazon Rainforest Biodiversity",
      "World-Class Gastronomy",
      "Living Indigenous Cultures",
      "Sacred Valley Exploration"
    ],
    tips: [
      {
        title: "Altitude Acclimation Secrets",
        description: "The Andes present a genuine challenge for many travelers. Our subscribers receive our exclusive guide to altitude acclimation, including little-known local remedies, recommended acclimation itineraries, and emergency preparation advice from high-altitude medical experts.",
      },
      {
        title: "Beyond Machu Picchu",
        description: "While Machu Picchu deserves its fame, Peru offers countless archaeological wonders without the crowds. Our expert guides share detailed itineraries to sites like Choquequirao, Kuelap, and Chan Chan where you'll often have ancient ruins almost entirely to yourself.",
      },
      {
        title: "Essential Peru Preparations",
        description: "Make the most of your journey with our guides: 'Sacred Valley Deep Dive', 'Navigating Lima's World-Class Food Scene', and 'Responsible Travel in Indigenous Communities'.",
      }
    ],
    newsletterText: "Let us help you plan an unforgettable Peruvian adventure that goes beyond the tourist trail. Sign up for insider access to Peru's best-kept secrets!",
  },
};

interface ResultsRouterProps {
  destination: keyof typeof DESTINATIONS;
}

export const ResultsRouter: React.FC<ResultsRouterProps> = ({ destination }) => {
  const destinationData = DESTINATIONS[destination];
  
  return <ResultPage {...destinationData} />;
};
