import { useState, useEffect } from 'react';
import { getTasks } from '../services/taskService'; 
export default function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            try {
                const response = await getTasks();
                setTasks(response.data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching tasks:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTasks();
    }, []);

    return { tasks, setTasks, loading, error };
}
