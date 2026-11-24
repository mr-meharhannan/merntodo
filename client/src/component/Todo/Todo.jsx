import {  useState } from "react";


import Header from "../Header/Header.jsx";
import TaskAdd from "../Task/TaskAdd/TaskAdd.jsx";
import TaskList from "../Task/TaskList/TaskList.jsx";
import Logout from "../Authentication/Logout/Logout.jsx";

import useTasks from "../../hooks/useTasks";

import "./Todo.css";

function Todo() {
  

  const [newTask, setNewTask] = useState("");
  const { tasks, setTasks, loading, error } = useTasks();

  

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
