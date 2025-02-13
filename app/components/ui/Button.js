import { motion } from "framer-motion"

export function PrimaryButton({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold relative animate-shine ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-semibold relative animate-shine ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function NavButton({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold relative animate-shine ${className}`}
      {...props}
    >
      {children}
    </button>
  )
} 