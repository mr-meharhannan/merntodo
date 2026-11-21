import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { auth } from "../context/context";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const { setToken } = useContext(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/auth/register", {
        email,
        password,
        username,
      });
      alert("Signup Successful");
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      if (setToken) {
        setToken(res.data.token);
      }
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
      alert("Signup Failed");
    }
  };
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input
        type="name"
        placeholder="Enter your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
