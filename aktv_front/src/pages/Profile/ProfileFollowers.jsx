import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socialService from "../../services/SocialService";
import "./ProfileFollowers.css";
import { useNavigate } from "react-router-dom";

export default function Followers() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const response = await socialService.getFollowers(username);
        setFollowers(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des abonnés :", error);
      } finally {
        setLoading(false);
      }
    };
    getFollowers();
  }, [username]);

  if (loading) return <p style={{ textAlign: "center" }}>Chargement...</p>;

  return (
    <div className="followers-container">
      <h2 className="followers-title">Abonnés de {username}</h2>
      {followers.length === 0 ? (
        <p>Aucun abonné pour le moment.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {followers.map(({ _id, username, bio }) => (
            <li
              key={_id}
              className="follower-item"
              onClick={() => navigate(`/profile/${username}`)}
              style={{ cursor: "pointer" }}
            >
              <strong className="follower-username">{username}</strong><br />
              {bio && <small>{bio}</small>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}