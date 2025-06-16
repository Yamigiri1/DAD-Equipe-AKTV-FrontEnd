import React, { useEffect } from 'react';
// import './Profile.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import appLogo from "../../assets/icons/app_logo.png";
import banner from "../../assets/img/banner.png";
import './Profile.css'; 
import userService from "../../services/UserService";

export default function Profile() {
    const { username } = useParams();
    console.log("Username from params:", username);

    //pavid api : http://localhost:3000/api/users/getUserByUsername/${username}

    // if user === ""
    //     /vid api : http://localhost:3000/api/users/currentuser

    // State to hold profile data   
    const [profileData, setProfileData] = useState([]);
    useEffect(() => {
        document.title = "Profile - AKTV";
        window.scrollTo(0, 0);

        const fetchProfile = async () => {
            try {
                let user;

                if (!username || username.trim() === "") {
                    // Récupérer l'utilisateur courant
                    user = await userService.getCurrentUser();
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
    
    return(
        <div className="profile">
            <HeaderProfile
            name={profileData.name}
            bio={profileData.bio}
            avatar={profileData.avatar}
            banner={profileData.banner}
            followers={profileData.followers}
            following={profileData.following} 
            />
        </div>
    );
}