
'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";
import { Preview } from "@/components/ui/Preview";
import { ExpandableChatDemo } from "@/components/ui/expandable-chat.demo";

export function SplineSceneBasic() {
  return <div className="w-full bg-black/[0.96]">
      <Card className="border-0 h-[500px] relative overflow-hidden bg-transparent">
        <div className="absolute inset-0">
          <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
        </div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 from-white via-white to-transparent" />
        
        <div className="mx-auto max-w-[1400px] px-6 flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-start px-0">
            <div className="flex flex-col items-start gap-4">
              <Preview />
            </div>
            <p className="mt-4 text-neutral-300 max-w-lg">
              Create powerful API agents that can handle complex tasks. Build, test, and deploy your 
              solutions with our intuitive platform.
            </p>
            <div className="mt-12 h-[600px] relative w-full">
              <ExpandableChatDemo />
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
      </Card>
    </div>;
}
