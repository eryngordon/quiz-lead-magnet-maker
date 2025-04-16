import { QuizQuestion } from "@/types/quiz";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "In your wildest travel dreams you imagine yourself...",
    options: [
      "Hiking the rugged terrain on the Incan Trail to catch the sunrise in Machu Picchu",
      "An all-inclusive resort where the water is warm and the cocktails don't stop",
      "Happening upon a colorful hostel with a vegan cafe in the village your bus pit-stopped. It wasn't on the agenda but you decide to stay",
      "Meandering through the historical ruins of an ancient city and imagining its active heyday",
      "Browsing one-of-a-kind antiques in a traditional market"
    ],
    type: "single-choice"
  },
  {
    id: 2,
    question: "What brings you the most joy on a journey?",
    options: [
      "Finding new trails to hike, complete with a stunning view",
      "Getting lost and experiencing the unexpected is what it's all about!",
      "Relaxing in a luxurious setting. I deserve it!",
      "Discovering the lesser-known part of town and mingling with locals",
      "Leaving the trip with more knowledge and interesting facts"
    ],
    type: "single-choice"
  },
  {
    id: 3,
    question: "You're in a crowded street market, what catches your eye?",
    options: [
      "There's a guy holding a brochure selling rock climbing day trips",
      "An exotic jewelry shop up ahead stocked with glimmering gold and fine gems. I have to have a piece to add to my collection!",
      "A group of musicians jamming out some folk tunes, I think I'll join in with my bad singing",
      "A vendor grilling something that smells divine. street food. Let's go have a taste of everything",
      "A table of antiques, specifically a golden jewelry box from the last century!"
    ],
    type: "single-choice"
  }
];
