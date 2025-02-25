
"use client"

import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"

function Preview() {
  return (
    <div className="w-full h-full text-2xl sm:text-3xl md:text-5xl flex flex-row items-start justify-start font-light">
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <motion.span
            className="text-white pt-0.5 sm:pt-1 md:pt-2"
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
            mainClassName="text-black px-2 sm:px-2 md:px-3 bg-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}

export { Preview }

