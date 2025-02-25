
"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export interface TextRotateProps {
  texts: string[]
  rotationInterval: number
  mainClassName?: string
  splitLevelClassName?: string
  staggerFrom?: "first" | "last"
  initial?: unknown
  animate?: unknown
  exit?: unknown
  transition?: unknown
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
          transition={transition}
        >
          {texts[textIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
