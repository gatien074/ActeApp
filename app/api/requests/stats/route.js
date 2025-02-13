import { NextResponse } from 'next/server'

export async function GET() {
  // Données de test (à remplacer par des calculs réels basés sur la base de données)
  const stats = {
    totalRequests: 150,
    pendingRequests: 45,
    completedRequests: 95,
    todayRequests: 12
  }

  return NextResponse.json(stats)
} 