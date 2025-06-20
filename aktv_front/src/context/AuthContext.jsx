import { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Pour le chargement initial

  const login = async (credentials) => {
    try {
      const res = await AuthService.loginUser(credentials);

      console.log(res.data);

      await fetchCurrentUser();

      return true;
    } catch (err) {
      console.error("Login failed :", err)
      return false;
    };
  };

  const logout = async () => {
    try {
      await AuthService.logoutUser();
      setUser(null);
    } catch (err) {
      console.error("Logout failed :", err);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const res = await AuthService.getUser();
      setUser(res);
    } catch (err) {
      console.error("Token invalide :", err.error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  // Verifies token for every request
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext)