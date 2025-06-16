// services/userService.js
import axios from 'axios';

class UserService {
  API_BASE_URL = 'http://localhost'; // Remplace si nécessaire

  // Récupérer tous les utilisateurs
  async getAllUsers() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/users`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      throw error;
    }
  }

  // Obtenir l'utilisateur courant
  async getCurrentUser() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/users/currentuser`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'utilisateur courant :`, error);
      throw error;
    }
  }

  // Récupérer un utilisateur par username
  async getUserByUsername(username) {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/users/${username}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'utilisateur ${username} :`, error);
      throw error;
    }
  }

  // Créer un utilisateur
  async createUser(userData) {
    try {
      const response = await axios.post(`${this.API_BASE_URL}/users`, userData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    }
  }

  // Modifier un utilisateur
  async updateUser(username, updateData) {
    try {
      const response = await axios.put(`${this.API_BASE_URL}/users/${username}`, updateData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'utilisateur ${username} :`, error);
      throw error;
    }
  }

  // Supprimer un utilisateur
  async deleteUser(username) {
    try {
      const response = await axios.delete(`${this.API_BASE_URL}/users/${username}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'utilisateur ${username} :`, error);
      throw error;
    }
  }

  // Rechercher des utilisateurs
  async searchUsers(query, limit = 20) {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/users/search/${query}?limit=${limit}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la recherche des utilisateurs avec "${query}" :`, error);
      throw error;
    }
  }
}

export default new UserService();