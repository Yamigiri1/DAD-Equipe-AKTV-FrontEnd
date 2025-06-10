import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import "./HeaderProfile.css";

export default function HeaderProfile({ name, bio, avatar, banner, followers, following, userId, joinedDate }) {
  return (
    <div className="header-profile-container">
      <div className="header-banner">
        {banner && <img src={banner} alt="Bannière de profil" className="banner-image" />}
      </div>
      <div className="profile-header">
      <img src={avatar || appLogo} alt="Profil" className="profile-avatar" />
      
      <div className="profile-actions">
        <button className="action-button" title="Plus d'options">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>
        </button>
        <button className="action-button" title="Envoyer un message">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"/>
          </svg>
        </button>
        <button className="action-button">Suivre</button>
      </div>
      </div>
      
      <div className="profile-info">
        <h1 className="profile-name">{name || "Nom d'utilisateur"}</h1>
        {bio && <p className="profile-bio">{bio}</p>}
        
        {joinedDate && (
          <div className="profile-joined">
            A rejoint {joinedDate}
          </div>
        )}
        
        <div className="profile-stats">
          <span 
            className="profile-following" 
            data-count={following || 0}
          >
            abonnements
          </span>
          <span 
            className="profile-followers" 
            data-count={followers || 0}
          >
            abonnés
          </span>
        </div>
      </div>
    </div>
  );
}