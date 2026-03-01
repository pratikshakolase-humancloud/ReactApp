import { useTaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const { tasks, addTask, toggleTask } = useTaskContext();

  return (
    <>
      <h1>Tasks</h1>

      <TaskForm onAdd={addTask} />

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
            />
            {t.text}
          </li>
        ))}
      </ul>
    </>
  );
}