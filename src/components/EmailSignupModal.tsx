import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

interface EmailSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailSignupModal: React.FC<EmailSignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    toast({
      title: "Welcome to Neura!",
      description: "You've been added to our early access waitlist.",
    });

    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            {isSubmitted ? (
              <CheckCircle className="h-8 w-8 text-primary" />
            ) : (
              <Mail className="h-8 w-8 text-primary" />
            )}
          </div>
          <DialogTitle className="text-2xl">
            {isSubmitted ? "You're In!" : "Join Early Access"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isSubmitted 
              ? "Welcome to the future of AI-powered DeFi on Polygon."
              : "Be among the first to experience Neura's AI-enhanced DeFi aggregator."
            }
          </DialogDescription>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-4 pt-2">
              <Button 
                type="submit" 
                className="w-full btn-hero"
                disabled={isLoading || !email.trim()}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We'll notify you when Neura launches and send occasional updates about our progress.
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <p className="text-success font-medium mb-2">Successfully added to waitlist!</p>
            <p className="text-sm text-muted-foreground">
              Keep an eye on your inbox for updates.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailSignupModal;