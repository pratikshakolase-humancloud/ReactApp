import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import ApiTasks from "../pages/ApiTasks";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/api" element={<ApiTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;