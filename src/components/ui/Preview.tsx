
"use client"

import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

function Preview() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <LayoutGroup>
        <motion.div className="flex flex-col items-center">
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

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg"
              className="button-gradient text-lg px-8 py-6 w-full sm:w-auto relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white text-lg px-8 py-6 w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="mt-12 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white/60 text-sm">
              Trusted by 10,000+ businesses worldwide
            </p>
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </div>
  )
}

export { Preview }
