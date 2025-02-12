"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText,
  Users,
  BarChart2,
  Shield,
  PlusCircle,
  Edit,
  Trash2,
  List,
  Download,
  UserPlus,
  UserCheck,
  ToggleLeft,
  Book,
  Menu,
  X,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import Loading from "./Loading"

const sidebarItems = [
  { id: "actes", name: "Actes de Naissance", icon: FileText },
  { id: "users", name: "Utilisateurs", icon: Users },
  { id: "stats", name: "Statistiques", icon: BarChart2 },
  { id: "security", name: "Sécurité", icon: Shield },
]

const actions = {
  actes: [
    { 
      name: "Créer un acte", 
      icon: PlusCircle,
      href: "/dashboardadmin/actes/creer",
      description: "Créer un nouvel acte de naissance",
      color: "bg-green-500 hover:bg-green-600"
    },
    { 
      name: "Modifier un acte", 
      icon: Edit,
      href: "/dashboardadmin/actes/modifier",
      description: "Modifier les informations d'un acte existant",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    { 
      name: "Supprimer un acte", 
      icon: Trash2,
      href: "/dashboardadmin/actes/supprimer",
      description: "Supprimer un acte de naissance",
      color: "bg-red-500 hover:bg-red-600"
    },
    { 
      name: "Consulter la liste", 
      icon: List,
      href: "/dashboardadmin/actes/liste",
      description: "Voir tous les actes de naissance",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    { 
      name: "Télécharger un acte en PDF", 
      icon: Download,
      href: "/dashboardadmin/actes/telecharger",
      description: "Générer et télécharger un acte en format PDF",
      color: "bg-orange-500 hover:bg-orange-600"
    },
  ],
  users: [
    { 
      name: "Créer un compte admin", 
      icon: UserPlus, 
      href: "/dashboardadmin/users/creer",
      description: "Créer un nouveau compte administrateur",
      color: "bg-teal-500 hover:bg-teal-600" 
    },
    { 
      name: "Attribuer des rôles", 
      icon: UserCheck, 
      href: "/dashboardadmin/users/roles",
      description: "Gérer les rôles des utilisateurs",
      color: "bg-cyan-500 hover:bg-cyan-600" 
    },
  ],
  stats: [{ name: "Consulter les statistiques", 
    icon: BarChart2,
    href: "/dashboardadmin/stats",
    description: "Consulter les statistiques de l'application",
    color: "bg-indigo-500 hover:bg-indigo-600" 
  }],
  security: [
    { 
      name: "Activer/désactiver 2FA", 
      icon: ToggleLeft, 
      href: "/dashboardadmin/security/2fa",
      description: "Activer ou désactiver la double authentification",
      name: "Consulter le journal", 
      icon: Book, 
      href: "/dashboardadmin/journal",
      description: "Consulter l'historique des activités",
      color: "bg-emerald-500 hover:bg-emerald-600" 
    },
  ],
}

function AdminDashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("actes")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay pour mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white transform transition-transform duration-200 ease-in-out z-30 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        initial={false}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
            <button
              onClick={toggleSidebar}
              className="md:hidden text-white hover:text-indigo-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-2 mt-6">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  if (window.innerWidth < 768) {
                    setIsSidebarOpen(false)
                  }
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${activeTab === item.id 
                    ? "bg-white text-indigo-900 shadow-lg" 
                    : "text-indigo-100 hover:bg-indigo-800"}`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-indigo-800">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-lg font-semibold">{user?.name?.[0] || "A"}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{user?.name || "Admin"}</p>
                <p className="text-xs text-indigo-300">Administrateur</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleSidebar}
                className="md:hidden text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {sidebarItems.find((item) => item.id === activeTab)?.name}
              </h1>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {actions[activeTab].map((action, index) => (
                <motion.div
                  key={action.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  className="group"
                >
                  <Link 
                    href={action.href || "#"} 
                    className="block h-full"
                  >
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6 h-full">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${action.color || "bg-indigo-500"} text-white`}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                            {action.name}
                          </h3>
                          {action.description && (
                            <p className="mt-1 text-sm text-gray-500">
                              {action.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard

