
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/utils/animations";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm card-hover"
  >
    <p className="text-white/90 mb-6 text-lg font-inter leading-relaxed">{quote}</p>
    <div className="text-white/70">
      <p className="font-semibold text-white font-inter">{author}</p>
      <p className="text-sm font-inter">{role}</p>
    </div>
  </motion.div>
);
