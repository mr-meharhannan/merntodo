import {useState, useEffect} from 'react';

import Header from './component/Header';
import TaskAdd from './component/TaskAdd';
import TaskList from './component/TaskList';

import { getTasks } from './services/taskService';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    getTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);
  return(
    <>
      <Header title="Welcome to the Task Manager"></Header>
      <TaskAdd newTask={newTask} setNewTask={setNewTask} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  )
}
export default App;