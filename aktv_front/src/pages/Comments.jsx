import { useEffect, useState } from "react";
import Post from "../components/Post/Post.jsx";
import { Link } from "react-router-dom";
import Comment from "../components/Comment/Comment.jsx";
import { useParams } from "react-router-dom";
import arrowReturnLogo from "../assets/icons/arrow_return.png";
import PostService from "../services/PostService.js";

export default function Comments() 
{
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState("");
    useEffect(() => {
      const fetchData = async () => {
        try {
          const post = await PostService.getPostById(id);
          const commentsData = await PostService.getCommentsByPostId(id);

          setPost(post);
          setComments(commentsData);
        } catch (error) {
          console.error("Erreur lors du chargement du post et des commentaires", error);
        }
      };

      document.title = "Comments - AKTV";
      window.scrollTo(0, 0);
      fetchData();
}, [id]);

  return (
    <div style={styles.feedContainer}>
    <Link to="/" style={{ textDecoration: "none" }}>
      <img style={styles.ArrowReturnLogo} src={arrowReturnLogo} alt="" />
    </Link>
    <div style={styles.feedHeader}>
        <h1 style={styles.feedTitle}>Comments</h1>
    </div>
    <div style={styles.Post}>
        {post && (
  <div style={styles.Post}>
    <Post
      id={post.id}
      username={post.username}
      avatar={post.avatar}
      content={post.content}
      image={post.image}
      timestamp={post.created_at}
      nbLikes={post.nbLikes}
      nbComments={post.nbComments}
    
    />
  </div>
)}
    </div>
      <div style={styles.feedComments}>
        {
        comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            username={comment.username}
            avatar={comment.avatar}
            content={comment.content}
            image={comment.image}
            timestamp={comment.timestamp}
            response = {comment.response}
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
