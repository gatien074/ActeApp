import { NextResponse } from 'next/server'

// Données de test (à remplacer par une vraie base de données)
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
  }
]

export async function GET() {
  return NextResponse.json(mockRequests)
} 