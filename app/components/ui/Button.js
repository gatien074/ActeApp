import { motion } from "framer-motion"

export const PrimaryButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg 
      shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.button>
  )
}

export const SecondaryButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg 
      shadow-lg hover:shadow-green-500/50 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(22, 163, 74, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.button>
  )
}

export const NavButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 
      font-medium shadow-md hover:shadow-blue-500/50 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
} 