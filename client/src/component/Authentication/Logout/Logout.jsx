import {useContext} from "react";
import {auth} from "../context/context";
import { useNavigate } from "react-router";

function Logout() {
  const { setToken } = useContext(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
