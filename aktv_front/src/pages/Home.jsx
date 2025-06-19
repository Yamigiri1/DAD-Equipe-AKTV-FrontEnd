import { useEffect, useState } from "react";
import Post from "../components/Post/Post.jsx";
import CreatePost from "../components/Post/CreatePost.jsx";
import PostService from "../services/PostService.js";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    document.title = "AKTV - Feed";
    window.scrollTo(0, 0);
    //récupérer tous les posts
    PostService.getFeedPosts().then((data) => {
      console.log("Posts récupérés:", data);
      setPosts(data.posts);
      // setPosts(data); // Uncomment this line to use real data from the API
    }).catch((error) => {
      console.error("Erreur lors de la récupération des posts:", error);
    });
    
  }, []);
  return (
    <div style={styles.feedContainer}>
          <CreatePost />
    <div style={styles.feedHeader}>
        <h1 style={styles.feedTitle}>Votre actualité</h1>
    </div>
      <div style={styles.feedPosts}>
        {
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.author_username}//post.username
            avatar={"factice"}//post.avatar
            content={post.content}
            image={"factice"}//post.image
            timestamp={post.created_at}
            nbComments={post.comment_count}//post.nbComments
            isResponseAvailable={false}
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
    marginBottom: "4em"
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
