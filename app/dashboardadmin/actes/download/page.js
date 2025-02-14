"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Download, ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'

export default function TelechargerActe() {
  const [numeroActe, setNumeroActe] = useState('')
  const [acteDetails, setActeDetails] = useState(null)
  const [format, setFormat] = useState('pdf')

  const handleSearch = (e) => {
    e.preventDefault()
    // Simuler la recherche d'un acte
    setActeDetails({
      numero: numeroActe,
      nom: "Dupont",
      prenom: "Jean",
      dateNaissance: "01/01/2024",
    })
  }

  const handleDownload = () => {
    // Logique de téléchargement à implémenter
    console.log(`Téléchargement en ${format} pour l'acte ${numeroActe}`)
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
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Télécharger un acte de naissance</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 ">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex lg:flex-row flex-col gap-4">
            <input
              type="text"
              placeholder="Numéro d&apos;acte"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-5         00"
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
            className="space-y-6"
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Détails de l&apos;acte</h3>
              <div className="grid grid-cols-2 gap-4">
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

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Options de téléchargement</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Format du document
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        value="pdf"
                        checked={format === 'pdf'}
                        onChange={(e) => setFormat(e.target.value)}
                        className="mr-2"
                      />
                      <FileText size={20} className="mr-2" />
                      PDF
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Télécharger l&apos;acte
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 