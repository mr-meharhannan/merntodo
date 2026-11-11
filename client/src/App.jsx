import { useState } from 'react';

import Header from './component/Header';
import TaskAdd from './component/TaskAdd';
import TaskList from './component/TaskList';

import useTasks from './hooks/useTasks';

import './App.css';


function App() {
  
  const [newTask, setNewTask] = useState('');
  const { tasks, setTasks, loading, error } = useTasks();
  
  return(
    <div className="background">
      <Header title="Welcome to the Task Manager" className="header"></Header>
      <TaskAdd newTask={newTask} setNewTask={setNewTask} setTasks={setTasks} />
      {loading && <p>Loading tasks...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && <TaskList tasks={tasks} setTasks={setTasks} />}
      
      
    </div>
  )
}
export default App;