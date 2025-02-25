
"use client"

import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"

function Preview() {
  return (
    <div className="w-full h-full text-2xl sm:text-4xl md:text-5xl flex flex-row items-start justify-start font-extralight tracking-tight">
      <LayoutGroup>
        <motion.p 
          className="flex whitespace-pre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.span
            className="text-white/90 pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            Build your{" "}
          </motion.span>
          <TextRotate
            texts={[
              "next API",
              "data API",
              "new bot",
              "agent 🤖",
              "workflow",
              "future",
            ]}
            mainClassName="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            rotationInterval={2500}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}

export { Preview }
