
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { fadeUpVariants } from "@/utils/animations";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="business-card p-6 md:p-8 rounded-xl group"
  >
    <div className="relative z-10">
      <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#0EA5E9] mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 font-inter">{title}</h3>
      <p className="text-base md:text-lg text-white/80 leading-relaxed font-inter">{description}</p>
    </div>
  </motion.div>
);
