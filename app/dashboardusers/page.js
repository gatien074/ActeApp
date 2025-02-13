'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  DocumentTextIcon,
  ClockIcon, 
  CheckCircleIcon,
  BellIcon,
  DocumentArrowDownIcon,
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// Données statiques pour simuler les demandes du citoyen
const mockRequests = [
  {
    id: 1,
    type: "Acte de naissance",
    requestId: "ACT-2024-001",
    status: "En cours de traitement",
    createdAt: "2024-03-15T10:30:00Z",
    downloadable: false,
    details: "En attente de validation par le service d'état civil"
  },
  {
    id: 2,
    type: "Acte de mariage",
    requestId: "ACT-2024-002",
    status: "Validé",
    createdAt: "2024-03-14T15:45:00Z",
    downloadable: true,
    details: "Document disponible au téléchargement"
  },
  {
    id: 3,
    type: "Acte de naissance",
    requestId: "ACT-2024-003",
    status: "En attente de pièces",
    createdAt: "2024-03-16T09:15:00Z",
    downloadable: false,
    details: "Veuillez fournir une pièce d'identité valide"
  }
]

// Informations de l'utilisateur
const userInfo = {
  name: "Jean Dupont",
  email: "jean.dupont@email.com",
  phone: "06 12 34 56 78",
  address: "123 rue de la République, 75001 Paris"
}

export default function DashboardUsers() {
  const [requests] = useState(mockRequests)
  const [notifications] = useState([
    {
      id: 1,
      message: "Votre demande d'acte de naissance a été validée",
      time: "Il y a 5 minutes"
    },
    {
      id: 2,
      message: "Document prêt à être téléchargé",
      time: "Il y a 30 minutes"
    }
  ])
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Animation variants
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
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const getStatusColor = (status) => {
    const statusColors = {
      'En cours de traitement': 'bg-blue-100 text-blue-800',
      'Validé': 'bg-green-100 text-green-800',
      'En attente de pièces': 'bg-yellow-100 text-yellow-800',
      'Rejeté': 'bg-red-100 text-red-800'
    }
    return statusColors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Barre de navigation fixe */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-indigo-600">MonEspaceCitoyen</h1>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <BellIcon className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {notifications.length}
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors"
              >
                <Link href="/profile" className='flex items-center gap-2'>
              <UserCircleIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Mon Profil</span>
                </Link>
              </motion.button>
              
                
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* En-tête avec message de bienvenue */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Bienvenue, {userInfo.name}
              </h2>
              <p className="mt-2 text-gray-600">
                Gérez vos demandes d&apos;actes et suivez leur progression
              </p>
            </motion.div>

            {/* Carte d'informations personnelles */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Mes Informations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 transition-all duration-200"
                  >
                    <EnvelopeIcon className="h-6 w-6 text-indigo-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Email</p>
                      <p className="text-gray-900">{userInfo.email}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 transition-all duration-200"
                  >
                    <PhoneIcon className="h-6 w-6 text-indigo-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Téléphone</p>
                      <p className="text-gray-900">{userInfo.phone}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-gray-50 md:col-span-2 transition-all duration-200"
                  >
                    <MapPinIcon className="h-6 w-6 text-indigo-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Adresse</p>
                      <p className="text-gray-900">{userInfo.address}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Actions rapides */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-6 bg-indigo-600 rounded-2xl text-white hover:bg-indigo-700 transition-colors"
              >
                <span className="text-lg font-semibold">Nouvelle demande</span>
                <ArrowRightIcon className="h-6 w-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-6 bg-white rounded-2xl text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold">Contacter le service</span>
                <ArrowRightIcon className="h-6 w-6" />
              </motion.button>
            </motion.div>

            {/* Liste des demandes */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Mes demandes en cours
                </h3>
                <div className="space-y-4">
                  {requests.map((request) => (
                    <motion.div
                      key={request.id}
                      whileHover={{ scale: 1.01 }}
                      className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-3">
                          <DocumentTextIcon className="h-8 w-8 text-indigo-500" />
                          <div>
                            <h4 className="font-medium text-gray-900">{request.type}</h4>
                            <p className="text-sm text-gray-500">Demande #{request.requestId}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                            {request.status}
                          </span>
                          {request.downloadable ? (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center space-x-2 text-green-600 hover:text-green-700"
                            >
                              <DocumentArrowDownIcon className="h-5 w-5" />
                              <span>Télécharger</span>
                            </motion.button>
                          ) : (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-indigo-600 hover:text-indigo-700"
                            >
                              Voir détails
                            </motion.button>
                          )}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{request.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
