import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import socialService from "../../services/SocialService";
import "./ProfileFollowers.css";

export default function Following() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFollowing = async () => {
      try {
        const response = await socialService.getFollowing(username);
        setFollowing(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des abonnements :", error);
      } finally {
        setLoading(false);
      }
    };
    getFollowing();
  }, [username]);

  if (loading) return <p style={{ textAlign: "center" }}>Chargement...</p>;

  return (
    <div className="followers-container">
      <h2 className="followers-title">Abonnements de {username}</h2>
      {following.length === 0 ? (
        <p>Aucun abonnement pour le moment.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {following.map(({ _id, username, bio }) => (
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
