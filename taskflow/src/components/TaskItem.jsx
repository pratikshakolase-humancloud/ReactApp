import React from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { toggleTask } = useTaskContext();

  console.log("rendered", task.id);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
    </li>
  );
}

export default React.memo(TaskItem);