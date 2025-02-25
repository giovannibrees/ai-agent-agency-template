'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";
export function SplineSceneBasic() {
  return <div className="w-full bg-black/[0.96]">
      <Card className="border-0 h-[500px] relative overflow-hidden bg-transparent">
        <div className="absolute inset-0">
          <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
        </div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 from-white via-white to-transparent" />
        
        <div className="mx-auto max-w-[1400px] px-6 flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center px-0">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-[7px]">Bring your Payment agent</h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
              that capture attention and enhance your design.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
      </Card>
    </div>;
}