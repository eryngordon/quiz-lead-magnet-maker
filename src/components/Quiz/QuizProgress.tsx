
import React from "react";
import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full mb-8">
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </div>
  );
};
