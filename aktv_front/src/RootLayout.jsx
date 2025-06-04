// RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar"; // optionnel

export default function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  );
}