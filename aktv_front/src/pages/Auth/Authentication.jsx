import React from "react";
import { useNavigate } from "react-router-dom";


const Authentication = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Bienvenue sur AKTV !</h1>
      <p>Veuillez vous authentifier en vous connectant à votre compte ou en vous inscrivant pour accéder à AKTV.</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Connexion
        </button>

        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Inscription
        </button>

      </div>
    </div>
  );
};

export default Authentication;