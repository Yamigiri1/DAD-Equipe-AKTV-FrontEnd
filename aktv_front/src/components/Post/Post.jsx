import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import LikeButton from "../Like/Like";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Post.css";
import { formatTimestamp } from "../../utils";
export default function Post({id, username, content, timestamp, nbLikes, nbComments}) {
  useEffect(()=>{
    
  }, [])
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
        <Link className="post-action" to={`/comments/` + id}>
            <img src={commentLogo} alt="Commentaires" className="post-action-button" />
            <p>{nbComments ? nbComments : "Répondre"}</p>
        </Link>
      </div>
    </div>
  );
}