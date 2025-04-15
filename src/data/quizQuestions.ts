
import { QuizQuestion } from "@/types/quiz";

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is your main business goal?",
    options: [
      "Increase brand awareness",
      "Generate more leads",
      "Boost sales revenue",
      "Improve customer retention"
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
