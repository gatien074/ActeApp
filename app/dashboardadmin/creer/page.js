"use client"
import { useState, useEffect } from 'react'
import Loading from '@/app/components/Loading'

export default function CreerActe() {
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    // Informations de l'enfant
    nom: '',
    prenom: '',
    dateNaissance: '',
    heureNaissance: '',
    lieuNaissance: '',
    sexe: '',
    
    // Informations du père
    nomPere: '',
    prenomPere: '',
    dateNaissancePere: '',
    lieuNaissancePere: '',
    professionPere: '',
    adressePere: '',
    nationalitePere: '',
    
    // Informations de la mère
    nomMere: '',
    prenomMere: '',
    dateNaissanceMere: '',
    lieuNaissanceMere: '',
    professionMere: '',
    adresseMere: '',
    nationaliteMere: '',
    
    // Informations complémentaires
    numeroActe: '',
    dateDeclaration: '',
    declarant: '',
    temoins: '',
    observations: ''
  })

  useEffect(() => {
    // Simuler un temps de chargement (vous pouvez ajuster la durée)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true) // Activer le loading pendant la soumission
      // Logique pour envoyer les données à l'API
      console.log(formData)     
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsLoading(false) // Désactiver le loading après la soumission
    } catch (error) {
      console.error("Erreur lors de la création de l'acte:", error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8">Créer un nouvel acte de naissance</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Enfant */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Informations de l&apos;enfant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom(s)</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.prenom}
                onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sexe</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.sexe}
                onChange={(e) => setFormData({...formData, sexe: e.target.value})}
                required
              >
                <option value="">Sélectionner</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.dateNaissance}
                onChange={(e) => setFormData({...formData, dateNaissance: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Heure de naissance</label>
              <input
                type="time"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.heureNaissance}
                onChange={(e) => setFormData({...formData, heureNaissance: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lieu de naissance</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.lieuNaissance}
                onChange={(e) => setFormData({...formData, lieuNaissance: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        {/* Section Père */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Informations du père</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Champs similaires pour le père */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.nomPere}
                onChange={(e) => setFormData({...formData, nomPere: e.target.value})}
                required
              />
            </div>
            {/* Ajouter les autres champs pour le père */}
          </div>
        </div>

        {/* Section Mère */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Informations de la mère</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Champs similaires pour la mère */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.nomMere}
                onChange={(e) => setFormData({...formData, nomMere: e.target.value})}
                required
              />
            </div>
            {/* Ajouter les autres champs pour la mère */}
          </div>
        </div>

        {/* Section Informations complémentaires */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Informations complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Numéro d&apos;acte</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.numeroActe}
                onChange={(e) => setFormData({...formData, numeroActe: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date de déclaration</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.dateDeclaration}
                onChange={(e) => setFormData({...formData, dateDeclaration: e.target.value})}
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Observations</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                rows="3"
                value={formData.observations}
                onChange={(e) => setFormData({...formData, observations: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            onClick={() => setFormData({})}
          >
            Réinitialiser
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enregistrer l&apos;acte
          </button>
        </div>
      </form>
    </div>
  )
} 