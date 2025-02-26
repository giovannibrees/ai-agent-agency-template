
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
    className="p-8 rounded-2xl bg-[#1A1A1A] border border-white/10 backdrop-blur-sm"
  >
    <p className="text-[#E5E7EB] mb-6 text-lg leading-relaxed">{quote}</p>
    <div>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#9CA3AF] text-sm">{role}</p>
    </div>
  </motion.div>
);
