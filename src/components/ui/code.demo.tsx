
"use client"

import { Card } from "@/components/ui/card"
import { LayoutGroup, motion } from "motion/react"
import { Squares } from "@/components/ui/squares-background"
import { TextRotate } from "@/components/ui/text-rotate"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <div className="w-full bg-black/[0.96]">
      <Card className="border-0 h-[500px] relative overflow-hidden bg-transparent">
        <div className="absolute inset-0">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333" 
            hoverFillColor="#222"
          />
        </div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 from-white via-white to-transparent" />
        
        <div className="mx-auto max-w-[1400px] px-6 flex h-full items-center justify-center">
          <LayoutGroup>
            <motion.p className="flex whitespace-pre text-4xl md:text-5xl font-bold">
              <motion.span
                className="text-white"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Bring your Payment agent to{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "your app",
                  "your customers",
                  "to life",
                ]}
                mainClassName="text-[#ff5941] overflow-hidden justify-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.p>
          </LayoutGroup>
        </div>
      </Card>
    </div>
  )
}
