import { useState, useEffect, useCallback } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(text => {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
  }, []);

  const toggleTask = useCallback(id => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  return { tasks, addTask, toggleTask };
}