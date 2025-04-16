import React from "react";
import { ResultPage } from "./ResultPage";

const DESTINATIONS = {
  florence: {
    destination: "Florence, Italy",
    image: "/lovable-uploads/ce172b94-12c8-4078-9ddb-0bcfae4d2a48.png",
    description: "Florence, the birthplace of the Renaissance, is a living museum where art, architecture, and history blend seamlessly with modern life. Its cobblestone streets, magnificent Duomo, and world-renowned galleries make it perfect for culture enthusiasts and history lovers who appreciate beauty in every form.",
    quote: "Florence is like a jewelry box full of exquisite artifacts – every corner you turn reveals another treasure.",
    quoteAuthor: "Dan Brown",
    features: [
      "Renaissance Art & Architecture",
      "World-Class Museums",
      "Tuscan Cuisine",
      "Historic Landmarks",
      "Fashion & Shopping",
      "Authentic Italian Culture"
    ],
    tips: [
      {
        title: "Best Time to Visit Florence",
        description: "Visit during spring (April-May) or fall (September-October) for ideal weather and fewer tourists. These shoulder seasons offer comfortable temperatures and the chance to explore without the summer crowds.",
      },
      {
        title: "Must-See Hidden Gems",
        description: "While the Uffizi and Duomo are must-visits, don't miss the serene Bardini Gardens, the less-crowded Basilica of Santa Croce, and the artisan workshops in the Oltrarno district.",
      },
      {
        title: "Local Food Experiences",
        description: "Beyond the famous restaurants, explore the Sant'Ambrogio Market for local products, try street food like lampredotto, and join cooking classes to master Tuscan classics.",
      }
    ],
    newsletterText: "Want more insider tips about Florence? Join our newsletter for monthly updates on secret spots, local events, and authentic experiences!",
  },
  // Add other destinations here following the same structure
};

interface ResultsRouterProps {
  destination: keyof typeof DESTINATIONS;
}

export const ResultsRouter: React.FC<ResultsRouterProps> = ({ destination }) => {
  const destinationData = DESTINATIONS[destination];
  
  return <ResultPage {...destinationData} />;
};
