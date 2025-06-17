import React, { useEffect, useState } from 'react';
import LikesService from '../../services/LikesService'; // ajuste le chemin selon ta structure
import like_icon from '../../assets/icons/like.png'
import likefull_icon from '../../assets/icons/likefull.png';

const LikeButton = ({ postId }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  // Récupérer l'état du like au chargement
  useEffect(() => {
    const fetchLikeInfo = async () => {
      try {
        const userLike = await LikesService.userLike(postId);
        console.log("userlike : ", userLike);
        setHasLiked(userLike.hasLiked); // true si l'utilisateur a liké

        const allLikes = await LikesService.getAllLikesById(postId);
        setLikesCount(allLikes.likes);
      } catch (error) {
        console.error('Erreur lors du chargement des likes', error);
      }
    };

    fetchLikeInfo();
  }, [postId]);

  // Gérer le clic sur le bouton like
  const handleLikeClick = async () => {
    try {
      if (hasLiked) {
        await LikesService.deleteLike(postId);
        setHasLiked(false);
        setLikesCount(prev => prev - 1);
      } else {
        const newLike = await LikesService.createLike({ postId });
        setHasLiked(true);
        setLikesCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Erreur lors du clic sur like', error);
    }
  };

  return (
    <div
      className={`post-action like-action ${hasLiked ? 'liked' : ''}`}
      onClick={handleLikeClick}
    >
      {<img
        src={hasLiked ? likefull_icon : like_icon}
        alt="like"
        className="post-action-button"
      />}
      
      <p>{likesCount}</p>
    </div>
  );
};

export default LikeButton;
