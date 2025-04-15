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
    question: "How long have you been in business?",
    options: [
      "Just starting out",
      "1-3 years",
      "4-10 years",
      "More than 10 years"
    ],
    type: "single-choice"
  },
  {
    id: 3,
    question: "What type of marketing support do you need?",
    options: [
      "Strategy and planning",
      "Content creation",
      "Advertising management",
      "Analytics and reporting"
    ],
    type: "multiple-choice"
  }
];
