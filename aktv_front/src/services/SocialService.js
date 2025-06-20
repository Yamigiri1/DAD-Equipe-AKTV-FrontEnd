// services/socialService.js
import axios from 'axios';

class SocialService { 
  API_BASE_URL = 'http://localhost'; // Remplace si nécessaire (ex: http://localhost:5000)

  // Suivre un utilisateur
  async followUser(targetUsername) {
    try {
      console.log(`Tentative de suivi de l'utilisateur : ${targetUsername}`);
      const response = await axios.post(
        `${this.API_BASE_URL}/social/follow`,
        {targetUsername:  targetUsername },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du suivi de ${targetUsername} :`, error);
      throw error;
    }
  }

  // Ne plus suivre un utilisateur
  async unfollowUser(targetUsername) {
    try {
        console.log(`Tentative de désabonnement de l'utilisateur : ${targetUsername}`);
      const response = await axios.post(
        `${this.API_BASE_URL}/social/unfollow`,
        {targetUsername: targetUsername },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du désabonnement de ${targetUsername} :`, error);
      throw error;
    }
  }

  // Vérifier si l'utilisateur courant suit un autre utilisateur
  async isFollowing(targetUsername) {
    try {
        console.log(`Vérification du suivi de l'utilisateur : ${targetUsername}`);
      const response = await axios.get(
        `${this.API_BASE_URL}/social/is-following/${targetUsername}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la vérification du suivi de ${targetUsername} :`, error);
      throw error;
    }
  }

  // Obtenir les followers de l'utilisateur courant
  async getFollowers() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/social/followers`, 
        { withCredentials: true});
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des followers :', error);
      throw error;
    }
  }

  // Obtenir les utilisateurs suivis par l'utilisateur courant
  async getFollowing() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/social/following`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des following :', error);
      throw error;
    }
  }

  // Compter les followers de l'utilisateur courant
  async getFollowersCount() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/social/followers/count`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre de followers :', error);
      throw error;
    }
  }

  // Compter les utilisateurs suivis par l'utilisateur courant
  async getFollowingCount() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/social/following/count`, {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre de following :', error);
      throw error;
    }
  }
}

export default new SocialService();