import React from "react";
import appLogo from "../../assets/icons/app_logo.png";
import commentLogo from "../../assets/icons/comment.png";
import likeLogo from "../../assets/icons/like.png";
import { Link } from "react-router-dom";

export default function Post({id, username, content, timestamp, nbLikes, nbComments}) {
  console.log("Post component rendered with id:", id);
  return (
    <div style={styles.post}>
      <div style={styles.header}>
        <img src={appLogo} alt="Profil" style={styles.avatar} />
        <div>
          <div style={styles.username}>{username}</div>
          <div style={styles.timestamp}>{timestamp}</div>
        </div>
      </div>
      <div style={styles.content}>
        Voici une publication de test avec un peu de texte pour voir l'affichage dans la timeline.
      </div>
      <div style={styles.content}>{content}</div>
      <div style={styles.actions}>
        <Link style={styles.action} >
            <img src={likeLogo} alt="Profil" style={styles.actionButton} />
            <p>{nbLikes}</p>
        </Link>
        <Link style={styles.action} to={`/comments/` + id}>
            <img src={commentLogo} alt="Profil" style={styles.actionButton} />
            <p>{nbComments}</p>
        </Link>
      </div>
    </div>
  );
}

const styles = {
post: {
  border: "1px solid #333",
  borderRadius: "12px",
  padding: "16px",
  backgroundColor: "#1e1e1e",
  boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
  color: "#f5f5f5"
},
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  username: {
    fontWeight: "bold",
    fontSize: "1em",
  },
  timestamp: {
    fontSize: "0.8em",
    color: "#777",
  },
  actions: {
    display: "flex",
  },
  action: {
    marginTop: "0.5em",
    color: "#6D6D6D",
    display: "flex",
    alignItems: "center",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  content: {
  fontSize: "0.9em",
  lineHeight: "1.5",
  color: "white",
  padding: "8px 0",
  whiteSpace: "pre-wrap", // permet les sauts de ligne
},
actionButton:
{
    width: "1.2em",
    height: "1.2em",
    marginRight: "0.3em",
    marginLeft: "1em",
}
};
