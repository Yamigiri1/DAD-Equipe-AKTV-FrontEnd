// services/postService.js
import axios from 'axios';

class PostService {
  
  API_BASE_URL = 'http://localhost'; // Remplacez par l'URL de votre API
  
  // Récupérer tous les posts
  async getAllPosts() {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/posts`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des posts:', error);
      throw error;
    }
  }

  // Créer un nouveau post
  async createPost(postData) {
    console.log(postData)
    try {
      const response = await axios.post(`${this.API_BASE_URL}/posts`, postData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du post:', error);
      throw error;
    }
  }

  // Récupérer un post par ID
  async getPostById(id) {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/posts/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du post:', error);
      throw error;
    }
  }

  // Récupérer un post par utilisateur
  async getPostByUsername(id) {
    try {
      const response = await axios.get(`${this.API_BASE_URL}/user-posts/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du post:', error);
      throw error;
    }
  }

  // Mettre à jour un post
  async updatePost(id, postData) {
    try {
      const response = await axios.put(`${this.API_BASE_URL}/posts/${id}`, postData, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la mise à jour du post:', error);
      throw error;
    }
  }

  // Supprimer un post
  async deletePost(id) {
    try {
      await axios.delete(`${this.API_BASE_URL}/posts/${id}`, { withCredentials: true });
      return true;
    } catch (error) {
      console.error('Erreur lors de la suppression du post:', error);
      throw error;
    }
  }

  //Récupérer tous les commentaires d'un posts
  async getAllCommentsByPostId(id) {
    try {
      const response=await axios.get(`${this.API_BASE_URL}/posts/comments/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de recupération des commentaires:', error);
      throw error;
    }
  }

  // Récupérer tous les commentaires et sous commentaires d'un post
  async getCommentsByPostId(id) {
    try {
      const response=await axios.get(`${this.API_BASE_URL}/posts/comments/${id}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du commentaire:', error);
      throw error;
    }
  }
}

export default new PostService();