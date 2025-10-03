import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // 1. While checking for a session, show a loading indicator
  if (isLoading) {
    return <div>Loading...</div>; 
  }

  // 2. If there's no user, redirect to the login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. If a user is logged in, render the component they wanted to access
  return children;
}

export default ProtectedRoute;