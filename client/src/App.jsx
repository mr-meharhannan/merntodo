import {auth} from "./context/context";

import Todo from "./component/Todo";
import Login from "./component/Login";
import Signup from "./component/signup";
import Logout from "./component/Logout";

import { useState } from "react";

import {
  Routes,
  Route,
} from "react-router";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      <auth.Provider value={{token, setToken}}>
      <Routes>
        <Route path="/" element={token ? <Todo /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </auth.Provider>
    </>
  );
}

export default App;
