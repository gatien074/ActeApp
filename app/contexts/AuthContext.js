'use client'
import { createContext, useContext, useState } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const auth = useAuth();
  
  if (!auth) {
    return null;
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext); 