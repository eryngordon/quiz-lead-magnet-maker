
import React from "react";
import { ResultPage } from "./ResultPage";

const DESTINATIONS = {
  florence: {
    destination: "Florence, Italy",
    image: "/lovable-uploads/ce172b94-12c8-4078-9ddb-0bcfae4d2a48.png",
    description: "Florence, also known as the cradle of the Italian Renaissance, is the intersection of literature, art, and cultural advancement.",
    quote: "In Paris, you learn wit, in London you learn to crush your social enemies, and in Florence you learn poise.",
    quoteAuthor: "Virgil Thompson",
    features: ["Art", "Culture", "History"],
    tips: [
      {
        title: "Learn how to be a better traveler every month!",
        description: "We send out a newsletter once a month to authentic travelers. It's your expert guide when it comes to visiting historic gems, accessing hard-to-find locals, and how to do it like a pro. We're here to tell you what captures our eye and what's worth it in Florence.",
      },
      {
        title: "Access the Hidden Gems of Florence!",
        description: "Florence is a bit more expensive and can be not-so-secret, but journey through the city and the Sprawling districts almost everywhere if you look. We put together this curated list of secret viewpoints, walks, etc.",
      },
      {
        title: "Essential blogs to get you started",
        description: "From local insights to seasonal guides, we've curated the best resources to help you plan your Florentine adventure.",
      },
    ],
    newsletterText: "Until we meet to plan your next adventure!",
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
