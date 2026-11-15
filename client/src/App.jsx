import Login from "./component/Login";
import Todo from "./component/Todo";
import { useState, useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [haveanccount, setHaveanccount] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {}, [isLoggedIn, haveanccount]);

  return (
    <div className="App">
      {token ? (
        <Todo setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
          haveanccount={haveanccount}
          setHaveanccount={setHaveanccount}
        />
      )}
    </div>
  );
}

export default App;
