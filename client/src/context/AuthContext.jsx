import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'; // Or use the Fetch API
import api from '../util/api';

// 1. Create the context
const AuthContext = createContext(null);

// 2. Create the Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Crucial for initial load

  // Check for user session on initial app load
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const res = await api.get('auth/me');
        console.log(res);
        
        if (res.data) {
          setUser(res.data);
        }
      } catch (error) {
        // No valid session or token expired
        setUser(null);
        console.log('No active session found.');
      } finally {
        setIsLoading(false);
      }
    };
    checkUserSession();
  }, []);

  const login = async (email, password) => {
    // This function will be called from the LoginPage
    try {
      const res = await api.post('/auth/login', { email, password });
        console.log(res);

      setUser(res.data.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Create a custom hook for easy consumption of the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}