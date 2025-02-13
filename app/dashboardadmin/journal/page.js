"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Search, Filter, Download, Clock } from "lucide-react"
import Link from 'next/link'
import PageLoading from '@/app/components/PageLoading'

// Données exemple pour le journal
const mockJournal = [
  {
    id: 1,
    action: "Création d&apos;acte",
    utilisateur: "Jean Dupont",
    service: "État Civil",
    date: "2024-03-15 09:30",
    details: "Création d&apos;un acte de naissance"
  },
  {
    id: 2,
    action: "Modification d&apos;acte",
    utilisateur: "Marie Martin",
    service: "Archives",
    date: "2024-03-15 10:15",
    details: "Mise à jour des informations"
  },
  // Ajoutez plus d'entrées si nécessaire
]

const JournalEntry = ({ entry }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-4">
        <div className="bg-indigo-100 p-2 rounded-lg">
          <Clock className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{entry.action}</h3>
          <p className="text-sm text-gray-500 mt-1">{entry.details}</p>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-xs text-gray-500">
              Par: {entry.utilisateur}
            </span>
            <span className="text-xs text-gray-500">
              Service: {entry.service}
            </span>
          </div>
        </div>
      </div>
      <span className="text-xs text-gray-400">{entry.date}</span>
    </div>
  </motion.div>
)

export default function Journal() {
  const [journal, setJournal] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadJournal = async () => {
      try {
        // Simuler un chargement des données
        await new Promise(resolve => setTimeout(resolve, 1000))
        setJournal(mockJournal)
        setIsLoading(false)
      } catch (err) {
        setError("Erreur lors du chargement du journal")
        setIsLoading(false)
      }
    }

    loadJournal()
  }, [])

  const handleExport = () => {
    console.log("Exporting journal...")
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    // Implémenter la logique de recherche ici
  }

  if (isLoading) {
    return <PageLoading />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/dashboardadmin"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour au tableau de bord
        </Link>

        {/* En-tête */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Journal d&apos;activité
              </h1>
              <p className="text-gray-500 mt-1">
                Consultez l&apos;historique des actions effectuées
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={handleExport}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </button>
            </div>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Rechercher dans le journal..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Filter className="h-4 w-4 mr-2" />
                Filtres
              </button>
            </div>
          </div>
        </div>

        {/* Liste du journal */}
        <div className="space-y-4">
          {journal.map((entry) => (
            <JournalEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  )
} 