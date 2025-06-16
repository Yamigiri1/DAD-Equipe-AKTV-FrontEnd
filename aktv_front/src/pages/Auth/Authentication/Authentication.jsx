import React from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

const Authentication = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Bienvenue sur <span className="highlight">AKTV</span> 🐦</h1>
        <p className="auth-description">
          Connecte-toi ou crée un compte pour accéder à ton fil d'actualités.
        </p>

        <div className="auth-buttons">
          <button className="auth-button login" onClick={() => navigate("/login")}>
            Connexion
          </button>
          <button className="auth-button register" onClick={() => navigate("/register")}>
            Inscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
