
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/utils/animations";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export const StepCard = ({ number, title, description }: StepCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="business-card flex gap-6 p-8 rounded-xl relative overflow-hidden group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="text-4xl font-bold text-[#0EA5E9] group-hover:scale-110 transition-transform duration-300">{number}</div>
    <div className="relative z-10">
      <h3 className="text-xl font-semibold text-white mb-3 font-inter">{title}</h3>
      <p className="text-white/80 leading-relaxed font-inter">{description}</p>
    </div>
  </motion.div>
);
