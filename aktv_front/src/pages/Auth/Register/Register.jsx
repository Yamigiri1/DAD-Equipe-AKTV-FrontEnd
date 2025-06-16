import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmation) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }


    try {
      const register = await axios.post("http://localhost/auth/register", {
        username,
        password,
      });

      try {
        const success = await login({ username, password });

        if (success) {
          navigate("/");
        } else {
          setError("Connexion impossible.")
          console.log("Connection failed.");
        }
      }
      catch (err) {
        setError("Echec de la connexion. Veuillez réessayer.")
        console.error("Error during login :", err)
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Show API's response
      }
      else {
        setError(`Erreur pendant l'inscription : ${err}`)
      }
      console.error("Error during registration :", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Inscription</h1>
        <p className="register-description">Créez votre compte AKTV 🐦</p>

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="register-input"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            className="register-input"
          />

          <div className="register-buttons">
            <button type="submit" className="register-button primary">
              {loading ? "Création..." : "S'inscrire"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/auth")}
              className="register-button secondary"
            >
              Retour
            </button>
          </div>

          {error && <p className="register-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
