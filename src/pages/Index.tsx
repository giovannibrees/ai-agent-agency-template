
import { Squares } from "@/components/ui/squares-background"
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo"
import { SplineSceneBasic } from "@/components/ui/code.demo"

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
        <header className="w-full bg-[#060606]/50 backdrop-blur-sm">
          <div className="flex items-center gap-8 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Reveel Agent API</h1>
            <NavigationMenuDemo />
          </div>
        </header>
        <main className="mx-auto max-w-[1400px] px-6 py-12">
          <SplineSceneBasic />
        </main>
      </div>
    </div>
  );
};

export default Index;
