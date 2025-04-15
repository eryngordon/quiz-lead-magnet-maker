
export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  type: 'multiple-choice' | 'single-choice';
};

export type QuizState = {
  currentQuestion: number;
  answers: Record<number, string>;
  email?: string;
  isComplete: boolean;
};
