import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";

const TaskDashboard = () => {
  const [taskAdded, setTaskAdded] = useState(false);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Task Dashboard</h1>
      <TaskForm onTaskAdded={() => setTaskAdded(!taskAdded)} />
      <TaskList key={taskAdded.toString()} />
    </div>
  );
};

export default TaskDashboard;
