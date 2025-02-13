"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Search, Download, Eye } from 'lucide-react'
import Link from 'next/link'
import Loading from '@/app/components/Loading'

export default function ListeActes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Exemple de données
  const actes = [
    { id: 1, numero: "2024-001", nom: "Dupont", prenom: "Jean", dateNaissance: "2024-01-01" },
    { id: 2, numero: "2024-002", nom: "Martin", prenom: "Marie", dateNaissance: "2024-01-02" },
    // Ajoutez plus d'actes selon vos besoins
  ]

  useEffect(() => {
    // Simuler un chargement
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <motion.div 
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-6 flex items-center">
        <Link href="/dashboardadmin" className="text-indigo-600 hover:text-indigo-800 mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Liste des actes de naissance</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <div className="flex lg:flex-row flex-col gap-4">
            <input
              type="text"
              placeholder="Rechercher un acte..."
              className="flex-1 p-2 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center gap-2">
              <Search size={20} />
              Rechercher
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Numéro d&apos;acte
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prénom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date de naissance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {actes.map((acte) => (
                <tr key={acte.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{acte.numero}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{acte.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{acte.prenom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{acte.dateNaissance}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Eye size={20} />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Download size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
} 