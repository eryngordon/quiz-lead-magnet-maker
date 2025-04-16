
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface EmailFormProps {
  onSubmit: (email: string) => void;
  destination: string;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit, destination }) => {
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await onSubmit(email);
      navigate(`/results/${destination}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your email. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500">
      <h2 className="text-2xl font-semibold text-gray-900">
        Get Your Personalized Results
      </h2>
      <p className="text-gray-600">
        Enter your email to receive your quiz results and personalized recommendations.
      </p>
      <div className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
        <Button type="submit" className="w-full">
          Thanks! Send me to the results
        </Button>
      </div>
    </form>
  );
};
