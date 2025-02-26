
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
    className="flex gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm card-hover"
  >
    <div className="text-3xl font-bold text-[#0EA5E9]">{number}</div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2 font-inter">{title}</h3>
      <p className="text-white/70 leading-relaxed font-inter">{description}</p>
    </div>
  </motion.div>
);
