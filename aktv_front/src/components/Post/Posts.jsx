import { useEffect, useState } from "react";
import Post from "./Post.jsx";
import CreatePost from "./CreatePost.jsx";
import PostService from "../../services/PostService.js";

export default function Posts({isAccount=false}) {
  const [posts, setPosts] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if(isAccount){
    console.log("regis : ", user.username);
    PostService.getPostByUsername(user.username)
      .then((data) => {
          // Vérifie si data.posts existe
          if (data.posts && data.posts.length > 0) {
              data.posts.forEach((postId) => {
                  PostService.getPostById(postId)
                      .then((postDetails) => {
                          setPosts(prevPosts => [...prevPosts, postDetails]);
                      })
                      .catch((err) => {
                          console.error(`Erreur lors du chargement du post ${postId}:`, err);
                      });
              });
          } else {
              setPosts([]); // aucun post
          }
      })
      .catch((err) => {
          console.error("Erreur lors de la récupération des posts:", err);
      });
    }
    else{
      //récupérer tous les posts
      PostService.getFeedPosts().then((data) => {
        setPosts(data.posts);
        // setPosts(data); // Uncomment this line to use real data from the API
      }).catch((error) => {
        console.error("Erreur lors de la récupération des posts:", error);
      });
    }
    
  }, []);
  return (

      <div style={styles.feedPosts}>
        {
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={"factice"}//post.username
            avatar={"factice"}//post.avatar
            content={post.content}
            image={"factice"}//post.image
            timestamp={post.created_at}
            nbComments={post.comment_count}//post.nbComments
            isResponseAvailable={false}
          />
        ))}
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
