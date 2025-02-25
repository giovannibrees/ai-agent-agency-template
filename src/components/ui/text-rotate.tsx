
"use client"

import { AnimatePresence, motion, TargetAndTransition, VariantLabels } from "framer-motion"
import { useEffect, useState } from "react"

export interface TextRotateProps {
  texts: string[]
  rotationInterval: number
  mainClassName?: string
  splitLevelClassName?: string
  staggerFrom?: "first" | "last"
  initial?: TargetAndTransition | VariantLabels
  animate?: TargetAndTransition | VariantLabels
  exit?: TargetAndTransition | VariantLabels
  transition?: {
    type?: string
    damping?: number
    stiffness?: number
    duration?: number
    delay?: number
  }
  staggerDuration?: number
}

export function TextRotate({
  texts,
  mainClassName,
  splitLevelClassName,
  staggerFrom = "first",
  initial,
  animate,
  exit,
  transition,
  staggerDuration = 0,
  rotationInterval,
}: TextRotateProps) {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          className={splitLevelClassName}
          key={textIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            ...(transition || {}),
            staggerChildren: staggerDuration,
            staggerDirection: staggerFrom === "first" ? 1 : -1,
          }}
        >
          {texts[textIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
