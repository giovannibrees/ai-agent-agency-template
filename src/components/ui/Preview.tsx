
"use client"

import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"

function Preview() {
  return (
    <div className="w-full h-full text-2xl sm:text-3xl md:text-5xl flex flex-col items-center justify-center font-light">
      <LayoutGroup>
        <motion.div className="flex flex-col items-center gap-4">
          <motion.p
            className="text-white"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            Your Own AI Assistant
          </motion.p>
          <TextRotate
            texts={[
              "To Handle Leads",
              "For Payments",
              "For Social Media",
            ]}
            mainClassName="text-[#0EA5E9] overflow-hidden"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>
      </LayoutGroup>
    </div>
  )
}

export { Preview }
