
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section } from "../layout/Section";

export const MainFeatures = () => {
  return (
    <Section className="bg-black/[0.96]">
      <div className="max-w-4xl mx-auto text-center">
        <Button 
          size="lg"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
        >
          Get a Free AI Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
};
