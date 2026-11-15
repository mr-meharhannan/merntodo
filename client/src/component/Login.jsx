import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login Successful");
    } catch (err) {
<<<<<<< HEAD
        console.log(err.response?.data)
=======
>>>>>>> 5994042c614712c033407dce8b2ffad333962d5e
      console.log(err);
      alert("Login Failed");
    }
  };

  return <>
    <h2>Login</h2>
    <input type="email"
    placeholder="Enter you Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
     />
    <input type="password"
    placeholder="Enter you Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
     />
    <button onClick={handleLogin}>Login</button>
  </>;
}

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 5994042c614712c033407dce8b2ffad333962d5e
