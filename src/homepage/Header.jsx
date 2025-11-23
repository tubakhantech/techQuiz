import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { IoLogInOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import MyImage from "../assets/logo1.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userName, setUserName] = useState("Guest");
  const [showMysteryBox, setShowMysteryBox] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Keep login state synced on route change
  useEffect(() => {
    const signedUp = localStorage.getItem("isSignedUp") === "true";
    const name = localStorage.getItem("userName") || "Guest";
    setIsSignedUp(signedUp);
    setUserName(name);

    checkMilestoneAndShow(); // Also check milestone on route change
  }, [location.pathname]);

  // ✅ Listen for 'checkMilestone' events triggered by quiz
  useEffect(() => {
    const handleCheck  = () => {
      console.log("✅ checkMilestone event received! Calling milestone check...");
      checkMilestoneAndShow();
    };

    window.addEventListener("checkMilestone", handleCheck);

    return () => {
      window.removeEventListener("checkMilestone", handleCheck);
    };
  }, []);

  // ✅ Milestone check function
  const checkMilestoneAndShow = () => {
    const email = localStorage.getItem("email");
    if (!email){
      console.log("No email found in localStorage");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((u) => u.email === email);
    if (!foundUser){
      console.log("User not found in localStorage");
      return;
    }

    let updatedUser = { ...foundUser };
    const updatedPoints = updatedUser.totalPoints || 0;
    let lastRewardPoint = updatedUser.lastRewardPoint || 0;

    // Calculate milestone as multiples of 100
    let milestone = Math.floor(updatedPoints / 100) * 100;
    console.log({ updatedPoints, lastRewardPoint, milestone });

    if (milestone > lastRewardPoint && milestone <= 8000) {
      console.log("Milestone reached, showing mystery box!");
      // Show mystery box
      setShowMysteryBox(true);

      // Update lastRewardPoint
      updatedUser.lastRewardPoint = milestone;

      // Update user in localStorage
      const index = users.findIndex((u) => u.email === email);
      if (index !== -1) {
        users[index] = updatedUser;
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Updated users in localStorage with new lastRewardPoint");

      }
      else{
        console.log("Milestone not reached or already rewarded.");
      }
    }
  };

  const handleCloseMystery = () => {
    setShowMysteryBox(false);
  };

  const handleProfileClick = () => {
    if (isSignedUp) {
      navigate("/info");
    } else {
      setProfile(true);
    }
  };

  const closeButton = () => {
    setProfile(false);
  };

  const gotoLogin = () => {
    navigate("/Signup");
    setProfile(false);
    setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      {/* 🎁 Mystery Box Popup */}
      {showMysteryBox && (
        <>
          <div className="mystery-overlay" onClick={handleCloseMystery} />
          <div className="mystery-box">
            <h2>🎁 Mystery Box!</h2>
            <p>Congratulations! Keep up the great work! 🚀</p>
            <button onClick={handleCloseMystery}>Close</button>
          </div>
        </>
      )}

      <div className="upper_bar">
        <div className="drop_down">
          <div className="english">
            English(US)
            <div className="dropdown-content-english">
              <p className="english">English(US)</p>
            </div>
          </div>
        </div>

        <div className="profile-right-box">
          <div className="profile" onClick={handleProfileClick}>
            <img
              className="profile-img"
              src="https://i.pinimg.com/736x/19/99/9f/19999fb3c6c9df3d7e6b21f4155d37e2.jpg"
              alt="profile"
            />
          </div>

          {profile && (
            <div className="profile-popup">
              <MdErrorOutline className="profile-icon" />
              <p className="profile-popup-text">
                To access this feature, please Sign Up.
              </p>
              <button className="login-button" onClick={gotoLogin}>
                Sign Up
              </button>
              <button className="cancel-button" onClick={closeButton}>
                Cancel
              </button>
            </div>
          )}

          <div className="profile-text">
            <p className="text-guest">Hello {userName}</p>
          </div>

          {isSignedUp ? (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink className="login-icon" to="/Signup">
              <IoLogInOutline className="login-img" />
            </NavLink>
          )}
        </div>
      </div>

      <div className="navbar">
        <img className="logo_image" src={MyImage} alt="logo" />

        <div className={`bar ${showMobileMenu ? "active" : ""}`}>
          <NavLink
            className="home"
            to="/"
            onClick={() => setShowMobileMenu(false)}
          >
            Beginner
          </NavLink>
          <NavLink
            className="quizz"
            to="/quizz"
            onClick={() => setShowMobileMenu(false)}
          >
            Intermediate
          </NavLink>
          <NavLink
            className="instract"
            to="/instraction"
            onClick={() => setShowMobileMenu(false)}
          >
            Expert
          </NavLink>
          <div className="dropdown">
            <button className="menu-btn deropdown-toggle">More</button>
            <div className="dropdown-content">
              <NavLink
                className="anchor"
                to="/contact"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact Us
              </NavLink>
              <NavLink
                className="anchor"
                to="/about"
                onClick={() => setShowMobileMenu(false)}
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar1">≡</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
