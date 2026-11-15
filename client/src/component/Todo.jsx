import { useState } from 'react';

import Header from './Header';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

import useTasks from '../hooks/useTasks';

import './Todo.css';


function Todo() {
  
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
export default Todo;