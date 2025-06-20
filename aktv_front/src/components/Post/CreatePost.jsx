import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import { Link } from "react-router-dom";
import "./CreatePost.css";
import UserPost from "../../services/UserPost";

export default function CreatePost() 
{
  // This component is used to create a new post.  
  const [postContent, setPostContent] = React.useState("");
  const [remainingChars, setRemainingChars] = React.useState(280);

  function handleSubmitPost(content) {
    UserPost.setPostsToUser(content)
    .then(() => {
        window.location.reload(); // Reload the page to show the new post
    }).catch((error) => {
        console.error("Erreur lors de la création du post:", error);
    });
    setPostContent(""); // Clear the post content after submission
    setRemainingChars(280);
  }


  function handleTextareaChange(event) 
    {
        const { value, maxLength } = event.target;
        if (value.length <= maxLength) {
            setPostContent(value);
        }
        setRemainingChars(maxLength - value.length);
    }

  const circumference = 81.68;
  const progress = (280 - postContent.length) / 280; // 0 à 1
  const offset = circumference * (1 - progress);

  return (
  <div className="create-post">
    <div className="create-post-header">
      <img src={appLogo} alt="Profil" className="post-avatar" />
    </div>
    <div className="create-post-content">
        <textarea
          className="create-post-textarea"
          value={postContent}
          placeholder="Que se passe-t-il ?"
          onChange={handleTextareaChange}
          maxLength={280}
        />
    </div>
    <div className="create-post-actions">
      <div className="create-post-stats">
        <svg width="30" height="30" className="progress-circle">
        <circle 
            cx="15" 
            cy="15" 
            r="13" 
            fill="none"
            stroke="#2f3336" 
            strokeWidth="2"
        />
        <circle 
            cx="15" 
            cy="15" 
            r="13" 
            fill="none"
            stroke="#58a6ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="81.68"
            strokeDashoffset={offset}
            transform="rotate(-90 15 15)"
        />
        </svg>
        <span className="character-count">{remainingChars}</span>
      </div>
      <button 
        className="create-post-submit" 
        disabled={postContent.trim().length === 0 || remainingChars < 0}
        onClick={() => {
            handleSubmitPost(postContent); // Assuming you have a function to handle post submission
        }}
      >
        Publier
      </button>
    </div>
  </div>
);
}