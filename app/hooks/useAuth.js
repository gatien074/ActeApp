'use client'
import { useState, useEffect } from 'react'
import { auth } from '../db/config'
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const provider = new GoogleAuthProvider()

const useAuth = () => {
    const [user, setUser] = useState(null)
    const [isFetch, setIsFetch] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsFetch(false)
        })
        return () => unsubscribe()
    }, [])

    const signUp = async (email,password)=> {
        try{
         const userCredential = await createUserWithEmailAndPassword(auth, email, password )
         setUser(userCredential.user);
         router.push('/dashboardusers')
        }catch{
                console.log("erreur de signup")
           }
    }
    
    const signin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user)
            router.push('/dashboardusers')
        } catch {
            console.log("erreur de signin")
        }
    }

    const loginWhithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            if (result.user) {
                router.push("/dashboardusers")
            }
        } catch (error) {
            console.log("Erreur de connexion Google", error)
        }
    }

}

export default useAuth;
