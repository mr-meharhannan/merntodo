import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

const getAuthHeader = () => {
  return {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
};

const getTasks = async () => await axios.get(API_URL, getAuthHeader());

const createTask = async (title) => await axios.post(API_URL, { title }, getAuthHeader());

const deleteTask = async (id) => await axios.delete(`${API_URL}/${id}`, getAuthHeader());

const updateTask = async (id, title) =>
  await axios.put(`${API_URL}/${id}`, { title: title }, getAuthHeader());

<<<<<<< HEAD
export { getTasks, createTask, deleteTask, updateTask };
=======
export { getTasks, createTask, deleteTask, updateTask };
>>>>>>> 5994042c614712c033407dce8b2ffad333962d5e
