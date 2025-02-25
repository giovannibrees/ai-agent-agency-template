
import { Squares } from "@/components/ui/squares-background"
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo"

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#060606]">
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      <div className="relative z-10">
        <header className="w-full px-6 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Reveel Agent API</h1>
            <NavigationMenuDemo />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Index;
