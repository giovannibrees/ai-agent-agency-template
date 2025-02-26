
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import { SplineSceneBasic } from "@/components/ui/code.demo";
import { usePi } from "@/contexts/PiContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const { authenticated, username, signIn } = usePi();
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleGenerateContent = async () => {
    if (!authenticated) {
      toast.error("Please connect to Pi Network first");
      return;
    }

    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setGenerating(true);
    try {
      // Here we'll implement the AI generation logic
      // For now, this is a placeholder
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Content generated successfully!");
    } catch (error) {
      toast.error("Failed to generate content");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="relative z-50">
        <header className="w-full bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex items-center justify-between gap-8 py-4">
              <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold text-white">Pi AI</h1>
                <NavigationMenuDemo />
              </div>
              {authenticated ? (
                <span className="text-white">Welcome, {username}!</span>
              ) : (
                <Button onClick={signIn} variant="outline">
                  Connect Pi Wallet
                </Button>
              )}
            </div>
          </div>
        </header>
      </div>
      <div className="relative z-10">
        <main className="w-full">
          <SplineSceneBasic />
          
          {/* AI Content Generation Section */}
          <div className="relative py-20 bg-black/[0.96]">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="text-2xl font-bold text-white">
                  Generate Content with AI
                </h2>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter your prompt here..."
                  className="min-h-[120px]"
                />
                <Button
                  onClick={handleGenerateContent}
                  disabled={generating || !prompt.trim()}
                  className="w-full"
                >
                  {generating ? "Generating..." : "Generate Content"}
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
