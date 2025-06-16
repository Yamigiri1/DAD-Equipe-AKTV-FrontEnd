import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './pages/App';
import Home from './pages/Home';
import Comments from './pages/Comments';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './RootLayout';
import Profile from './pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/comments/:id', element: <Comments />},
      {path: '/search', element: <div>Search Page</div>},
      {path: '/profile/:userId', element: <Profile />},
      {path: '/profile', element: <Profile />},
      {path: '/notifications', element: <div>Notifications Page</div>},
      {path : '/messages', element: <div>Messages Page</div>},
      {path: '/settings', element: <div>Settings Page</div>},
      {path: 'feed', element: <div>Feed Page</div>}
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);