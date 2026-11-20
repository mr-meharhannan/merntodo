import Login from "./component/Login";
import Todo from "./component/Todo";
import { useState } from "react";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="App">
      {token ? <Todo /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;
