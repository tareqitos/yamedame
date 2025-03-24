"use client"

import { fetchProtectedData, getFavorite } from '@/app/api/api';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  hasAccess: false,
  user: { id: Number | null, username: null, email: null, created_at: null },
  favorites: [],
  checkAccess: () => { },
  loadFavorite: () => { }
});

export const AuthProvider = ({ children }) => {
  const [hasAccess, setHasAccess] = useState(false)
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedHasAccess = localStorage.getItem("hasAccess") === 'true';
    setHasAccess(storedHasAccess);
  }, []);

  // Calling the function to refresh the access token 
  const checkAccess = async () => {
    try {
      const { response, result } = await fetchProtectedData();
      if (response.status === 200) {
        setUser(result)
        setHasAccess(true);
        localStorage.setItem("hasAccess", "true");
      } else {
        setHasAccess(false);
      }
    } catch (error) {
      console.log("Error checking access:", error);
      setHasAccess(false);
    }
  };

  const loadFavorite = async () => {
    if (!user) return
    try {
      const { response, result } = await getFavorite(user.id)
      if (response.ok) {
        setFavorites(result.favorite.map((item) => item.item_id))
      }
    } catch (error) {
      console.log("Auth context: Failed to load favorites", error)
    }
  }

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    loadFavorite();
  }, [user])

  return (
    <AuthContext.Provider value={{ hasAccess, user, favorites, loadFavorite, checkAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)