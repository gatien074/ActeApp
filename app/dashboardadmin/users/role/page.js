"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { UserCheck, ArrowLeft, Search, Shield, AlertCircle } from 'lucide-react'
import Link from 'next/link'

const roles = [
  { id: 'admin', name: 'Administrateur', description: 'Accès complet au système' },
  { id: 'manager', name: 'Gestionnaire', description: 'Gestion des actes et des utilisateurs' },
  { id: 'agent', name: 'Agent', description: 'Création et consultation des actes' },
  { id: 'viewer', name: 'Consultant', description: 'Consultation uniquement' },
]

// Données exemple (à remplacer par les vraies données de votre API)
const mockUsers = [
  { id: 1, name: 'Jean Dupont', email: 'jean@example.com', role: 'admin', service: 'Direction' },
  { id: 2, name: 'Marie Claire', email: 'marie@example.com', role: 'agent', service: 'État Civil' },
  { id: 3, name: 'Paul Martin', email: 'paul@example.com', role: 'viewer', service: 'Archives' },
]

export default function AttributionRoles() {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.service.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRoleChange = async (userId, newRole) => {
    // Ici, vous implementerez la logique pour mettre à jour le rôle dans la base de données
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ))
    setShowConfirmation(true)
    setTimeout(() => setShowConfirmation(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/dashboardadmin"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour au tableau de bord
        </Link>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 px-6 py-8 md:p-10">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 rounded-lg p-3">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Attribution des Rôles
                </h1>
                <p className="text-cyan-100 mt-1">
                  Gérez les permissions des utilisateurs du système
                </p>
              </div>
            </div>
          </div>

          {/* Barre de recherche */}
          <div className="p-6 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600 p-3"
                placeholder="Rechercher par nom, email ou service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Liste des utilisateurs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Utilisateur
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rôle actuel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modifier le rôle
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                            <span className="text-white font-medium text-lg">
                              {user.name[0]}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.service}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-cyan-100 text-cyan-800">
                        {roles.find(r => r.id === user.role)?.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
                      >
                        {roles.map((role) => (
                          <option key={role.id} value={role.id}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Message de confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: showConfirmation ? 1 : 0, y: showConfirmation ? 0 : 50 }}
          className="fixed bottom-4 right-4"
        >
          {showConfirmation && (
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Rôle mis à jour avec succès</span>
            </div>
          )}
        </motion.div>

        {/* Message si aucun résultat */}
        {filteredUsers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun utilisateur trouvé</h3>
            <p className="mt-1 text-sm text-gray-500">
              Essayez de modifier vos critères de recherche
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
} 