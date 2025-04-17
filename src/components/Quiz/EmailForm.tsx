
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface EmailFormProps {
  onSubmit: (email: string, gdprConsent: boolean) => void;
  destination: string;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit, destination }) => {
  const [email, setEmail] = React.useState("");
  const [gdprConsent, setGdprConsent] = React.useState(false);
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

    if (!gdprConsent) {
      toast({
        title: "Consent required",
        description: "Please accept the privacy policy to continue",
        variant: "destructive",
      });
      return;
    }
    
    try {
      await onSubmit(email, gdprConsent);
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
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
        <div className="flex items-start space-x-2">
          <Checkbox
            id="gdpr-consent"
            checked={gdprConsent}
            onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
            className="mt-1"
          />
          <label htmlFor="gdpr-consent" className="text-sm text-gray-600">
            I agree to receive email communications and accept the{" "}
            <a 
              href="/privacy-policy" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              privacy policy
            </a>
            . You can unsubscribe at any time. We respect your privacy and will never share your data with third parties.
          </label>
        </div>
        <Button type="submit" className="w-full">
          Thanks! Send me to the results
        </Button>
      </div>
    </form>
  );
};
