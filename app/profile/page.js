'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  IdentificationIcon,
  KeyIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const userInfo = {
  name: "Jean Dupont",
  email: "jean.dupont@email.com",
  phone: "06 12 34 56 78",
  address: "123 rue de la République, 75001 Paris",
  dateNaissance: "15/03/1985",
  nationalite: "Française",
  numeroCNI: "123456789",
  dateInscription: "01/01/2024"
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(userInfo)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Ici, vous ajouteriez la logique pour sauvegarder les modifications
    console.log('Données mises à jour:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* En-tête */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <Link 
            href="/dashboardusers"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Retour au tableau de bord
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <PencilSquareIcon className="h-5 w-5" />
            {isEditing ? 'Annuler' : 'Modifier le profil'}
          </motion.button>
        </motion.div>

        {/* Photo de profil et nom */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
              <UserCircleIcon className="h-20 w-20 text-indigo-600" />
            </div>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{formData.name}</h1>
          <p className="text-gray-500">Citoyen inscrit depuis {formData.dateInscription}</p>
        </motion.div>

        {/* Informations principales */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <IdentificationIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Informations personnelles
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Champs du formulaire */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Date de naissance</label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={formData.dateNaissance}
                    onChange={(e) => setFormData({...formData, dateNaissance: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    disabled={!isEditing}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Téléphone</label>
                  <input
                    type="tel"
                    disabled={!isEditing}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Adresse</label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-50"
                  />
                </div>
              </div>

              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end gap-4"
                >
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Enregistrer
                  </button>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Documents d'identité */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Documents d&apos;identité
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <IdentificationIcon className="h-6 w-6 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">Carte Nationale d&apos;Identité</p>
                    <p className="text-sm text-gray-500">N° {formData.numeroCNI}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vérifié</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sécurité */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <KeyIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Sécurité
            </h2>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <span className="font-medium text-gray-900">Modifier le mot de passe</span>
                <ArrowLeftIcon className="h-5 w-5 text-gray-500 transform rotate-180" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <span className="font-medium text-gray-900">Activer la double authentification</span>
                <ArrowLeftIcon className="h-5 w-5 text-gray-500 transform rotate-180" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 