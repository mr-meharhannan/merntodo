import { useAuthService } from "../../../services/authService.js";

function Logout() {
  const { Logout } = useAuthService();
  return (
    <div>
      <button onClick={() => Logout()}>Logout</button>
    </div>
  );
}

export default Logout;
