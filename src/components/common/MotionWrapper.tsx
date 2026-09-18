import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const revealVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: customDelay,
    },
  }),
}

export function MotionWrapper({
  children,
  className,
  delay = 0,
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={revealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
