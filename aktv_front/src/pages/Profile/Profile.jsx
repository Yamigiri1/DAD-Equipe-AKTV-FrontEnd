import React, { useEffect } from 'react';
// import './Profile.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import appLogo from "../../assets/icons/app_logo.png";
import banner from "../../assets/img/banner.png";
import './Profile.css';
import userService from "../../services/UserService";
import postService from "../../services/PostService";
import Post from '../../components/Post/Post';


export default function Profile() {
    const { username } = useParams();
    const [loading, setLoading] = useState(true); // Pour le chargement initial
    const [error, setError] = useState("");
    const [userPosts, setUserPosts] = useState([]);
    console.log("Username from params:", username);


    // State to hold profile data   
    const [profileData, setProfileData] = useState([]);
    useEffect(() => {
        document.title = "Profile - AKTV";
        window.scrollTo(0, 0);

        const fetchProfile = async () => {
            try {
                let user;
                console.log("Fetching profile for username:", username);
                if (!username || username.trim() === "") {
                    // Récupérer l'utilisateur courant
                    user = await userService.getCurrentUser();
                    console.log("user : ", user);
                    console.log("user", user)
                } else {
                    // Récupérer un utilisateur par son username
                    user = await userService.getUserByUsername(username);
                }
                postService.getPostByUsername(user.username).
                then((data) => 
                    { 
                        console.log(data.posts)
                        setUserPosts(data.posts) 

                    })
                .catch((error) => { console.error("Erreur lors de la récupération des posts par username"), error });
                setProfileData({
                    username: user.username,
                    name: user.name || user.username, // fallback
                    bio: user.bio || "",
                    avatar: appLogo,
                    banner: banner,
                    followers: user.followers?.length || 0,
                    following: user.following?.length || 0,
                });
            } catch (err) {
                setError("Impossible de charger le profil.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [username]);

    return (
        <div className="profile">
    <HeaderProfile
        username={profileData.username}
        bio={profileData.bio}
        avatar={profileData.avatar}
        banner={profileData.banner}
        followers={profileData.followers}
        following={profileData.following}
    />

    <div className="profile-comments">
        {userPosts.length === 0 ? (
            <p>Aucun commentaire ou post pour le moment.</p>
        ) : (
            userPosts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    content={post.content}
                    timestamp={post.timestamp}
                    nbLikes={post.nbLikes}
                    nbComments={post.nbComments}
                    isResponseAvailable={false}
                    UpdateComments={() => {}}
                />
            ))
        )}
    </div>
</div>

    );
}