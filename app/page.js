"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SiMaterialformkdocs } from "react-icons/si"
import { PrimaryButton, SecondaryButton, NavButton } from "@/components/ui/Button"
import { FileText, Edit, Trash2, List, Download } from "lucide-react"
import PageLoading from "./components/PageLoading"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isFaqOpen, setIsFaqOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogin = (role) => {
    router.push(`/login?role=${role}`)
  }

  if (isLoading) {
    return <PageLoading />
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
            <SiMaterialformkdocs className="text-blue-600 animate-pulse "/>  ActeTech</h1>
          <button className="sm:hidden text-gray-500 hover:text-gray-600" onClick={toggleMenu} aria-label="Menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className="hidden sm:flex space-x-4 items-center gap-7">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              À propos
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/login">
              <NavButton className="relative animate-shine bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] text-white hover:shadow-lg transition-all duration-300">
                Connexion
              </NavButton>
            </Link>
          </nav>
        </div>
      </header>

      {/* Menu mobile */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          <button
            className="text-gray-500 hover:text-gray-600 float-right"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="mt-8 flex flex-col space-y-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              À propos
            </Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/login">
              <NavButton className="relative animate-shine bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] text-white hover:shadow-lg transition-all duration-300">
                Connexion
              </NavButton>
            </Link>
          </nav>
        </div>
      </motion.div>

      <main className="  ">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center bg-gradient-to-br  from-blue-900 via-blue-800 to-blue-900 bg-cover bg-center lg:p-48 p-14 relative overflow-hidden -mt-[64px]"
          style={{
            backgroundImage: 'url(/3039f546493a05861450ed2f17cae3fd.jpg)',
            backgroundBlendMode: "overlay",
            zIndex: "0"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="lg:text-4xl text-lg font-extrabold text-white mt-10 text-center p-5 
                           text-shadow-lg leading-tight">
              Bienvenue sur notre plateforme de gestion <br/> des actes de naissance
            </h2>
            <div className="h-[30px] overflow-hidden mb-12">
              <div className="animate-carousel">
                <p className="text-xl text-white font-medium h-[30px]">Simplifiez vos démarches administratives</p>
                <p className="text-xl text-white font-medium h-[30px]">Gestion rapide et sécurisée</p>
                <p className="text-xl text-white font-medium h-[30px]">Suivi en temps réel</p>
                <p className="text-xl text-white font-medium h-[30px]">Accessibilité 24h/24 et 7j/7</p>
                <p className="text-xl text-white font-medium h-[30px]">Zéro papier, 100% digital</p>
                <p className="text-xl text-white font-medium h-[30px]">Service public modernisé</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <PrimaryButton onClick={() => handleLogin("user")} className="relative animate-shine bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 bg-[length:200%_100%] text-white hover:shadow-lg transition-all duration-300">
                Espace Citoyen
              </PrimaryButton>
              <SecondaryButton onClick={() => handleLogin("admin")} className="relative animate-shine bg-gradient-to-r from-green-500 via-green-300 to-green-500 bg-[length:200%_100%] text-white/70 hover:shadow-lg transition-all duration-300">
                Espace Administrateur
              </SecondaryButton>
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 px-4 py-12 bg-gradient-to-b from-white to-blue-50"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-blue-700 mb-8 text-center">
              À propos de notre service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Solution Moderne</h4>
                <p className="text-gray-600">Notre plateforme utilise les dernières technologies pour vous offrir une expérience fluide et efficace.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Sécurité Maximale</h4>
                <p className="text-gray-600">Vos données sont protégées avec les plus hauts standards de sécurité et de confidentialité.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Service 24/7</h4>
                <p className="text-gray-600">Accédez à vos documents à tout moment, où que vous soyez dans le monde.</p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Une solution pour tous</h4>
              <p className="max-w-2xl mx-auto">
                Que vous soyez un citoyen cherchant à obtenir un acte ou un administrateur gérant les demandes,
                notre système est conçu pour répondre à vos besoins avec efficacité et simplicité.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 px-6"
        >
          <h3 className="text-3xl font-bold text-gray-900 mt-36 text-center">
            Nos services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Pour les citoyens</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Demande d&apos;actes de naissance en ligne
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Suivi des demandes en temps réel
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Téléchargement sécurisé des documents
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">Pour les administrateurs</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Gestion efficace des demandes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Tableau de bord avec statistiques
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Système de validation sécurisé
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 px-6"
        >
          <h3 className="text-3xl font-bold text-gray-900 mt-36 text-center mb-12">
            Nos Services en Ligne
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <Link href="/dashboard/creer-acte" className="block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Créer un acte</h4>
                </div>
                <p className="text-gray-600">Démarrez une nouvelle demande d&apos;acte de naissance en ligne</p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
            >
              <Link href="/dashboard/modifier-acte" className="block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-green-100">
                    <Edit className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Modifier un acte</h4>
                </div>
                <p className="text-gray-600">Mettre à jour les informations d&apos;un acte existant</p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500"
            >
              <Link href="/dashboard/liste-actes" className="block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-purple-100">
                    <List className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Consulter la liste</h4>
                </div>
                <p className="text-gray-600">Accédez à la liste complète de vos actes</p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500"
            >
              <Link href="/dashboard/telecharger-acte" className="block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-indigo-100">
                    <Download className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Télécharger un acte</h4>
                </div>
                <p className="text-gray-600">Téléchargez vos actes au format PDF</p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
            >
              <Link href="/dashboard/supprimer-acte" className="block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-red-100">
                    <Trash2 className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Supprimer un acte</h4>
                </div>
                <p className="text-gray-600">Supprimez un acte de naissance existant</p>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 px-4 py-12 bg-gradient-to-b from-blue-50 to-white"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-blue-700 mb-8 text-center">
              Contactez-nous
            </h3>
            <p className="text-gray-600 text-center text-lg mb-12">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Email</h4>
                <a href="mailto:contact@actes-naissance.gov.fr" className="text-blue-600 hover:text-blue-800 transition-colors">
                  contact@actes-naissance.gov.fr
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Téléphone</h4>
                <a href="tel:0123456789" className="text-green-600 hover:text-green-800 transition-colors">
                  01 23 45 67 89
                </a>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Assistance</h4>
                <p className="text-gray-600">
                  Support disponible 24h/24 <br/> et 7j/7
                </p>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h4 className="text-2xl font-bold mb-4">Besoin d&apos;aide ?</h4>
              <p className="max-w-2xl mx-auto mb-6">
                Notre équipe de support est disponible pour vous accompagner dans toutes vos démarches administratives.
              </p>
              <button 
                onClick={() => setIsFaqOpen(!isFaqOpen)}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Consulter notre FAQ
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isFaqOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`mt-6 overflow-hidden transition-all duration-300 ${isFaqOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                  <div className="space-y-4">
                    <div className="border-b border-white/20 pb-4">
                      <h5 className="font-semibold mb-2">Comment obtenir un acte de naissance ?</h5>
                      <p className="text-sm text-white/80">Connectez-vous à votre espace citoyen et suivez les étapes de demande en ligne. Le processus est simple et guidé.</p>
                    </div>
                    <div className="border-b border-white/20 pb-4">
                      <h5 className="font-semibold mb-2">Quel est le délai de traitement ?</h5>
                      <p className="text-sm text-white/80">Le délai moyen est de 48h ouvrées. Vous pouvez suivre l&apos;état de votre demande en temps réel.</p>
                    </div>
                    <div className="border-b border-white/20 pb-4">
                      <h5 className="font-semibold mb-2">Les documents sont-ils sécurisés ?</h5>
                      <p className="text-sm text-white/80">Oui, tous les documents sont cryptés et protégés selon les normes de sécurité les plus strictes.</p>
                    </div>
                    <div className="pb-4">
                      <h5 className="font-semibold mb-2">Comment contacter le support ?</h5>
                      <p className="text-sm text-white/80">Notre équipe est disponible par email ou téléphone 24h/24 et 7j/7 pour vous assister.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Section principale du footer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12">
            {/* Logo et description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <SiMaterialformkdocs className="text-blue-400 w-8 h-8"/>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  ActeTech
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Simplifiez vos démarches administratives avec notre plateforme moderne et sécurisée de gestion des actes de naissance.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.314-.346-.116l-6.38 4.02-2.7-.84c-.58-.183-.593-.577.124-.855l10.55-4.07c.485-.176.91.11.832.832z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Liens rapides</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-2 transition-all"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  contact@actes-naissance.gov.fr
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  01 23 45 67 89
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  24h/24 - 7j/7
                </li>
              </ul>
            </div>
          </div>

          {/* Barre de séparation avec effet de dégradé */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Section copyright et liens légaux */}
          <div className="px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2025 ActeTech. Tous droits réservés.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/mentions-legales" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </Link>
                <Link href="/confidentialite" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
                <Link href="/cgv" className="text-sm text-gray-400 hover:text-white transition-colors">
                  CGV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

