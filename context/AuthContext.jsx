'use client'

import { useContext, createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '@/firebase/config'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserName = async (fullName) => {
    await updateProfile(auth.currentUser, {
      displayName: fullName,
    })
  }

  const signIn = async (email, password) => {
    if (!email || !password) return
    await signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
    })
    return () => unsubscribe()
  }, [user])

  const logout = () => signOut(auth)

  const resetPassword = async (email) => {
    if (!email) return
    await sendPasswordResetEmail(auth, email)
  }

  return (
    <AuthContext.Provider value={{ googleSignIn, logout, user, createUser, signIn, updateUserName, resetPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
