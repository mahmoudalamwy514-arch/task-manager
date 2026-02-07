// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { getTasks, addTask } from "../api";
import TaskItem from "../components/TaskItem";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    if (!token) return;
    const data = await getTasks(token);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTask) return;
    await addTask(newTask, token);
    setNewTask("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
