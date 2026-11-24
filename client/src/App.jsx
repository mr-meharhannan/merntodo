import { auth as AuthContext } from "./context/context.jsx";

import Todo from "./component/Todo/Todo.jsx";
import Login from "./component/Authentication/Login/Login.jsx";
import Signup from "./component/Authentication/Signup/Signup.jsx";
import Logout from "./component/Authentication/Logout/Logout.jsx";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute.jsx";

import { useState } from "react";

import { Routes, Route } from "react-router";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Todo />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
