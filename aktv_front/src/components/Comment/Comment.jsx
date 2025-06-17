import React, { useEffect } from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import "./Comment.css"
import LikeButton from "../Like/Like.jsx";
import { useState } from "react";
import {formatTimestamp} from "../../utils.js"; // Assuming you have a utility function to format timestamps

function handleDeployResponse(isResponseVisible, setIsResponseVisible) 
{
  return () => {
    // <ResponsePopup isOpen={isResponseVisible} />
    // setIsResponseVisible(!isResponseVisible);
  };
}

export default function Comment({ id, username, content, timestamp, nbLikes, response, isResponse }) {
  const [isResponseVisible, setIsResponseVisible] = useState(false);
  return (
    <div className="comment">
      <div className="header">
        <img src={appLogo} alt="avatar" className="avatar" />
        <div className="userInfo">
          <div className="username">{username}</div>
          <div className="timestamp">{formatTimestamp(timestamp)}</div>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="actions">
        <LikeButton postId={id} />
        <button className="action">
          {response || isResponse ? <></> : 
          <>
            <img src={commentLogo} alt="comment" className="actionButton" />
            <span>Répondre</span>
          </>}
        </button>
      </div>
        {response && (
          <>
            <button onClick={handleDeployResponse(isResponseVisible, setIsResponseVisible)} className="action">
              {isResponseVisible ? "Masquer la réponse" : "Voir la réponse"}
            </button>
              {isResponseVisible && (
                <div>
                  <Comment 
                  content={response.content} 
                  username={response.username}
                  timestamp={response.timestamp}
                  nbLikes={response.nbLikes} 
                  isResponse={true} />
                </div>
              )}
          </>
        )}
    </div>
  );
}
