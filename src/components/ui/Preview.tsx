
"use client"

import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

function Preview() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-start pt-20">
      <LayoutGroup>
        <motion.div className="flex flex-col items-center max-w-4xl mx-auto px-4">
          {/* Top gradient blur effect */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
          
          {/* Main heading with gradient */}
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Your Own AI Assistant
            </h1>
            <TextRotate
              texts={[
                "To Handle Leads",
                "For Payments",
                "For Social Media",
              ]}
              mainClassName="text-[#0EA5E9] text-2xl sm:text-3xl md:text-5xl font-semibold overflow-hidden"
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

          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl text-white/80 max-w-2xl text-center mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stop losing leads and revenue. Let AI handle your repetitive tasks while you focus on growing your business.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg"
              className="button-gradient text-lg px-8 py-6 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </div>
  )
}

export { Preview }
