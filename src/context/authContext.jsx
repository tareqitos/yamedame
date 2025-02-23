"use client"

import {fetchProtectedData} from '@/lib/auth-api';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  hasAccess: false,
  user: {id: null, username: null},
  checkAccess: () => {}
});

export const AuthProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedHasAccess = localStorage.getItem("hasAccess") === 'true';
    setHasAccess(storedHasAccess);
  }, []);

  // Calling the function to refresh the access token 
  const checkAccess = async () => {
    try {
      const {response, result} = await fetchProtectedData();
      if (response.status === 200) {
        setUser(result)
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
    <AuthContext.Provider value={{ hasAccess, user, checkAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)