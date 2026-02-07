const router = require('express').Router();
const { addTask, getTasks } = require('../Controllers/taskController');

router.post('/', addTask);
router.get('/', getTasks);

module.exports = router;
