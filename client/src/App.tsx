import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/Home/HomePage";
import TaskDashboard from "../src/components/Dashboard/TaskDashboard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;