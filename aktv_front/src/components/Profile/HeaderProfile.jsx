import React, { useContext } from "react";
import appLogo from "../../assets/icons/app_logo.png";
import "./HeaderProfile.css";
import socialService from "../../services/SocialService";
import userService from "../../services/UserService";
import {useEffect} from "react";
import { useAuth } from "../../context/AuthContext";

export default function HeaderProfile({ username, bio, avatar, banner, followers, following, joinedDate }) {


  const [isFollowing, setIsFollowing] = React.useState(false);
        const [followersCount, setFollowersCount] = React.useState(0);
  useEffect(() => {
    setFollowersCount(followers || 0);
  }, [followers]);
  // State to manage follow/unfollow status
  useEffect(() => {
    const checkFollowingStatus = async () => {
      try {
        await socialService.isFollowing(username)
        .then((response) => {
          setIsFollowing(response.isFollowing);
        })
        .catch((error) => {
          console.error('Erreur lors de la requête :', error);
          return false; // En cas d'erreur, on considère que l'utilisateur n'est pas suivi
        });
      } catch (error) {
        console.error('Erreur lors de la vérification du suivi :', error);
      }
    };
    checkFollowingStatus();
  }, [username]);

  const handleFollow = async () => {
    try {
      if (isFollowing) {
        // Si l'utilisateur est déjà suivi, on le désabonne
        socialService.unfollowUser(username)
        .then((response) => {
            setIsFollowing(false);
            setFollowersCount((prevCount) => prevCount - 1); // Décrémente le nombre de followers
          })
          .catch((error) => {
            console.error('Erreur lors de la requête :', error);
          });
      } else {
        // Si l'utilisateur n'est pas suivi, on le suit
        socialService.followUser(username)
          .then((response) => {
            setIsFollowing(true);
            setFollowersCount((prevCount) => prevCount + 1); // Incrémente le nombre de followers
          })
          .catch((error) => {
            console.error('Erreur lors de la requête :', error);
          });
      }
    } catch (error) {
      console.error('Erreur lors du follow :', error.response?.data?.message || error.message);
    }
  };

  const [showMenu, setShowMenu] = React.useState(false);
  const [isOwnProfile, setIsOwnProfile] = React.useState(false);
  const { user, logout } = useAuth();

  // Check if the user visiting the profile is the current user
  // (Will affect if we see the follow button or the options menu)
  useEffect(() => {
    const CheckAndSetIsOwnProfile = async () => {
      try {
        setIsOwnProfile(user?.username === username);
      } catch (error) {
        console.error("Erreur en récupérant l'utilisateur actuel :", error);
        setIsOwnProfile(false);
      }
    };
    CheckAndSetIsOwnProfile();
  }, [user, username]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    logout(); // Appelle la fonction de déconnexion du contexte
    window.location.href = "/auth"; // redirige vers la page d'authentification
  };

  const [showBioModal, setShowBioModal] = React.useState(false);
  const [newBio, setNewBio] = React.useState(bio || "");

  const handleUpdateBio = async () => {
    try {
      // Appel au userService pour mettre à jour la bio
      await userService.updateCurrentUserBio(newBio);
      setShowBioModal(false);
      window.location.reload(); // recharge la page pour refléter les changements
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la bio :", error);
    }
  };


  return (
    <div className="header-profile-container">
      <div className="header-banner">
        {banner && <img src={banner} alt="Bannière de profil" className="banner-image" />}
      </div>
      <div className="profile-header">
        <img src={avatar || appLogo} alt="Profil" className="profile-avatar" />
        <div className="profile-actions">
          {isOwnProfile ? (
            <div className="dropdown-container">
              <button className="action-button" title="Plus d'options" onClick={toggleMenu}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 00.12-.64l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.007 7.007 0 00-1.63-.94L14.5 2.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5l-.38 2.46a6.978 6.978 0 00-1.63.94l-2.39-.96a.5.5 0 00-.6.22L2.71 8.44a.5.5 0 00.12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.83 13.58a.5.5 0 00-.12.64l1.92 3.32c.13.22.4.3.63.22l2.39-.96c.5.39 1.05.72 1.63.94l.38 2.46c.04.25.25.44.5.44h4c.25 0 .46-.19.5-.44l.38-2.46c.58-.22 1.13-.55 1.63-.94l2.39.96c.23.09.5 0 .63-.22l1.92-3.32a.5.5 0 00-.12-.64l-2.03-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
                </svg>
              </button>
              {showMenu && (
                  <div className="dropdown-menu">
                    <button onClick={handleLogout}>Se déconnecter</button>
                    <button onClick={() => setShowBioModal(true)}>Modifier la bio</button>
                  </div>
              )}
            </div>
          ) : (
              <div className="profile-actions">
                <button onClick={handleFollow} className="action-button"> {isFollowing ? "Se désabonner" : "Suivre"}</button>
              </div>
            )}
        </div>
      </div>
      
      <div className="profile-info">
        <h1 className="profile-name">{username || "Nom d'utilisateur"}</h1>
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
            data-count={followersCount || 0}
          >
            abonnés
          </span>
        </div>
      </div>
      <dialog open={showBioModal} className="bio-dialog">
        <h3>Modifier votre bio</h3>
        <textarea
          value={newBio}
          onChange={(e) => setNewBio(e.target.value)}
          rows="4"
          style={{ width: "100%", marginTop: "10px" }}
        />
        <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button onClick={handleUpdateBio}>Valider</button>
          <button onClick={() => setShowBioModal(false)}>Annuler</button>
        </div>
      </dialog>
    </div>
  );
}