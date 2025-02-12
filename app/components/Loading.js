import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiMaterialformkdocs } from "react-icons/si"
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-indigo-50 z-50">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
       <SiMaterialformkdocs className="text-blue-600 m-auto relative top-12 text-5xl  animate-bounce"/>
        <div className="w-16 h-16  border-indigo-600 border-t-transparent animate-spin mx-auto"></div>
        <p className="mt-4 text-xl font-semibold text-indigo-800">Chargement en cours...</p>
      </motion.div>
    </div>
  )
} 