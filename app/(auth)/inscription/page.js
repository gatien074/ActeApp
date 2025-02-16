'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/app/components/Loading'
import Link from 'next/link'
import { auth, db, storage } from '@/app/db/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

export default function Inscription() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    confirmMotDePasse: '',
    role: 'utilisateur', // Par défaut utilisateur
    telephone: ''
  })
  const [error, setError] = useState('')
  const [conditions, setConditions] = useState(false)
  const [force, setForce] = useState(0)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const verifierForceMotDePasse = (password) => {
    let force =0
    if (password.length >= 8) force++
    if (password.match(/[a-z]+/)) force++
    if (password.match(/[A-Z]+/)) force++
    if (password.match(/[0-9]+/)) force++
    if (password.match(/[$@#&!]+/)) force++
    setForce(force)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (!conditions) {
      setError('Vous devez accepter les conditions d\'utilisation')
      setIsLoading(false)
      return
    }

    if (force < 6) {
      setError('Le mot de passe n\'est pas assez sécurisé')
      setIsLoading(false)
      return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.motDePasse
      )

     
      await setDoc(doc(db, 'utilisateurs', userCredential.user.uid), {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        role: formData.role,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        status: 'actif'
      })

      await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, nom: formData.nom })
      })

      router.push('/connexion')
    } catch (err) {
      console.error(err)
      handleFirebaseError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFirebaseError = (error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        setError('Cette adresse email est déjà utilisée')
        break
      case 'auth/invalid-email':
        setError('Adresse email invalide')
        break
      case 'auth/operation-not-allowed':
        setError('Opération non autorisée')
        break
      case 'auth/weak-password':
        setError('Le mot de passe est trop faible')
        break
      default:
        setError('Une erreur est survenue lors de l\'inscription')
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false)
      setIsLoading(false)
    }, 1000)
  }, [])

  if (pageLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
        <Loading className="w-16 h-16 text-white" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Créez votre compte
        </h2>
        <p className="mt-2 text-center text-sm text-indigo-100">
          Rejoignez-nous pour accéder à tous nos services
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 transform transition-all hover:scale-[1.01]">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6" role="alert">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  value={formData.nom}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  value={formData.prenom}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                id="telephone"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Rôle
              </label>
              <select
                name="role"
                id="role"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="utilisateur">Utilisateur</option>
                <option value="administrateur">Administrateur</option>
              </select>
            </div>

            <div>
              <label htmlFor="motDePasse" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                name="motDePasse"
                id="motDePasse"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.motDePasse}
                onChange={(e) => {
                  handleChange(e)
                  verifierForceMotDePasse(e.target.value)
                }}
              />
            </div>

            <div>
              <label htmlFor="confirmMotDePasse" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                name="confirmMotDePasse"
                id="confirmMotDePasse"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.confirmMotDePasse}
                onChange={handleChange}
              />
            </div>

            

            <div>
             
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-full rounded ${
                      index < force ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Force du mot de passe: {
                  force === 0 ? 'Très faible' :
                  force === 0 ? 'Faible' :
                  force === 5 ? 'Moyen' :
                  force === 6 ? 'Fort' :
                  force === 7 ? 'fort' : 
                  force === 8 ? 'Très fort' : 'Excellent'
                }
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="conditions"
                checked={conditions}
                onChange={(e) => setConditions(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="conditions" className="ml-2 block text-sm text-gray-900">
                J&apos;accepte les conditions d&apos;utilisation
              </label>
            </div>

            <div>
              <Link href="/login">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all hover:scale-[1.02]"
                >
                  S&apos;inscrire
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}






















