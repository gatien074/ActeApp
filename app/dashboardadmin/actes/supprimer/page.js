"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Trash2, ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import PageLoading from '../../../components/PageLoading'

export default function SupprimerActe() {
  const [initialLoading, setInitialLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [numeroActe, setNumeroActe] = useState('')
  const [acteDetails, setActeDetails] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    // Chargement initial de la page
    const initialTimer = setTimeout(() => {
      setInitialLoading(false)
    }, 3000)

    // Nettoyage du timer
    return () => clearTimeout(initialTimer)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simuler la recherche d'un acte
    setTimeout(() => {
      setActeDetails({
        numero: numeroActe,
        nom: "Dupont",
        prenom: "Jean",
        dateNaissance: "01/01/2024",
      })
      setIsLoading(false)
    }, 2000)
  }

  const handleDelete = () => {
    setShowConfirmation(true)
  }

  const confirmDelete = () => {
    setIsLoading(true)
    // Simuler la suppression
    setTimeout(() => {
      setActeDetails(null)
      setShowConfirmation(false)
      setNumeroActe('')
      setIsLoading(false)
    }, 1500)
  }

  // Vérification du chargement initial
  if (initialLoading || isLoading) {
    return <PageLoading />
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center">
          <Link 
            href="/dashboardadmin" 
            className="text-indigo-600 hover:text-indigo-800 mr-4 transition-colors duration-200"
          >
            <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Supprimer un acte de naissance
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Numéro d'acte"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                value={numeroActe}
                onChange={(e) => setNumeroActe(e.target.value)}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
                <span>Rechercher</span>
              </button>
            </div>
          </form>

          <AnimatePresence>
            {acteDetails && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    Détails de l&apos;acte
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-600">Numéro d&apos;acte</p>
                      <p className="font-medium">{acteDetails.numero}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Nom</p>
                      <p className="font-medium">{acteDetails.nom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Prénom</p>
                      <p className="font-medium">{acteDetails.prenom}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date de naissance</p>
                      <p className="font-medium">{acteDetails.dateNaissance}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleDelete}
                  className="w-full bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 flex items-center justify-center gap-3 transition-colors duration-200"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Supprimer cet acte</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-center text-red-600 mb-4">
                <AlertCircle size={48} />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Confirmer la suppression</h3>
              <p className="text-gray-600 text-center mb-6">
                Êtes-vous sûr de vouloir supprimer cet acte ? Cette action est irréversible.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Annuler
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Confirmer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 