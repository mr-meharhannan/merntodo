const Task = require('../models/Task')

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createTask = async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title
        })
        const savedTask = await task.save()
        res.status(201).json(savedTask)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json({ message: 'Task deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true })
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.json(task)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
}