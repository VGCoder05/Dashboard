// src/context/AuthContext.js

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import api from '../util/api';

// 1. CREATE THE CONTEXT
const AuthContext = createContext(null);

// 2. CREATE THE PROVIDER COMPONENT
// This component will wrap parts of our app that need access to the auth state.
// It manages the authentication state and provides it to all its children.
export function AuthProvider({ children }) {
  // STATE MANAGEMENT
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // FUNCTION TO CHECK FOR AN EXISTING SESSION
  // This function is called on initial app load to see if the user is already logged in (e.g., via an existing cookie on the server).
  const checkUserSession = useCallback(async () => {
    try {
      // Make a request to a backend endpoint that identifies the current user.
      const res = await api.get('auth/me');
      // If the request is successful and returns user data, update the state.
      if (res.data) {
        setUser(res.data.user); 
      }
    } catch (error) {
      setUser(null);
      console.log('No active session found.');
    } finally {
      setIsLoading(false);
    }
  }, []); 

  // EFFECT TO RUN THE SESSION CHECK ON APP STARTUP
  // The empty-like dependency array `[checkUserSession]` ensures this effect runs
  // only once when the AuthProvider component first mounts.
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // LOGIN FUNCTION
  // This function will be called from components like the LoginPage.
  const login = async (userData) => {
    try {
      const res = await api.post('/auth/login', userData);
      // On successful login, update the global user state with the response data.
      setUser(res.data.user);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // REGISTER FUNCTION
  // Handles the user registration process.
  const register = async (userData) => {
    try {
      const res = await api.post('/auth/register', userData);
      //  backend returns the same user object as the login endpoint.
      setUser(res.data.user);
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  // LOGOUT FUNCTION
  // Handles logging the user out.
  const logout = async () => {
    try {
      // Inform the backend to destroy the session/cookie.
      await api.post('/auth/logout');
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      setUser(null);
    }
  };

  // CONTEXT VALUE
  // This object contains the state and functions that we want to make available
  // to all consuming components.
  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
  };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. CREATE A CUSTOM HOOK
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}