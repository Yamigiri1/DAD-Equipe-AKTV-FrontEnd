import React, { useEffect } from 'react';
// import './Profile.css'; // Assuming you have a CSS file for styling
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderProfile from '../../components/Profile/HeaderProfile';
import appLogo from "../../assets/icons/app_logo.png";
import banner from "../../assets/icons/banner.png";
import './Profile.css'; 

export default function Profile() {
    const { userId } = useParams();
    // State to hold profile data
    const [profileData, setProfileData] = useState([]);
    useEffect(() =>{
        //requete api avec userId pour récupérer les infos du profil
        document.title = "Profile - AKTV";
        window.scrollTo(0, 0);
        // Simulate fetching user data
        // In a real application, you would replace this with an API call
        console.log(`Fetching profile data for user ID: ${userId}`);
        setProfileData({
            userId: userId,
            name: "John Doe",
            bio: "This is a sample bio.",
            avatar: appLogo, // Placeholder image
            banner: banner, // Placeholder banner image
            followers: 120,
            following: 80,
        });
    }, [])
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