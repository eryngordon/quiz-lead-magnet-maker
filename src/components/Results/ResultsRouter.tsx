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
        description: "Florence is a stunning example of history, art, and cultural advancement--you'll be roaming through the city and find significant landmarks almost everywhere you look. Our Florence Map has a complete list of scenic viewpoints, museums, and locally-owned restaurants, along with the monuments, both big and small. Explore Florence Like a Local.",
      },
      {
        title: "Essential Blogs to Get Started",
        description: "Dive into our curated content: '5-Day Florence and Tuscany Itinerary', 'The Essential Guide to Italian Culture', and 'The Sagre: 10 Local Festivals You Can't Miss in Italy'.",
      }
    ],
    newsletterText: "Join our community of passionate travelers and unlock the secrets of authentic travel experiences. Sign up now and transform your next journey!",
  },
  kyoto: {
    destination: "Greece",
    image: "/lovable-uploads/c0909fb3-cee9-4ed9-8d0a-23614d76f2c9.png",
    description: "Slow life, slow travels. Time moves at its own pace on the Greek islands. You work hard all year so you can splurge and spoil yourself in tropical locales or exotic destinations. Your vacations often start in the first class lounge. After the bags are checked, and you order a cocktail, you feel the stress melt away. A few visits to the spa are booked before you've stepped foot on the property. And no trip would be complete without adding new pieces to your jewelry collection! It's hard to pull yourself away from the perfectly manicured gardens and pools, let alone the white sandy beach, but you have to add a plan for a luxury bus tour of the area! And sure, you love a cultural adventure... as long as there's a little opulence to take in!",
    quote: "It takes a lifetime to discover Greece, but it only takes an instant to fall in love with her.",
    quoteAuthor: "Henry Miller",
    features: [
      "Luxury Accommodations",
      "Island Hopping",
      "Gourmet Cuisine",
      "Azure Beaches",
      "Spa Retreats",
      "Cultural Excursions"
    ],
    tips: [
      {
        title: "Learn how to be a better traveler every month!",
        description: "We send out a newsletter once a month to authentic travelers. It's your secret power when it comes to finding hidden gems, accessing travel tips from locals, and information on how to become a better traveler. Better travel experiences for you, better stewardship to the places you visit. We call that a win-win-win, and all of it is free!",
      },
      {
        title: "Access the Hidden Gems of Athens!",
        description: "Athens is a stunning example of history, art, and culture--you'll be roaming through the city and find significant landmarks almost everywhere you look. But just like every other large city, it can be hard to find the hidden gems or discern the difference between a local favorite and a tourist trap. Luckily, we made a map for you so you can take out the guesswork! Our Athens Map has a complete list of scenic viewpoints, museums, and locally-owned restaurants, along with the monuments, both big and small. Explore Athens Like a Local.",
      },
      {
        title: "Blogs to get you started",
        description: "A, B, C",
      }
    ],
    newsletterText: "Let us guide you to the Greece that exists beyond guidebooks. Join our newsletter for insider access to the country's hidden treasures!",
  },
  paris: {
    destination: "Paris, France",
    image: "/lovable-uploads/c5716763-cd87-4aaa-9dc3-06eb401acfd3.png",
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
    destination: "South Korea",
    image: "/lovable-uploads/1ed49ddb-1a53-45c0-8215-ac037c601aa1.png",
    description: "Hey there, wayfaring wanderer. You want to discover the authentic side of town. Get ready for a culturally immersive experience in South Korea! \n\nYou're someone who lives for your next hike whether it's a weekend jaunt to a nearby park or a far away, once-in-a-lifetime mountain. It's all about those breath-taking views and you'll scale any incline to see them. You're something of a bird watcher and wildlife sightings are a definite bonus but it's the people you meet along the way that mark your memories.",
    quote: "At the end of hardship comes happiness.",
    quoteAuthor: "Korean Proverb",
    features: [
      "Mountain Landscapes",
      "Cultural Hiking Experiences", 
      "Wildlife Observation",
      "Local Interactions",
      "Diverse Terrain",
      "Historical Trails"
    ],
    tips: [
      {
        title: "Learn how to be a better traveler every month!",
        description: "We send out a newsletter once a month to authentic travelers. It's your secret power when it comes to finding hidden gems, accessing travel tips from locals, and information on how to become a better traveler. Better travel experiences for you, better stewardship to the places you visit. We call that a win-win-win, and all of it is free!",
      },
      {
        title: "Check out my YouTube channel",
        description: "I've been vlogging every trip I've taken for 15 years, it's all here mostly unedited. Embarrassing blunders, jaw dropping sites, crazy bus rides with chickens on board, and ancient architecture. You will be entertained to say the least! You'll get loads of inspiration for places you haven't even considered visiting before now!",
      },
      {
        title: "Essential South Korea Experiences",
        description: "Make the most of your journey with our guides: 'Mountain Trails of South Korea', 'Hidden Cultural Spots Beyond Seoul', and 'Wildlife Photography in Korean National Parks'.",
      }
    ],
    newsletterText: "Discover the authentic side of South Korea through the eyes of a true wanderer. Join our community and unlock the secrets of this fascinating country!",
  },
  morocco: {
    destination: "Morocco",
    image: "/lovable-uploads/5644b4f4-ff43-464a-92e2-abbbc2d0bbb9.png",
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
  
  if (destination === "peru") {
    return <ResultPage {...destinationData} customTitle="Buckle up, you're off to Peru!" />;
  }
  
  return <ResultPage {...destinationData} />;
};
