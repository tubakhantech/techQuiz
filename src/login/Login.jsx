// UserProfile.jsx
import React, { useEffect, useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser({
        ...currentUser,
        quizLevel: "Beginner",
        score: 0,
        points: 0,
        isSignedUp: true,
        image: `https://i.pravatar.cc/150?u=${currentUser.email}`
      });
    }
  }, []);

  const handleProfileClick = () => {
    if (user?.isSignedUp) {
      setShowProfile(!showProfile);
    } else {
      alert("Please sign up to view profile info.");
    }
  };

  if (!user) return null;

  return (
    <div className="user-profile-container">
      <img
        src={user.image}
        alt="Profile"
        className="profile-img"
        onClick={handleProfileClick}
      />
      {showProfile && (
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Quiz Level:</strong> {user.quizLevel}</p>
          <p><strong>Score:</strong> {user.score}</p>
          <p><strong>Points:</strong> {user.points}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
