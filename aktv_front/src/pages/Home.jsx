import { useState } from "react";
import Post from "../components/Post.jsx";

export default function Home() {
  const [posts, setPosts] = useState([
    {
        id: 1,
        username: "alice42",
        avatar: "https://i.pravatar.cc/40?img=1",
        content: "J'adore coder en React ⚛️ !",
        image: "https://picsum.photos/seed/react/400/200",
        timestamp: "il y a 1 heure",
        nbLikes: 120,
        nbComments: 45,
    },
    {
        id: 2,
        username: "bob_dev",
        avatar: "https://i.pravatar.cc/40?img=5",
        content: "Premier test avec Vite, c’est ultra rapide ! 🚀",
        image: "https://picsum.photos/seed/vite/400/200",
        timestamp: "il y a 3 heures",
        nbLikes: 85,
        nbComments: 20,
    },
    {
        id: 3,
        username: "charlie_code",
        avatar: "https://i.pravatar.cc/40?img=7",
        content: "Quel est votre framework front préféré ? 🤔",
        image: null,
        timestamp: "il y a 5 minutes",
        nbLikes: 60,
        nbComments: 10,
    },
    {
        id: 4,
        username: "david_tech",
        avatar: "https://i.pravatar.cc/40?img=3",
        content: "J’ai découvert une nouvelle librairie JS géniale !",
        image: "https://picsum.photos/seed/js/400/200",
        timestamp: "il y a 2 jours",
        nbLikes: 200,
        nbComments: 75,
    },
    {
        id: 5,
        username: "eve_design",
        avatar: "https://i.pravatar.cc/40?img=9",
        content: "Le design est aussi important que le code ! 🎨",
        image: null,
        timestamp: "il y a 1 jour",
        nbLikes: 150,
        nbComments: 30,
    },
    
  ]);

  return (
    <div style={styles.feedContainer}>
    <div style={styles.feedHeader}>
        <h1 style={styles.feedTitle}>Bienvenue sur AKTV</h1>
    </div>
      <div style={styles.feedPosts}>
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            avatar={post.avatar}
            content={post.content}
            image={post.image}
            timestamp={post.timestamp}
            nbLikes={post.nbLikes}
            nbComments={post.nbComments}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  feedContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1em",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#f5f5f5",
  },
  feedTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#f5f5f5",
  },
  feedPosts: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  feedHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: "#121212",
    padding: "0.5em",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.04)",
    zIndex: 10,
    textAlign: "center",
    color: "#f5f5f5",

  },
};
