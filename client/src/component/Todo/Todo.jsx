import { useEffect, useState } from "react";
import {useNavigate} from "react-router"; 
import { useContext } from "react";
import {auth} from "./context/context";

import Header from "./Header/Header.jsx";
import TaskAdd from "./TaskAdd/TaskAdd.jsx";
import TaskList from "./TaskList/TaskList.jsx";
import Logout from "./Authentication/Logout/Logout.jsx";

import useTasks from "../hooks/useTasks";

import "./Todo.css";

function Todo() {
  const {token} = useContext(auth);

  const [newTask, setNewTask] = useState("");
  const { tasks, setTasks, loading, error } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  

  return (
    <div className="background">
      <Header title="Welcome to the Task Manager" className="header"></Header>
      <TaskAdd newTask={newTask} setNewTask={setNewTask} setTasks={setTasks} />
      {loading && <p>Loading tasks...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && <TaskList tasks={tasks} setTasks={setTasks} />}

      <Logout />
    </div>
  );
}
export default Todo;
