
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i }
  })
};

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div 
    variants={fadeUpVariants}
    className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.04] transition-colors"
  >
    <Icon className="w-12 h-12 text-indigo-400 mb-6" />
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-white/60">{description}</p>
  </motion.div>
);
