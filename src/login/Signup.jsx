import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (pass) =>
    pass.length >= 6 && /[A-Z]/.test(pass) && /[0-9]/.test(pass);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ❌ Validate inputs
    if (!name || !email || !password || !confirmPass) return;
    if (!isValidEmail(email)) return;
    if (!isStrongPassword(password)) return;
    if (password !== confirmPass) return;

    // 📦 Get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      alert("⚠️ User already exists with this email.");
      return;
    }

    // ✅ Create new user
    const newUser = {
      name,
      email,
      password,
      totalPoints: 0,
      lastScore: 0,
      recentQuiz: "None",
      level: "Beginner",
      lastRewardPoint: 0,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Save session info
    localStorage.setItem("isSignedUp", "true");
    localStorage.setItem("userName", name);
    localStorage.setItem("email", email);

    alert("🎉 Sign Up Successful!");
    navigate("/info");
  };

  return (
    <div className="body">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2 className="heading">Sign Up</h2>
        <div className="containerBox">
          {/* Name */}
          <div>
            <p className="fildName">Name</p>
            <input
              type="text"
              className="inputBox"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {submitted && !name && <p className="noData">Name is required</p>}
          </div>

          {/* Email */}
          <div>
            <p className="fildName">Email</p>
            <input
              type="email"
              className="inputBox"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {submitted && !email && <p className="noData">Email is required</p>}
            {email && !isValidEmail(email) && (
              <p className="noData">Invalid email format</p>
            )}
          </div>

          {/* Password */}
          <div className="passwordWrapper">
            <p className="fildName">Password</p>
            <div className="inputContainer">
              <input
                type={showPassword ? "text" : "password"}
                className="inputBox"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="eyeIcon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {submitted && !password && (
              <p className="noData">Password is required</p>
            )}
            {password && !isStrongPassword(password) && (
              <p className="noData">
                Password must be at least 6 characters, include a number and an uppercase letter
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="passwordWrapper">
            <p className="fildName">Confirm Password</p>
            <div className="inputContainer">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="inputBox"
                placeholder="Confirm password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              <span
                className="eyeIcon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {submitted && !confirmPass && (
              <p className="noData">Confirm Password is required</p>
            )}
            {confirmPass && password && confirmPass !== password && (
              <p className="noData">Passwords do not match</p>
            )}
          </div>

          {/* Submit */}
          <div>
            <button className="signupBotton">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
