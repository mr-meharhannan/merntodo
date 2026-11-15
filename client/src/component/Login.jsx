import axios from "axios";
import "./Login.css";
import Signup from "./signup";

function Login({
  email,
  setEmail,
  password,
  setPassword,
  setIsLoggedIn,
  haveanccount,
  setHaveanccount,
}) {
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
      alert("Login Successful");
      setHaveanccount(true);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
      alert("Login Failed");
    }
  };
  const handleSignup = () => {
    setHaveanccount(false);
  };

  return (
    <div className="login-container">
      {!haveanccount ? (
        <Signup
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setHaveanccount={setHaveanccount}
          setIsLoggedIn={setIsLoggedIn}
        />
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
