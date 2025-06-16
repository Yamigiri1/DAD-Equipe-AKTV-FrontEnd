import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import { Link } from "react-router-dom";
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
        <Link className="post-action like-action">
            <img src={likeLogo}  alt="Like" className="post-action-button" />
            <p>{nbLikes}</p>
        </Link>
        <Link className="post-action" to={`/comments/` + id}>
            <img src={commentLogo} alt="Commentaires" className="post-action-button" />
            <p>{nbComments}</p>
        </Link>
      </div>
    </div>
  );
}