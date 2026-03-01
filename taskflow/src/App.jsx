import AppRouter from "./router/AppRouter";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <AppRouter />
    </TaskProvider>
  );
}