// services/LikesService.js
import axios from 'axios';

class LikesService {
  
  API_BASE_URL = 'http://localhost'; // Remplacez par l'URL de votre API
  
  // Récupérer un post par ID
  async getAllLikesById(id) {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/likes/getLikeByPostId/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du like:', error);
      throw error;
    }
  }

  // Ajouter un like à un post
  async createLike(likeData) {
    try {
      const response = await axios.post(`${this.API_BASE_URL}/likes`, likeData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du like:', error);
      throw error;
    }
  }

  // Supprimer un like à un post
  async deleteLike(postId) {
    console.log("postId", postId)
    try {
      await axios.delete(`${this.API_BASE_URL}/likes`, {
      data: { postId: postId },
      withCredentials: true
    });
      return true;
    } catch (error) {
      console.error('Erreur lors de la suppression du like:', error);
      throw error;
    }
  }

  // Vérifier si l'utilisateur a liké ce post
  async userLike(postId) {
    try {
      const response=await axios.get(`${this.API_BASE_URL}/likes/${postId}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la vérification du like:', error);
      throw error;
    }
  }
}

export default new LikesService();