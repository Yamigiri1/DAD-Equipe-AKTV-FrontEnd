import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './pages/App';
import Home from './pages/Home';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/search', element: <div>Search Page</div>},
      {path: '/profil/:id', element: <div>Profile Page</div>},
      {path: '/notifications', element: <div>Notifications Page</div>},
      {path : '/messages', element: <div>Messages Page</div>},
      {path: '/settings', element: <div>Settings Page</div>},
      {path: 'feed', element: <div>Feed Page</div>},
      {path: 'my-profile',element: <div>My Profile Page</div>,}
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);