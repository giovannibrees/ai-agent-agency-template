'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";
import { Preview } from "@/components/ui/Preview";
import { Sparkles } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon, InputIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
const defaultCards = [{
  icon: <Sparkles className="size-4 text-blue-300" />,
  title: "Featured",
  description: "Discover amazing content",
  date: "Just now",
  iconClassName: "text-blue-500",
  titleClassName: "text-blue-500",
  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
}, {
  icon: <Sparkles className="size-4 text-blue-300" />,
  title: "Popular",
  description: "Trending this week",
  date: "2 days ago",
  iconClassName: "text-blue-500",
  titleClassName: "text-blue-500",
  className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
}, {
  icon: <Sparkles className="size-4 text-blue-300" />,
  title: "New",
  description: "Latest updates and features",
  date: "Today",
  iconClassName: "text-blue-500",
  titleClassName: "text-blue-500",
  className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10"
}];
const features = [{
  Icon: FileTextIcon,
  name: "Save your files",
  description: "We automatically save your files as you type.",
  href: "/",
  cta: "Learn more",
  background: <img className="absolute -right-20 -top-20 opacity-60" />,
  className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
}, {
  Icon: InputIcon,
  name: "Full text search",
  description: "Search through all your files in one place.",
  href: "/",
  cta: "Learn more",
  background: <img className="absolute -right-20 -top-20 opacity-60" />,
  className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
}, {
  Icon: GlobeIcon,
  name: "Multilingual",
  description: "Supports 100+ languages and counting.",
  href: "/",
  cta: "Learn more",
  background: <img className="absolute -right-20 -top-20 opacity-60" />,
  className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
}, {
  Icon: CalendarIcon,
  name: "Calendar",
  description: "Use the calendar to filter your files by date.",
  href: "/",
  cta: "Learn more",
  background: <img className="absolute -right-20 -top-20 opacity-60" />,
  className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
}, {
  Icon: BellIcon,
  name: "Notifications",
  description: "Get notified when someone shares a file or mentions you in a comment.",
  href: "/",
  cta: "Learn more",
  background: <img className="absolute -right-20 -top-20 opacity-60" />,
  className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
}];
function BentoDemo() {
  return <BentoGrid className="lg:grid-rows-3">
      {features.map(feature => <BentoCard key={feature.name} {...feature} />)}
    </BentoGrid>;
}
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
            <p className="mt-4 text-neutral-300 max-w-lg">Bring AI-powered payments to your app with autonomous transactions, smart fund allocation, and Aura rewards.</p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
      </Card>

      {/* Get Started Section */}
      <div className="relative py-20 bg-black/[0.96]">
        <div className="mx-auto max-w-[1400px] px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Get started with Reveel Agent API
          </h2>
          <div className="flex min-h-[400px] w-full items-center justify-center">
            <div className="w-full max-w-3xl">
              <DisplayCards cards={defaultCards} />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with BentoGrid */}
      <div className="relative py-20 bg-black/[0.96]">
        <div className="mx-auto max-w-[1400px] px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Features
          </h2>
          <BentoDemo />
        </div>
      </div>
    </div>;
}