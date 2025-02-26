
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { fadeUpVariants } from "../animation/variants";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/10 backdrop-blur-sm hover:bg-[#222222] transition-colors"
  >
    <Icon className="w-12 h-12 text-[#0EA5E9] mb-6" />
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-[#E5E7EB] leading-relaxed">{description}</p>
  </motion.div>
);
