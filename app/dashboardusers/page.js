'use client'
import { useState } from 'react'
import { 
  UserIcon, 
  DocumentIcon,
  ClockIcon, 
  CheckCircleIcon,
  MagnifyingGlassIcon,
  BellIcon
} from '@heroicons/react/24/outline'

// Données statiques pour simuler les demandes
const mockRequests = [
  {
    id: 1,
    userName: "Jean Dupont",
    userEmail: "jean.dupont@email.com",
    requestId: "ACT-2024-001",
    status: "En attente",
    createdAt: "2024-03-15T10:30:00Z",
  },
  {
    id: 2,
    userName: "Marie Martin",
    userEmail: "marie.martin@email.com",
    requestId: "ACT-2024-002",
    status: "Validé",
    createdAt: "2024-03-14T15:45:00Z",
  },
  {
    id: 3,
    userName: "Pierre Durant",
    userEmail: "pierre.durant@email.com",
    requestId: "ACT-2024-003",
    status: "En cours",
    createdAt: "2024-03-16T09:15:00Z",
  },
  {
    id: 4,
    userName: "Sophie Bernard",
    userEmail: "sophie.bernard@email.com",
    requestId: "ACT-2024-004",
    status: "Validé",
    createdAt: "2024-03-16T14:20:00Z",
  },
  {
    id: 5,
    userName: "Lucas Petit",
    userEmail: "lucas.petit@email.com",
    requestId: "ACT-2024-005",
    status: "En attente",
    createdAt: "2024-03-17T08:45:00Z",
  }
]

// Statistiques statiques
const mockStats = {
  totalRequests: 150,
  pendingRequests: 45,
  completedRequests: 95,
  todayRequests: 12
}

export default function DashboardUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [requests] = useState(mockRequests)
  const [stats] = useState(mockStats)
  const [notifications] = useState([
    {
      id: 1,
      message: "Nouvelle demande d'acte de naissance",
      time: "Il y a 5 minutes"
    },
    {
      id: 2,
      message: "Document validé en attente de signature",
      time: "Il y a 30 minutes"
    }
  ])

  const filteredRequests = requests.filter(request => {
    if (!searchTerm) return true
    return (
      request.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requestId.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const getStatusColor = (status) => {
    const statusColors = {
      'En attente': 'bg-yellow-100 text-yellow-800',
      'En cours': 'bg-blue-100 text-blue-800',
      'Validé': 'bg-green-100 text-green-800',
      'Rejeté': 'bg-red-100 text-red-800'
    }
    return statusColors[status] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête avec notifications */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gestion des Actes de Naissance</h1>
            <p className="mt-2 text-sm text-gray-600">Tableau de bord des demandes</p>
          </div>
          <div className="relative">
            <button
              type="button"
              className="relative p-2 rounded-lg hover:bg-gray-100"
            >
              <BellIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100">
                <DocumentIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Demandes</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100">
                <ClockIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">En Attente</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Validées</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.completedRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <UserIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Aujourd&apos;hui</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.todayRequests}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Rechercher une demande..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Filtrer
                </button>
                <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Nouvelle demande
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table des demandes */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Demandeur
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    N° Demande
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de demande
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img 
                            className="h-10 w-10 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(request.userName)}`}
                            alt={request.userName}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{request.userName}</div>
                          <div className="text-sm text-gray-500">{request.userEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{request.requestId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(request.createdAt).toLocaleDateString('fr-FR')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button 
                        type="button"
                        onClick={() => console.log('Voir détails', request.id)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Voir détails
                      </button>
                      <button 
                        type="button"
                        onClick={() => console.log('Valider', request.id)}
                        className="text-green-600 hover:text-green-900"
                      >
                        Valider
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
