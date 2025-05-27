import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { IoLogInOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import MyImage from "../assets/logo1.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [profile, setProfile] = useState(false);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const openPopup = () => {
    setProfile(true);
  };

  const closeButton = () => {
    setProfile(false);
  };

  const gotoLogin = () => {
    navigate("/login");
    setProfile(false);
    setShowMobileMenu(false); // close mobile menu on login
  };

  return (
    <div>
      {/* Upper bar */}
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
          <div className="profile" onClick={openPopup}>
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
                To access this feature, please log in.
              </p>
              <button className="login-button" type="button" onClick={gotoLogin}>
                Login
              </button>
              <button className="cancel-button" type="button" onClick={closeButton}>
                Cancel
              </button>
            </div>
          )}

          <div className="profile-text">
            <p className="text-guest">Hello Guest</p>
          </div>
          <NavLink className="login-icon" to="/login">
            <IoLogInOutline className="login-img" />
          </NavLink>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="navbar">
        <img className="logo_image" src={MyImage} alt="logo" />

        <div className="bar">
          <NavLink
            className={({ isActive }) => (isActive ? "home active-link" : "home")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "quizz active-link" : "quizz")}
            to="/quizz"
          >
            Quiz Topic
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "instract active-link" : "instract")}
            to="/instraction"
          >
            Instruction
          </NavLink>
          <div className="dropdown">
            <div className="drop-more">
              <p className="more">More</p>
              <div className="dropdown-content">
                <NavLink className="anchor" to="/contact">
                  Contact Us
                </NavLink>
                <NavLink className="anchor" to="/about">
                  About Us
                </NavLink>
                <NavLink className="anchor" to="/them">
                  Theme
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="mobile-menu">
            <NavLink className="mobile-link" to="/" onClick={toggleMobileMenu}>
              Home
            </NavLink>
            <NavLink className="mobile-link" to="/quizz" onClick={toggleMobileMenu}>
              Quiz Topic
            </NavLink>
            <NavLink className="mobile-link" to="/instraction" onClick={toggleMobileMenu}>
              Instruction
            </NavLink>
            <NavLink className="mobile-link" to="/contact" onClick={toggleMobileMenu}>
              Contact Us
            </NavLink>
            <NavLink className="mobile-link" to="/about" onClick={toggleMobileMenu}>
              About Us
            </NavLink>
            <NavLink className="mobile-link" to="/theme" onClick={toggleMobileMenu}>
              Theme
            </NavLink>
            <button className="mobile-login" onClick={gotoLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
