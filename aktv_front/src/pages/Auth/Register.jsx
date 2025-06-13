import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

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
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Création de compte</h1>
      <p>Veuillez entrer un nom d'utilisateur et un mot de passe :</p>

      <form onSubmit={handleRegister} style={{ marginTop: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "0.5rem",
              width: "250px",
              fontSize: "1rem",
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
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            {loading ? "Inscription en cours..." : "S'inscrire"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/auth")}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
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

export default Register;
