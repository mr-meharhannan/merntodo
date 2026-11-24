
import { useState } from "react";
import { useAuthService } from "../../../services/authService.js";
import "./Signup.css";

function Signup() {
  const { Signup } = useAuthService();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
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
      <button onClick={() => Signup(username, email, password)}>Signup</button>
    </div>
  );
}

export default Signup;
