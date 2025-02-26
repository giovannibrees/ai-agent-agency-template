
import { Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i }
  })
} as const;
