
import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import { Link } from "react-router-dom";
import "./ResponsePopup.css";
import PostService from "../../services/PostService";

export default function ResponsePopup({ isOpen, onClose }) {
  // This component is used to create a new post as a modal popup.
  const [postContent, setPostContent] = React.useState("");
  const [remainingChars, setRemainingChars] = React.useState(280);

  function handleSubmitResponse(content) {
    // Handle post submission logic here
    console.log("Post submitted:", content);
    setPostContent("");
    setRemainingChars(280);
    onClose(); // Close modal after submission
  }

  function handleTextareaChange(event) {
    const { value, maxLength } = event.target;
    if (value.length <= maxLength) {
      setPostContent(value);
    }
    setRemainingChars(maxLength - value.length);
  }

  const circumference = 81.68;
  const progress = (280 - postContent.length) / 280; // 0 à 1
  const offset = circumference * (1 - progress);

  // Don't render if modal is not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Créer un nouveau post</h2>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-content">
          <div className="post-composer">
            <div className="user-avatar">
              <img src={appLogo} alt="User Avatar" className="avatar-image" />
            </div>
            
            <div className="composer-input-section">
              <textarea
                className="post-textarea"
                placeholder="Quoi de neuf ?"
                value={postContent}
                onChange={handleTextareaChange}
                maxLength={280}
                rows={4}
              />
            </div>
          </div>

          <div className="composer-actions">
            <div className="character-counter">
              <svg width="30" height="30" className="progress-ring">
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
              <span className="chars-remaining">{remainingChars}</span>
            </div>
            
            <button
              className="publish-btn"
              disabled={postContent.trim().length === 0 || remainingChars < 0}
              onClick={() => {
                handleSubmitResponse(postContent);
              }}
            >
              Publier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

