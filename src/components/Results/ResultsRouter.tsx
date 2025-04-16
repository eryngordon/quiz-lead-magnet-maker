
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
  paris: {
    destination: "Paris, France",
    image: "/lovable-uploads/5568ce0c-1442-4c26-bc7d-93692a1cccca.png",
    description: "You're all about the finer things in life. Now it's time to set off to the marathon city of the world. You rarely make plans that don't leave room for the unknown and meeting other wanderers is always a bonus. You're a rare soul that isn't put off by your own fearful thinking, you might feel the fear now and then but you certainly don't let it stop you from wild adventure. You love happening upon cafe patios with groups of like-minded travelers to hang with. You travel light so you can easily pivot if a new direction presents itself. You live by the motto, \"plan, but don't plan the outcome\". From eclectic hostels to lavish hotels, you love it all as long as you're exploring.",
    quote: "The world is a book and those who do not travel read only one page.",
    quoteAuthor: "Saint Augustine",
    features: [
      "Iconic Architecture",
      "World-Class Museums",
      "Culinary Excellence",
      "Literary Heritage",
      "Fashion Capital",
      "Romantic Ambiance"
    ],
    tips: [
      {
        title: "Learn how to be a better traveler every month!",
        description: "We send out a newsletter once a month to authentic travelers. It's your secret power when it comes to finding hidden gems, accessing travel tips from locals, and information on how to become a better traveler. Better travel experiences for you, better stewardship to the places you visit. We call that a win-win-win, and all of it is free!",
      },
      {
        title: "Access the Hidden Gems of Paris!",
        description: "Paris is a stunning example of history, art, and culture--you'll be roaming through the city and find significant landmarks almost everywhere you look. But just like every other large city, it can be hard to find the hidden gems or discern the difference between a local favorite and a tourist trap. Luckily, we made a map for you so you can take out the guesswork! Our Paris Map has a complete list of scenic viewpoints, museums, and locally-owned restaurants, along with the monuments, both big and small.",
      },
      {
        title: "Essential Paris Experiences",
        description: "Enhance your journey with our guides to 'Paris's Secret Gardens', 'Finding the Best Patisseries in Every Arrondissement', and 'Literary Walking Tours: Following in the Footsteps of Hemingway and Fitzgerald'.",
      }
    ],
    newsletterText: "Let us guide you to the Paris that exists beyond guidebooks. Join our newsletter for insider access to the city's hidden treasures!",
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
    description: "The likes of Sir Edmond Hillary, Sir David Attenborough, and Jacques Cousteu are your constant inspiration. You're looking for raw, gritty, risk-taking experiences. You started dreaming of vagabond rambling at an early age. You live in the moment and view every corner as a wondrous opportunity. You've crossed off many an adrenaline inducing destination from your list. In fact, the whole reason you travel is to push the boundaries of your skills and capabilities to see what your body and mind are capable of. No matter the profound peaks you've scaled or death defying depths you've dived, you're always looking toward the next challenge...",
    quote: "The word that most perfectly describes the city of Cusco is evocative. Intangible dust of another era settles on its streets, rising like the disturbed sediment of a muddy lake when you touch its bottom.",
    quoteAuthor: "Ernesto Che Guevara",
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
        title: "Learn how to be a better traveler every month!",
        description: "We send out a newsletter once a month to authentic travelers. It's your secret power when it comes to finding hidden gems, accessing travel tips from locals, and information on how to become a better traveler. Better travel experiences for you, better stewardship to the places you visit. We call that a win-win-win, and all of it is free!",
      },
      {
        title: "Access the Hidden Gems of Cusco!",
        description: "Cusco is a stunning example of history, art, and culture--you'll be roaming through the city and find significant landmarks almost everywhere you look. But just like every other large city, it can be hard to find the hidden gems or discern the difference between a local favorite and a tourist trap. Luckily, we made a map for you so you can take out the guesswork! Our Cusco Map has a complete list of scenic viewpoints, museums, and locally-owned restaurants, along with the monuments, both big and small.",
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
  
  // Pass a special title prop for Peru
  if (destination === "peru") {
    return <ResultPage {...destinationData} customTitle="Buckle up, you're off to Peru!" />;
  }
  
  return <ResultPage {...destinationData} />;
};
