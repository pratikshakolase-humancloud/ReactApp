import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ApiTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => setTasks(res.data))
      .catch(() => setError("Failed to fetch tasks"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>API Tasks</h1>
      <Link to="/">Back</Link>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiTasks;