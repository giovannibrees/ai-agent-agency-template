
import { motion } from "framer-motion";
import { fadeUpVariants } from "./FeatureCard";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
  >
    <p className="text-white/80 mb-6 text-lg">{quote}</p>
    <div className="text-white/60">
      <p className="font-semibold text-white">{author}</p>
      <p className="text-sm">{role}</p>
    </div>
  </motion.div>
);
