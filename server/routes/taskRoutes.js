const router = require('express').Router()
const authMiddleware = require('../models/middleware/authMiddleware')

const {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
} = require('../controllers/taskController')

router.get('/', authMiddleware, getTasks)
router.post('/', authMiddleware, createTask)
router.delete('/:id', authMiddleware, deleteTask)
router.put('/:id', authMiddleware, updateTask)

module.exports = router;