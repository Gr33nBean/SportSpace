import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
