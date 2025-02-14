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
    domicilePere: '',
    nationalitePere: '',
    coutumePere: '',
    
    // Informations de la mère
    nomMere: '',
    prenomMere: '',
    dateNaissanceMere: '',
    lieuNaissanceMere: '',
    professionMere: '',
    domicileMere: '',
    nationaliteMere: '',
    coutumeMere: '',
    
    // Informations complémentaires
    numeroActe: '',
    dateDeclaration: '',
    declarant: '',
    temoins: '',
    observations: '',
    signaturePere: null,
    signatureMere: null
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      console.log(formData)     
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsLoading(false)
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom(s)</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.prenomPere}
                onChange={(e) => setFormData({...formData, prenomPere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.dateNaissancePere}
                onChange={(e) => setFormData({...formData, dateNaissancePere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lieu de naissance</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.lieuNaissancePere}
                onChange={(e) => setFormData({...formData, lieuNaissancePere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.professionPere}
                onChange={(e) => setFormData({...formData, professionPere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Domicile</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.domicilePere}
                onChange={(e) => setFormData({...formData, domicilePere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationalité</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.nationalitePere}
                onChange={(e) => setFormData({...formData, nationalitePere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coutume</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.coutumePere}
                onChange={(e) => setFormData({...formData, coutumePere: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Section Mère */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Informations de la mère</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prénom(s)</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.prenomMere}
                onChange={(e) => setFormData({...formData, prenomMere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.dateNaissanceMere}
                onChange={(e) => setFormData({...formData, dateNaissanceMere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lieu de naissance</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.lieuNaissanceMere}
                onChange={(e) => setFormData({...formData, lieuNaissanceMere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.professionMere}
                onChange={(e) => setFormData({...formData, professionMere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Domicile</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.domicileMere}
                onChange={(e) => setFormData({...formData, domicileMere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nationalité</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.nationaliteMere}
                onChange={(e) => setFormData({...formData, nationaliteMere: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Coutume</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.coutumeMere}
                onChange={(e) => setFormData({...formData, coutumeMere: e.target.value})}
              />
            </div>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Déclarant</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.declarant}
                onChange={(e) => setFormData({...formData, declarant: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Témoins</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                value={formData.temoins}
                onChange={(e) => setFormData({...formData, temoins: e.target.value})}
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

        {/* Section Signatures */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">Signatures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Signature du père</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="signaturePere"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFormData({...formData, signaturePere: file})
                    }
                  }}
                />
                <label 
                  htmlFor="signaturePere" 
                  className="cursor-pointer text-center"
                >
                  <div className="text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Cliquez pour ajouter la signature
                  </div>
                  {formData.signaturePere && (
                    <div className="text-sm text-indigo-600">
                      Signature ajoutée
                    </div>
                  )}
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Signature de la mère</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-40 flex items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="signatureMere"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFormData({...formData, signatureMere: file})
                    }
                  }}
                />
                <label 
                  htmlFor="signatureMere" 
                  className="cursor-pointer text-center"
                >
                  <div className="text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Cliquez pour ajouter la signature
                  </div>
                  {formData.signatureMere && (
                    <div className="text-sm text-indigo-600">
                      Signature ajoutée
                    </div>
                  )}
                </label>
              </div>
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