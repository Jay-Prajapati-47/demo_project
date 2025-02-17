import React, { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", name: "" });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && !formData.name) {
      setError("Name is required for Sign Up");
      return;
    }
    if (!formData.email || !formData.password) {
      setError("Email and Password are required");
      return;
    }
    console.log(isSignUp ? "Signing Up" : "Signing In", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        // backgroundColor: "#ffcc80",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          //   backgroundColor: "#ff9800",
        }}
      >
        <h3 style={{ textAlign: "center", color: "#ff9800" }}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </h3>
        {error && (
          <div style={{ color: "red", textAlign: "center" }}>{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div style={{ marginBottom: "10px" }}>
              <label style={{ color: "#ff9800" }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  //   borderRadius: "5px",
                  border: "2px solid #ff9800",
                  outline: "none",
                }}
              />
            </div>
          )}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "#ff9800" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "2px solid #ff9800",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ color: "#ff9800" }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "2px solid #ff9800",
                outline: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#e65100",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "10px", color: "black" }}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={toggleForm}
            style={{
              background: "none",
              border: "none",
              color: "orange",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
