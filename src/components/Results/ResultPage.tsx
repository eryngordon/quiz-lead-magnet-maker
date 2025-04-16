import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ResultPageProps {
  destination: string;
  image: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  features: string[];
  tips: {
    title: string;
    description: string;
  }[];
  newsletterText: string;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  destination,
  image,
  description,
  quote,
  quoteAuthor,
  features,
  tips,
  newsletterText,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#ebe0d3] min-h-screen">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-3xl font-bold text-[#12263a]">
          Pack your bags! Your next destination should be {destination}
        </h1>
        
        <img
          src={image}
          alt={destination}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
        
        <p className="text-lg text-[#12263a] max-w-2xl mx-auto">
          {description}
        </p>

        <blockquote className="text-xl italic text-[#12263a] max-w-2xl mx-auto border-l-4 border-[#95b0bf] pl-4 my-8">
          "{quote}" - {quoteAuthor}
        </blockquote>

        <div className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-[#12263a]">
            3 Things You Need for {destination}
          </h2>
          
          {tips.map((tip, index) => (
            <div key={index} className="text-left max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-[#12263a] mb-2">
                {index + 1}. {tip.title}
              </h3>
              <p className="text-[#12263a]">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-lg text-[#12263a]">{newsletterText}</p>
          <Button 
            variant="default"
            className="w-full max-w-md mx-auto bg-[#12263a] text-[#ebe0d3] hover:bg-[#95b0bf]"
          >
            Get the newsletter
          </Button>
          
          <img 
            src="/lovable-uploads/3f56fb22-61e7-4565-bbab-19b4d7b3b3d9.png" 
            alt="Travel Adventure" 
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mt-8"
          />
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <p className="text-[#12263a] italic mb-4">
              Earth To Editorial is the digital place to find places you'll want to discover IRL. I'm Eryn, a travel journalist and fellow adventurer who's passionate about the 'local' experience. You'll probably find me hanging out at the local watering hole or slurping life-changing noodles in a sketchy joint. If that sounds like your kind of trip, then check out more of my guides on the platform!
            </p>
            <p className="text-[#12263a] font-semibold">
              Until we meet to plan your next adventure,<br />
              Eryn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
