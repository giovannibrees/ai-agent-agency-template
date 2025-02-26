
import { motion } from "framer-motion";
import { fadeUpVariants } from "../animation/variants";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export const StepCard = ({ number, title, description }: StepCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    className="flex gap-6"
  >
    <div className="text-3xl font-bold text-[#0EA5E9]">{number}</div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-[#E5E7EB] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);
