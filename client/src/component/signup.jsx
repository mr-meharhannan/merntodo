import axios from "axios";
import "./Signup.css";

function Signup({
  email,
  setEmail,
  password,
  setPassword,
  setIsLoggedIn,
  haveanccount,
  setHaveanccount,
}) {
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        email,
        password,
      });
      alert("Signup Successful");
      localStorage.setItem("token", response.data.token);
      setHaveanccount(true);
      setIsLoggedIn(true);
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
