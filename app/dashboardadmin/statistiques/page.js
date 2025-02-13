"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart2, ArrowLeft, TrendingUp, Users, FileText, Calendar, Download } from "lucide-react"
import Link from 'next/link'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

// Enregistrement des composants Chart.js nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
)

// Options communes pour les graphiques
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}

// Données exemple (à remplacer par les vraies données de votre API)
const mockStats = {
  totalActes: 1250,
  actesThisMonth: 45,
  totalUsers: 28,
  activeUsers: 15,
  monthlyStats: {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    data: [42, 38, 45, 40, 35, 48],
  },
  serviceStats: {
    labels: ['État Civil', 'Archives', 'Direction'],
    data: [520, 320, 410],
  },
  activityHours: {
    labels: ['8h-10h', '10h-12h', '12h-14h', '14h-16h', '16h-18h'],
    data: [125, 230, 95, 185, 145],
  }
}

const StatCard = ({ title, value, icon: Icon, color, subtext }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-sm p-6"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-2">{value}</h3>
        {subtext && <p className="text-sm text-gray-400 mt-1">{subtext}</p>}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </motion.div>
)

const ChartCard = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-xl shadow-sm p-6"
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="h-64">
      {children}
    </div>
  </motion.div>
)

export default function Statistics() {
  const [stats, setStats] = useState(mockStats)

  const barData = {
    labels: stats.monthlyStats.labels,
    datasets: [
      {
        label: 'Nombre d&apos;actes',
        data: stats.monthlyStats.data,
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 1,
      },
    ],
  }

  const doughnutData = {
    labels: stats.serviceStats.labels,
    datasets: [
      {
        data: stats.serviceStats.data,
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(139, 92, 246, 0.7)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const lineData = {
    labels: stats.activityHours.labels,
    datasets: [
      {
        label: 'Activité',
        data: stats.activityHours.data,
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.4,
      },
    ],
  }

  const handleExport = async () => {
    // Implémenter l'export des statistiques
    console.log('Exporting statistics...')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 px-6 py-8 md:p-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <BarChart2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">
                    Statistiques
                  </h1>
                  <p className="text-indigo-100 mt-1">
                    Vue d&apos;ensemble des activités du système
                  </p>
                </div>
              </div>
              <button
                onClick={handleExport}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Exporter</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total des actes"
            value={stats.totalActes}
            icon={FileText}
            color="bg-blue-500"
            subtext="Depuis le début"
          />
          <StatCard
            title="Actes ce mois"
            value={stats.actesThisMonth}
            icon={Calendar}
            color="bg-green-500"
            subtext="En cours de traitement"
          />
          <StatCard
            title="Utilisateurs totaux"
            value={stats.totalUsers}
            icon={Users}
            color="bg-purple-500"
            subtext="Tous les comptes"
          />
          <StatCard
            title="Utilisateurs actifs"
            value={stats.activeUsers}
            icon={TrendingUp}
            color="bg-orange-500"
            subtext="Actuellement connectés"
          />
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Actes par mois">
            <Bar data={barData} options={commonOptions} />
          </ChartCard>
          <ChartCard title="Distribution par service">
            <Doughnut data={doughnutData} options={commonOptions} />
          </ChartCard>
          <ChartCard title="Activité par heure">
            <Line data={lineData} options={commonOptions} />
          </ChartCard>
        </div>
      </div>
    </div>
  )
} 