import React, { useEffect, useState } from "react";
import "./Profileinfo.css";

const Profileinfo = () => {
  const email = localStorage.getItem("email");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((u) => u.email === email);
    setUser(foundUser);
  }, [email]);

  useEffect(() => {
    if (!user) return;

    let updatedUser = { ...user };
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Level change
    if (updatedUser.totalPoints >= 10000 && updatedUser.level !== "Expert") {
      updatedUser.level = "Expert";
    } else if (
      updatedUser.totalPoints < 10000 &&
      updatedUser.level !== "Beginner"
    ) {
      updatedUser.level = "Beginner";
    }

    // ✅ Save changes to localStorage
    const index = users.findIndex((u) => u.email === email);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
    }

    setUser(updatedUser);
  }, [user?.totalPoints]);

  if (!user) return <p>User not found</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-left">
          <div className="avatar">{user.name?.charAt(0).toUpperCase()}</div>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-level">{user.level}</p>
        </div>
        <div className="profile-right">
          <div className="info-section">
            <h3>Information</h3>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>User Name:</strong> {user.name}
            </p>
          </div>
          <div className="quiz-section">
            <h3>Quiz Stats</h3>
            <p>
              <strong>Recent Quiz:</strong> {user.recentQuiz}
            </p>
            <p>
              <strong>Last Score:</strong> {user.lastScore}%
            </p>
            <p>
              <strong>Total Points:</strong> {user.totalPoints}
            </p>
            <p>
              <strong>Current Level:</strong> {user.level}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileinfo;
