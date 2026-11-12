const router = require('express').Router()
const authMiddleware = require('../models/middleware/authMiddleware')

const {
    getTasks,
    createTask,
    deleteTask,
    updateTask,
} = require('../controllers/taskController')

router.get('/', authMiddleware, getTasks)
router.post('/', createTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

module.exports = router;