"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Save, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Loading from '@/app/components/Loading'

export default function ModifierActe() {
  const [numeroActe, setNumeroActe] = useState('')
  const [acteDetails, setActeDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simuler un chargement initial
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simuler une recherche
    setTimeout(() => {
      setIsLoading(false)
      // Logique de recherche à implémenter
    }, 1000)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <motion.div 
      className="p-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-6 flex items-center">
        <Link href="/dashboardadmin" className="text-indigo-600 hover:text-indigo-800 mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Modifier un acte de naissance</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Numéro d'acte"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              value={numeroActe}
              onChange={(e) => setNumeroActe(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center gap-2"
            >
              <Search size={20} />
              Rechercher
            </button>
          </div>
        </form>

        {acteDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              {/* Ajoutez d'autres champs selon vos besoins */}
            </div>

            <button
              className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <Save size={20} />
              Enregistrer les modifications
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 