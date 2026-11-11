import { createTask } from '../services/taskService';
import './TaskAdd.css';

 function TaskAdd({ newTask, setNewTask, setTasks }) {

  const handleAddTask = async () => {
        const createdTask = await createTask(newTask);
        setTasks((prevTasks) => [...prevTasks, createdTask.data]);
        setNewTask('');
      }

  return (
    <div className="task-add">
      <input
        className="task-input"
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
      className="add-button"
      onClick={
        handleAddTask
      }
      >
        Add Task
      </button>
      <button
        className="clear-button"
        onClick={() => {
          setNewTask('');
        }}
      >
        X
      </button>
    </div>
  );
}
export default TaskAdd;
