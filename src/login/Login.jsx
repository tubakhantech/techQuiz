import React, { useState } from "react";
import "./Login.css"; // Assuming you have a CSS file for styling

const mockUsers = [
  { email: "user1@example.com", password: "password123" },
  { email: "user2@example.com", password: "mypassword" },
];

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👈 Added state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setAuthError("");
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required.";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userExists = mockUsers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (userExists) {
        setSubmitted(true);
        setAuthError("");
        console.log("Login successful:", formData);
      } else {
        setAuthError("Account not found or incorrect credentials.");
        setSubmitted(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {submitted && <p className="success">Login successful!</p>}
      {authError && <p className="error">{authError}</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"} // 👈 Toggle here
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <div>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
