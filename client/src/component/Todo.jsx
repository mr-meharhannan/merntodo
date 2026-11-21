import { useEffect, useState } from "react";
import {useNavigate} from "react-router"; 
import { useContext } from "react";
import {auth} from "../context/context";

import Header from "./Header";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";
import Logout from "./Logout";

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
