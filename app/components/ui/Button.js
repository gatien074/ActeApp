import { motion } from "framer-motion"

export function PrimaryButton({ children, className, ...props }) {
  return (
    <motion.button
      className={`px-6 py-3 rounded-lg font-semibold relative animate-shine ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export function SecondaryButton({ children, className, ...props }) {
  return (
    <motion.button
      className={`px-6 py-3 rounded-lg font-semibold relative animate-shine ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(22, 163, 74, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export function NavButton({ children, className, ...props }) {
  return (
    <motion.button
      className={`px-4 py-2 rounded-lg font-semibold relative animate-shine ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
} 