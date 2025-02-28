
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const ContactForm = ({ isOpen, onClose, title = "Get Your Free Demo" }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you soon.",
      });
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-slate-950 border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">{title}</DialogTitle>
          <DialogDescription className="text-slate-300">
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full bg-slate-900 border-slate-700 text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full bg-slate-900 border-slate-700 text-white"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help you?"
              required
              className="w-full bg-slate-900 border-slate-700 text-white min-h-[100px]"
            />
          </div>
          
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full button-gradient">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
