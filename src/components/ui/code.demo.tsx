
'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";
import { Preview } from "@/components/ui/Preview";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles } from "lucide-react";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

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
              <p className="mt-4 text-neutral-300 max-w-lg">
                Create powerful API agents that can handle complex tasks. Build, test, and deploy your 
                solutions with our intuitive platform.
              </p>
              <div className="w-full max-w-3xl mt-8">
                <DisplayCards cards={defaultCards} />
              </div>
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
