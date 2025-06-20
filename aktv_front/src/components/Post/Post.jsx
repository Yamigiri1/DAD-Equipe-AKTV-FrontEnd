import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import LikeButton from "../Like/Like";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Post.css";
import { formatTimestamp } from "../../utils";
import ResponsePopup from '../ResponsePopup/ResponsePopup'
import { useState } from "react";
export default function Post({id, username, content, timestamp, nbLikes, nbComments, isResponseAvailable, UpdateComments}) {
  useEffect(()=>{}, [])

  function handleClosePopupResponse()
  {
    setIsPopupOpen(false);
    UpdateComments(true);
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="post">
      <div className="post-header">
        <img src={appLogo} alt="Profil" className="post-avatar" />
        <div className="post-user-info">
          <div className="post-username">{username}</div>
          <div className="post-timestamp">Il y a {formatTimestamp(timestamp)}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        <LikeButton postId={id} />
        {
          isResponseAvailable ?
        <div className="post-action" onClick={() =>{setIsPopupOpen(true)}}>
        <img src={commentLogo} alt="Commentaires" className="post-action-button" />
        <p>Répondre</p>
        </div>
        :
        <Link className="post-action" to={`/comments/` + id}>
            <img src={commentLogo} alt="Commentaires" className="post-action-button" />
            <p>{nbComments ? nbComments : "Répondre"}</p>
        </Link> 
        }
      </div>
      <ResponsePopup
        isOpen={isPopupOpen}
        postId={id}
        onClose={() => handleClosePopupResponse()}
      />
    </div>
  );
}