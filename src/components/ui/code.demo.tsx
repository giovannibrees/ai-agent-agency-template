
'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";
import { Preview } from "@/components/ui/Preview";

export function SplineSceneBasic() {
  return (
    <div className="w-full bg-gradient-to-b from-black/[0.96] to-black/[0.85]">
      <Card className="border-0 h-[500px] relative overflow-hidden bg-transparent backdrop-blur-sm">
        <div className="absolute inset-0">
          <Squares 
            direction="diagonal" 
            speed={0.3} 
            squareSize={40} 
            borderColor="rgba(75, 85, 99, 0.2)" 
            hoverFillColor="rgba(75, 85, 99, 0.1)" 
          />
        </div>
        <Spotlight 
          className="-top-40 left-0 md:left-60 md:-top-20 from-blue-400/20 via-violet-400/20 to-transparent" 
          size={400}
        />
        
        <div className="mx-auto max-w-[1400px] px-6 flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-start px-0">
            <div className="flex flex-col items-start gap-4">
              <Preview />
            </div>
            <motion.p 
              className="mt-6 text-neutral-400 max-w-lg text-base sm:text-lg font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Bring AI-powered payments to your app with autonomous transactions, smart fund allocation, and token rewards.
            </motion.p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
      </Card>
    </div>
  );
}
