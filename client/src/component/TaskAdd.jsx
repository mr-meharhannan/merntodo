import { createTask } from '../services/taskService';

 function TaskAdd({ newTask, setNewTask, setTasks }) {

  const handleAddTask = async () => {
        const createdTask = await createTask(newTask);
        setTasks((prevTasks) => [...prevTasks, createdTask.data]);
        setNewTask('');
      }

  return (
    <>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
      onClick={
        handleAddTask
      }
      >
        Add Task
      </button>
      <button
        onClick={() => {
          setNewTask('');
        }}
      >
        X
      </button>
    </>
  );
}
export default TaskAdd;
