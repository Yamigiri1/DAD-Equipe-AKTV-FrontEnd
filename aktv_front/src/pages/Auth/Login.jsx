import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Connection using :", { username, password });
    try {
      const success = await login({ username, password });

      if (success) {
        navigate("/");
      } else {
        setError("Identifiants invalides.")
        console.log("Connection failed.");
      }
    }
    catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      console.error("Error during login :", err)
    } finally {
      setLoading(false);
    };
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Connexion</h1>
      <p>Veuillez entrer votre nom d'utilisateur et votre mot de passe :</p>

      <form onSubmit={handleLogin} style={{ marginTop: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "0.5rem",
              width: "250px",
              fontSize: "1rem"
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "0.5rem",
              width: "250px",
              fontSize: "1rem"
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Retour
          </button>
        </div>
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;