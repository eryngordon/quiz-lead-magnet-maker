
type AnswersMap = {
  [key: number]: string;
};

// Destination scoring logic
const DESTINATION_SCORES: Record<string, string[]> = {
  florence: [
    "Meandering through the historical ruins of an ancient city and imagining its active heyday",
    "Leaving the trip with more knowledge and interesting facts",
    "A table of antiques, specifically a golden jewelry box from the last century!",
    "\"I think food, culture, people, and landscape are all absolutely inseparable.\" Anthony Bourdain",
    "A quick trip to the traditional market to scope out the souvenirs!",
    "Wearing a kimono, sipping tea, and experiencing cultural immersion with a geisha in the historic Gion District of Kyoto.",
    "A place that has a rich background and an interesting culture.",
    "Julia Roberts as she rediscovers herself in Eat, Pray, Love"
  ],
  greece: [
    "An all-inclusive resort where the water is warm and the cocktails don't stop",
    "Relaxing in a luxurious setting. I deserve it!",
    "An exotic jewelry shop up ahead stocked with glimmering gold and fine gems. I have to have a piece to add to my collection!",
    "\"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.\" Mark Twain",
    "A hot shower and a nap. Immediately.",
    "A once in a lifetime river cruise starting in Amsterdam and coursing through Europe.",
    "Everything is planned out on an agenda and there's no unwanted surprises.",
    "Elizabeth Taylor in 'Night of the Iguana'. Tropical glamour set in 1960's Puerto Vallarta, Mexico."
  ],
  paris: [
    "Happening upon a colorful hostel with a vegan cafe in the village your bus pit-stopped. It wasn't on the agenda but you decide to stay",
    "Getting lost and experiencing the unexpected is what it's all about!",
    "A group of musicians jamming out some folk tunes, I think I'll join in with my bad singing",
    "\"I travel not to go anywhere, but to go. I travel for travel's sake. The great affair is to move.\" Robert Louis Stevenson",
    "A walk around the block to scope out the neighborhood.",
    "A drive down the West coast of the USA to tackle some rock climbing and kite surfing on the Pacific.",
    "That I'll be able to rent a car or have transportation to do lots of independent exploring.",
    "Ben Stiller as Walter Mitty dons his backpack and sets off in search of the extraordinary after a life led quite ordinarily."
  ],
  patagonia: [
    "Hiking the rugged terrain on the Incan Trail to catch the sunrise in Machu Picchu",
    "Finding new trails to hike, complete with a stunning view",
    "There's a guy holding a brochure selling rock climbing day trips",
    "\"Do not follow where the path may lead. Go instead where there is no path and leave a trail.\" Ralph Waldo Emerson",
    "Chat with the hotel receptionist for their favorite recommendations.",
    "I'd like to trek around Indonesia. Traveling light and meeting like minded trekkers is my passion.",
    "I need to stay connected, WiFi, cell service, and easy transportation are a must.",
    "Harrison Ford as Indiana Jones."
  ],
  morocco: [
    "Browsing one-of-a-kind antiques in a traditional market",
    "Discovering the lesser-known part of town and mingling with locals",
    "A vendor grilling something that smells divine. street food. Let's go have a taste of everything",
    "\"There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other.\" Douglas H. Everett",
    "Reservations at a restaurant I booked weeks in advance.",
    "Costa Rica is appealing to me because of it's eco-friendly approach to travel.",
    "Being in a lively city with lots of art, music, restaurants, and activity is key.",
    "Lord of the Rings trilogy hero, Frodo Baggins on a quest for the golden ring."
  ],
  peru: [
    "Hiking the rugged terrain on the Incan Trail to catch the sunrise in Machu Picchu",
    "Finding new trails to hike, complete with a stunning view",
    "There's a guy holding a brochure selling rock climbing day trips",
    "\"Do not follow where the path may lead. Go instead where there is no path and leave a trail.\" Ralph Waldo Emerson",
    "A walk around the block to scope out the neighborhood.",
    "I'd like to trek around Indonesia. Traveling light and meeting like minded trekkers is my passion.",
    "That I'll be able to rent a car or have transportation to do lots of independent exploring.",
    "Harrison Ford as Indiana Jones."
  ]
};

/**
 * Determines the most suitable destination based on quiz answers
 */
export const determineDestination = (answers: AnswersMap): string => {
  // Initialize scores for each destination
  const scores: Record<string, number> = {
    florence: 0,
    greece: 0,
    paris: 0,
    patagonia: 0,
    morocco: 0,
    peru: 0
  };
  
  // Calculate scores based on answers
  Object.entries(answers).forEach(([questionIndex, answer]) => {
    Object.entries(DESTINATION_SCORES).forEach(([destination, preferredAnswers]) => {
      if (preferredAnswers.includes(answer)) {
        scores[destination] += 1;
      }
    });
  });
  
  console.log("Destination scores:", scores);
  
  // Find the destination with the highest score
  let maxScore = 0;
  let recommendedDestination = "florence"; // Default
  
  Object.entries(scores).forEach(([destination, score]) => {
    if (score > maxScore) {
      maxScore = score;
      recommendedDestination = destination;
    }
  });
  
  return recommendedDestination;
};
