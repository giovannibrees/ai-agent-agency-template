
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
    className="business-card p-8 rounded-xl relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] opacity-50" />
    <p className="text-white/90 mb-6 text-lg font-inter leading-relaxed italic">{quote}</p>
    <div className="text-white/70">
      <p className="font-semibold text-white font-inter">{author}</p>
      <p className="text-sm font-inter text-[#0EA5E9]">{role}</p>
    </div>
  </motion.div>
);
