function TaskItem({ task, setTasks }) {
  const toggleTask = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      {task.text}
    </li>
  );
}

export default TaskItem;
