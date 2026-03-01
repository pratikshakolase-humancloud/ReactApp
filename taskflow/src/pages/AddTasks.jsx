import TaskInput from "../components/TaskInput";
import useTasks from "../hooks/useTasks";
import { Link } from "react-router-dom";

function AddTasks() {
  const { setTasks } = useTasks();

  return (
    <div>
      <h1>Add Task</h1>
      <TaskInput setTasks={setTasks} />
      <br />
      <Link to="/">Back</Link>
    </div>
  );
}

export default AddTask;