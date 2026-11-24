
import "./Login.css";
import { useState } from "react";
import {useAuthService} from "../../../services/authService.js";
import { useNavigate } from "react-router";


function Login() {

  const { Login } = useAuthService();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="login-container">
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
        <button onClick={() => Login(email, password)}>Login</button>
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </p>
      </>
    </div>
  );
}

export default Login;
