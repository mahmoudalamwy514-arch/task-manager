// src/api.js
const BASE_URL = "http://localhost:5000/api";

// Register user
export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Login user
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Add Task
export const addTask = async (title, token) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });
  return res.json();
};

// Get Tasks
export const getTasks = async (token) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
