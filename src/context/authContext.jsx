"use client"

import fetchProtectedData from '@/lib/refresh';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  hasAccess: false,
  checkAccess: () => {}
});

export const AuthProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    const storedHasAccess = localStorage.getItem("hasAccess") === 'true';
    setHasAccess(storedHasAccess);
  }, []);

  // Calling the function to refresh the access token 
  const checkAccess = async () => {
    try {
      const response = await fetchProtectedData();
      if (response === 200) {
        setHasAccess(true);
        localStorage.setItem("hasAccess", "true");
      } else {
        setHasAccess(false);
        localStorage.removeItem("hasAccess");
      }
    } catch (error) {
      console.error("Error checking access:", error);
      setHasAccess(false);
    }
  };

  useEffect(() => {
    checkAccess();
  }, []);

  return (
    <AuthContext.Provider value={{ hasAccess, checkAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)