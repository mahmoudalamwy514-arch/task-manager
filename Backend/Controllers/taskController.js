const Task = require('../Models/Task');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

// Middleware للتحقق من التوكن
const auth = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'No token' });
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Add Task
exports.addTask = [auth, async (req, res) => {
  const { title } = req.body;
  try {
    const task = await Task.create({ user: req.user, title });
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}];

// Get Tasks
exports.getTasks = [auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}];
