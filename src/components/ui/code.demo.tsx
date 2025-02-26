
'use client';

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Squares } from "@/components/ui/squares-background";
import { Preview } from "@/components/ui/Preview";
import { CheckCircle2 } from "lucide-react";

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
            <div className="mt-6 space-y-3">
              {[
                "Follow up with leads automatically – never miss a sale",
                "Get paid faster – AI sends reminders for overdue invoices",
                "Post to social media without lifting a finger – stay visible effortlessly"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
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
