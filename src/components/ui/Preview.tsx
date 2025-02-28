
"use client"

import { useState } from "react"
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"

function Preview() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4 md:px-6">
      <LayoutGroup>
        <motion.div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-4 translate-y-8 sm:translate-y-16">
          {/* Top gradient blur effect */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-[#0EA5E9]/20 blur-[80px] sm:blur-[120px] rounded-full opacity-50 pointer-events-none" />
          
          {/* Content Container */}
          <div className="relative z-10">
            {/* Main heading with gradient */}
            <motion.div 
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                Your Own AI Assistant
              </h1>
              <TextRotate
                texts={[
                  "To Handle Leads",
                  "For Payments",
                  "For Social Media",
                ]}
                mainClassName="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#0EA5E9] font-semibold overflow-hidden"
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
              className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl text-center mb-8 sm:mb-10 leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stop losing leads and revenue. Let AI handle your repetitive tasks while you focus on growing your business.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                size="lg"
                className="button-gradient text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 relative overflow-hidden group w-full sm:w-auto"
                onClick={openContactForm}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </LayoutGroup>
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </section>
  )
}

export { Preview }
