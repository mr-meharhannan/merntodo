import { deleteTask, updateTask } from "../../../services/taskService";
import './TaskList.css';

function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          {task.title}
          <div>
          <button
            onClick={async () => {
              await deleteTask(task._id);
              setTasks((prevTasks) =>
                prevTasks.filter((t) => t._id !== task._id),
              );
            }}
          >
            Delete
          </button>
          <button
            onClick={async () => {
              const newTitle = prompt("Enter new title:", task.title);
              if (!newTitle || newTitle.trim() === "") {
                return;
              }
              const updatedTask = await updateTask(task._id, newTitle);
              setTasks((prevTasks) =>
                prevTasks.map((t) =>
                  t._id === task._id ? updatedTask.data : t,
                ),
              );
            }}
          >
            Update
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default TaskList;
