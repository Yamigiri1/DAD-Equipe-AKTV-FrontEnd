// services/userService.js
import axios from 'axios';

class AuthService {
  API_BASE_URL = 'http://localhost'; // Remplace si nécessaire
  SERVICE = 'auth';

  // Créer un utilisateur
  async createUser(userData) {
    try {
      const response = await axios.post(`${this.API_BASE_URL}/${this.SERVICE}`, userData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
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