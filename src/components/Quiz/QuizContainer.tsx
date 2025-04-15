import React from "react";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { EmailForm } from "./EmailForm";
import type { QuizState } from "@/types/quiz";
import { addSubscriber } from "@/lib/convertkit";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";

const CONVERTKIT_FORM_ID = "YOUR_FORM_ID";
const CONVERTKIT_API_KEY = "YOUR_API_KEY";

export const QuizContainer: React.FC = () => {
  const [state, setState] = React.useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    isComplete: false,
  });
  const { toast } = useToast();

  const handleAnswer = (answer: string) => {
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentQuestion]: answer },
    }));
  };

  const nextQuestion = () => {
    setState((prev) => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
    }));
  };

  const handleEmailSubmit = async (email: string) => {
    try {
      await addSubscriber(CONVERTKIT_FORM_ID, CONVERTKIT_API_KEY, {
        email,
        fields: state.answers,
      });
      setState((prev) => ({ ...prev, email, isComplete: true }));
      toast({
        title: "Success!",
        description: "Your results have been sent to your email.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your results. Please try again.",
        variant: "destructive",
      });
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[state.currentQuestion];
  const showEmailForm = state.currentQuestion >= QUIZ_QUESTIONS.length;

  if (state.isComplete) {
    return (
      <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-500">
        <h2 className="text-2xl font-semibold text-gray-900">Thank You!</h2>
        <p className="text-gray-600">
          We've sent your personalized results to your email.
          Check your inbox for insights and recommendations!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {!showEmailForm && (
        <>
          <QuizProgress
            currentQuestion={state.currentQuestion + 1}
            totalQuestions={QUIZ_QUESTIONS.length}
          />
          <QuizQuestion
            question={currentQuestion}
            onAnswer={handleAnswer}
            selectedAnswer={state.answers[state.currentQuestion]}
          />
          {state.answers[state.currentQuestion] && (
            <Button
              onClick={nextQuestion}
              className="mt-6 w-full"
            >
              Next Question
            </Button>
          )}
        </>
      )}
      {showEmailForm && <EmailForm onSubmit={handleEmailSubmit} />}
    </div>
  );
};
