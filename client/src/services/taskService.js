import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

const getTasks = async () => await axios.get(API_URL);

const createTask = async (title) => await axios.post(API_URL, { title });

const deleteTask = async (id) => await axios.delete(`${API_URL}/${id}`);

const updateTask = async (id, title) => await axios.put(`${API_URL}/${id}`, { title: title });

export {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
};