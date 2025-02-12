"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiMaterialformkdocs } from'react-icons/si' 


export default function PageLoading() {
  return (
    <div className="min-h-screen justify-items-center m-auto relative top-72   ">
      <SiMaterialformkdocs className="text-blue-600 relative top-8 animate-bounce  "/>  
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  )
} 