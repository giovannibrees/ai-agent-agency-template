
import React from "react";
import { motion } from "framer-motion";

type HeroGeometricProps = {
  badge?: string;
  title1?: string;
  title2?: string;
};

export const HeroGeometric = ({ badge, title1, title2 }: HeroGeometricProps) => {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
        <div className="absolute inset-y-0 w-full bg-gradient-to-b from-black via-black/80 to-black" />
      </div>
      
      <div className="relative pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm text-white/80">
                  {badge}
                </span>
              </motion.div>
            )}
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              {title1 && <span className="block mb-2">{title1}</span>}
              {title2 && (
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {title2}
                </span>
              )}
            </motion.h1>
          </div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Circles */}
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          
          {/* Grid */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </div>
    </div>
  );
};
