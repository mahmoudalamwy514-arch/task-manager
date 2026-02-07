// src/components/TaskItem.js
import React from "react";

const TaskItem = ({ task }) => {
  return (
    <li>
      {task.title} - {task.completed ? "Done" : "Pending"}
    </li>
  );
};

export default TaskItem;
