import React from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";
import aktv_logo from "../../../assets/icons/aktv_logo.png";
import { useState } from 'react';


const Authentication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);



  return (
    <div className="auth-container">
      <div className="auth-card" style = {{display: !loading ? 'block' : 'none'}}>
        <img src={aktv_logo} alt="AKTV Logo" className="auth-logo" onLoad={() => setLoading(false)} />
        <h1 className="auth-title">Bienvenue sur <span className="highlight">AKTV</span></h1>
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
