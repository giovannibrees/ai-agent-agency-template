
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm card-hover"
  >
    <Icon className="w-10 h-10 text-[#0EA5E9] mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2 font-inter">{title}</h3>
    <p className="text-white/90 leading-relaxed font-inter">{description}</p>
  </motion.div>
);
