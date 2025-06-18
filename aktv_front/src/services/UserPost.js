// services/userService.js
import axios from 'axios';

class UserPost {
  API_BASE_URL = 'http://localhost'; // Remplace si nécessaire

  //setPostsToUser
  async setPostsToUser(content, parent_content_id=null) {
    try 
    {
      const response = await axios.post(`${this.API_BASE_URL}/user-posts`, { content: content, parent_content_id: parent_content_id }, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de l'ajout des posts à l'utilisateur ${username} :`, error);
      throw error;
    }
  }

}

export default new UserPost();