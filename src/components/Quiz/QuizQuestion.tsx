
import React from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion as QuizQuestionType } from "@/types/quiz";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  selectedAnswer,
}) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500 font-playfair">
      <h2 className="text-2xl font-semibold text-gray-900">{question.question}</h2>
      <div className="grid gap-3">
        {question.options.map((option) => (
          <Button
            key={option}
            variant={selectedAnswer === option ? "default" : "quizHover"}
            className="w-full text-left justify-start p-4 h-auto"
            onClick={() => onAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};
