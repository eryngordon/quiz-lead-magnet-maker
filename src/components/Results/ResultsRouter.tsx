
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
};

interface ResultsRouterProps {
  destination: keyof typeof DESTINATIONS;
}

export const ResultsRouter: React.FC<ResultsRouterProps> = ({ destination }) => {
  const destinationData = DESTINATIONS[destination];
  
  return <ResultPage {...destinationData} />;
};

