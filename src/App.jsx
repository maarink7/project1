import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please enter username and password");
      return;
    }

    if (username === "maha" && password === "1234") {
      toast.success("Login Successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      toast.error("Invalid Username or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/31189.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Rain */}
      <div className="rain">
        {Array.from({ length: 80 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${0.7 + Math.random() * 1.2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Lightning */}
      <div className="lightning"></div>

      {/* Login Card */}
      <div
        style={{
          width: "380px",
          padding: "35px",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "16px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
          zIndex: 2,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#ea9a0f",
              margin: "0 auto 15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "28px",
            }}
          >
            👤
          </div>

          <h2 style={{ color: "#ea9a0f" }}>Welcome Back</h2>
        </div>

        <form onSubmit={handleLogin}>
          {/* Username */}
          <div style={{ marginBottom: "20px" }}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              autoComplete="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "13px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>
          {/* Password */}
          <div style={{ marginBottom: "25px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "13px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "15px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              border: "none",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #dc744b, #da8e24)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
