
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo"
import { SplineSceneBasic } from "@/components/ui/code.demo"
import { DisplayCardsDemo } from "@/components/ui/display-cards-demo"

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="relative z-50">
        <header className="w-full bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex items-center gap-8 py-4">
              <h1 className="text-2xl font-bold text-white">Reveel Agent API</h1>
              <NavigationMenuDemo />
            </div>
          </div>
        </header>
      </div>
      <div className="relative z-10">
        <main className="w-full flex flex-col">
          <SplineSceneBasic />
          <div className="mb-20">
            <DisplayCardsDemo />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
