// components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../assets/icons/home.png";
import notifIcon from "../assets/icons/notifications.png";
import messIcon from "../assets/icons/messages.png";
import profileIcon from "../assets/icons/profil.png";
import homeIconSelected from "../assets/icons/home_selected.png";
import notifIconSelected from "../assets/icons/notifications_selected.png";
// import messIconSelected from "../assets/icons/messages_selected.png";
import profileIconSelected from "../assets/icons/profil_selected.png";
import searchIconSelected from "../assets/icons/search_selected.png";
import searchIcon from "../assets/icons/search.png";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}><img src={location.pathname === "/" ? homeIconSelected : homeIcon} alt="Fil" style={styles.icon} /></Link>
      <Link to="/my-profile" style={styles.link}><img src={location.pathname.startsWith("/my-profile")  ? profileIconSelected : profileIcon} alt="Fil" style={styles.icon} /></Link>
      <Link to="/notifications" style={styles.link}><img src={location.pathname.startsWith("/notifications")  ? notifIconSelected : notifIcon} alt="Notification" style={styles.icon} /></Link>
      <Link to="/search" style={styles.link}><img src={location.pathname.startsWith("/search")  ? searchIconSelected : searchIcon } alt="Profil" style={styles.icon} /></Link>
    </nav>
  );
}

const styles = {
  nav: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "black",
    display: "flex",
    gap: "1rem",
    width: "100%",
    justifyContent: "space-around",
    position: "fixed",
    bottom: 0,
    left: 0,
     zIndex: 1000
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold"
  },
    icon: {
    width: "1.5em",
    height: "1.5em"
  }

};
