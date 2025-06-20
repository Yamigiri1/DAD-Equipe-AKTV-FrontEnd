// services/userService.js
import axios from 'axios';

class AuthService {
  API_BASE_URL = 'http://localhost'; // Remplace si nécessaire
  SERVICE = 'auth';


  // Connexion utilisateur
  async loginUser(userData) {
    try {
      const response = await axios.post(`${this.API_BASE_URL}/${this.SERVICE}/login`, userData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la connexion de l'utilisateur :", error);
      throw error;
    }
  }

  // Déconnexion utilisateur
  async logoutUser() {
    try {
      const response = await axios.post(`${this.API_BASE_URL}/${this.SERVICE}/logout`, null, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la déconnexion de l\'utilisateur :', error);
      throw error;
    }
  }

  // Créer un utilisateur
  async createUser(userData) {
    try {
      const response = await axios.post(`${this.API_BASE_URL}/${this.SERVICE}/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    }
  }

  // Récupérer l'utilisateur courant
  async getUser() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/${this.SERVICE}/currentuser`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur courant :', error);
      throw error;
    }
  }

  // Supprimer un utilisateur
  async deleteUser(username) {
    try {
      const response = await axios.delete(`${this.API_BASE_URL}/${this.SERVICE}/deleteuser`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'utilisateur ${username} :`, error);
      throw error;
    }
  }
}

export default new AuthService();