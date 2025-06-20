import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Authentication from './pages/Auth/Authentication/Authentication.jsx'
import Login from './pages/Auth/Login/Login.jsx'
import Register from './pages/Auth/Register/Register.jsx'
import App from './pages/App';
import Home from './pages/Home';
import Comments from './pages/Comments';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Profile from './pages/Profile/Profile';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Followers from './pages/Profile/ProfileFollowers.jsx';
import Following from './pages/Profile/ProfileFollowing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/comments/:id', element: <Comments /> },
      { path: '/search', element: <div>Search Page</div> },
      { path: '/profile/:username', element: <Profile /> },
      { path: '/profile', element: <Profile /> },
      { path: '/profile/:username/followers', element: <Followers /> },
      { path: '/profile/:username/following', element: <Following /> },
      { path: '/notifications', element: <div>Notifications Page</div> },
      { path: '/messages', element: <div>Messages Page</div> },
      { path: '/settings', element: <div>Settings Page</div> },
      { path: 'feed', element: <div>Feed Page</div> }
      ]
  },
  { path: "/auth", element: <Authentication /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);