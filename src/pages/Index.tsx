
import { Squares } from "@/components/ui/squares-background"

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
        {/* Content will be added in the next iteration */}
      </div>
    </div>
  );
};

export default Index;
