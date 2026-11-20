import axios from "axios";
import "./Login.css";
import Signup from "./signup";
import { useState } from "react";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      alert("Login Successful");
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      {!register ? (
        <Signup />
      ) : (
        <>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter you Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter you Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{" "}
            <button onClick={handleSignup}>Sign up</button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
