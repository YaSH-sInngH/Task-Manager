import { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "../../services/api";
import TaskDetails from "../TaskDetails/TaskDetails";
import EditTask from "../EditTask/EditTask";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this task?")) {
      await deleteTask(id);
      loadTasks();
      setSelectedTask(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Task Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Task List */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">Tasks</h3>
          {loading ? (
            <p className="text-center text-gray-500">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="text-center text-gray-500">No tasks available.</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="border-b last:border-none p-4 cursor-pointer hover:bg-gray-100 transition rounded-lg flex justify-between items-center"
                  onClick={() => {
                    setSelectedTask(task);
                    setEditing(false);
                  }}
                >
                  <div>
                    <h4 className="text-md font-semibold">{task.title}</h4>
                    <p className="text-xs text-gray-500">{task.due_date}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(task.id);
                    }}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Task Details & Edit Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          {selectedTask && !editing && <TaskDetails task={selectedTask} onEdit={() => setEditing(true)} />}
          {selectedTask && editing && <EditTask task={selectedTask} onCancel={() => setEditing(false)} onUpdate={loadTasks} />}
          {!selectedTask && <p className="text-gray-500 text-center">Select a task to view details.</p>}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
