import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import "./Comment.css"
import { useState } from "react";

function handleDeployResponse(isResponseVisible, setIsResponseVisible) 
{
  return () => {
    setIsResponseVisible(!isResponseVisible);
  };
}

export default function Comment({ username, content, timestamp, nbLikes, response, isResponse }) {
  const [isResponseVisible, setIsResponseVisible] = useState(false);
  return (
    <div className="comment">
      <div className="header">
        <img src={appLogo} alt="avatar" className="avatar" />
        <div className="userInfo">
          <div className="username">{username}</div>
          <div className="timestamp">{timestamp}</div>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="actions">
        <button className="action">
          <img src={likeLogo} alt="like" className="actionButton" />
          <span>{nbLikes}</span>
        </button>
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
