import { useEffect, useState } from "react";
import Post from "../components/Post/Post.jsx";
import { Link } from "react-router-dom";
import Comment from "../components/Comment/Comment.jsx";
import { useParams } from "react-router-dom";
import arrowReturnLogo from "../assets/icons/arrow_return.png";

export default function Comments() 
{
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {   
        document.title = "Comments - AKTV";
        window.scrollTo(0, 0);
        setComments([{
        id: 1,
        username: "comments alice42",
        avatar: "https://i.pravatar.cc/40?img=1",
        content: "J'adore coder en React ⚛️ !",
        image: "https://picsum.photos/seed/react/400/200",
        timestamp: "il y a 1 heure",
        nbLikes: 120,
        nbComments: 45,
    },
    {
        id: 2,
        username: "comments bob_dev",
        avatar: "https://i.pravatar.cc/40?img=5",
        content: "Premier test avec Vite, c’est ultra rapide ! 🚀",
        response: 
        {
                id: 1,
                username: "comments alice42",
                avatar: "https://i.pravatar.cc/40?img=1",
                content: "J'adore coder en React ⚛️ !",
                image: "https://picsum.photos/seed/react/400/200",
                timestamp: "il y a 1 heure",
                nbLikes: 120,
                nbComments: 45
        },
        image: "https://picsum.photos/seed/vite/400/200",
        timestamp: "il y a 3 heures",
        nbLikes: 85,
        nbComments: 20,
    },
    {
        id: 3,
        username: "comments charlie_code",
        avatar: "https://i.pravatar.cc/40?img=7",
        content: "Quel est votre framework front préféré ? 🤔",
        response: 
        {
          id: 4,
          username: "comments david_tech",
          avatar: "https://i.pravatar.cc/40?img=3",
          content: "J’ai découvert une nouvelle librairie JS géniale !",
          image: "https://picsum.photos/seed/js/400/200",
          timestamp: "il y a 2 jours",
          nbLikes: 200,
          nbComments: 75,
        },
        image: null,
        timestamp: "il y a 5 minutes",
        nbLikes: 60,
        nbComments: 10,
    },
    {
        id: 4,
        username: "comments david_tech",
        avatar: "https://i.pravatar.cc/40?img=3",
        content: "J’ai découvert une nouvelle librairie JS géniale !",
        image: "https://picsum.photos/seed/js/400/200",
        timestamp: "il y a 2 jours",
        nbLikes: 200,
        nbComments: 75,
    },
    {
        id: 5,
        username: "comments eve_design",
        avatar: "https://i.pravatar.cc/40?img=9",
        content: "Le design est aussi important que le code ! 🎨",
        image: null,
        timestamp: "il y a 1 jour",
        nbLikes: 150,
        nbComments: 30,
    }]);
    }, []);

  return (
    <div style={styles.feedContainer}>
    <Link to="/" style={{ textDecoration: "none" }}>
      <img style={styles.ArrowReturnLogo} src={arrowReturnLogo} alt="" />
    </Link>
    <div style={styles.feedHeader}>
        <h1 style={styles.feedTitle}>Comments</h1>
    </div>
    <div style={styles.Post}>
        <Post
          username="Post alice42"
          avatar="https://i.pravatar.cc/40?img=1"
          content="J'adore coder en React ⚛️ !"
          image="https://picsum.photos/seed/react/400/200"
          timestamp="il y a 1 heure"
          id={id}
          nbLikes={120}
          nbComments={45}
        />
    </div>
      <div style={styles.feedComments}>
        {
        comments.map((post) => (
          <Comment
            key={post.id}
            username={post.username}
            avatar={post.avatar}
            content={post.content}
            image={post.image}
            timestamp={post.timestamp}
            nbLikes={post.nbLikes}
            response = {post.response}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  ArrowReturnLogo:{
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "2em",
    left: "1.8em",
    cursor: "pointer",
    zIndex: 1000,
  },
  Post: {
      marginBottom: "20px",
  },
  feedContainer: 
  {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1em",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#f5f5f5",
    marginBottom: "4em"
  },
  feedTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#f5f5f5",
  },
  feedComments: {
    display: "flex",
    flexDirection: "column",
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
