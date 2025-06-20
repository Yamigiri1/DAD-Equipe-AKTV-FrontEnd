import { useEffect, useState } from "react";
import Post from "../components/Post/Post.jsx";
import CreatePost from "../components/Post/CreatePost.jsx";
import PostService from "../services/PostService.js";
import Posts from '../components/Post/Posts'

export default function Home() {

  useEffect(() => {
    document.title = "AKTV - Feed";
    window.scrollTo(0, 0);
    }, []);
  return (<>
     <div style={styles.feedContainer}>
              <CreatePost />
        <div style={styles.feedHeader}>
            <h1 style={styles.feedTitle}>Votre actualité</h1>
        </div>
        <Posts />
      </div>
  </>);
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
