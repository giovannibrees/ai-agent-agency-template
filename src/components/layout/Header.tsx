
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import { Button } from "@/components/ui/button";
import { usePi } from "@/contexts/PiContext";

export const Header = () => {
  const { authenticated, username, signIn } = usePi();

  return (
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
              <Button 
                onClick={signIn} 
                variant="outline"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border-none"
              >
                Get a Free AI Demo
              </Button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
