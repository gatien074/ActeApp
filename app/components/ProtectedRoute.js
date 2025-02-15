 'use client'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation'
import Loading from './Loading'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (loading) {
    return <Loading />
  }

  if (!user) {
    router.push('/connexion')
    return null
  }

  return children
}