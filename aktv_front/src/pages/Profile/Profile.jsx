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
import Posts from '../../components/Post/Posts';


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

    <div className="profile-post">
        <Posts isAccount={true}/>
    </div>
</div>

    );
}