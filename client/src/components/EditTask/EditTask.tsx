import { useState } from "react";
import { updateTask } from "../../services/api";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

const EditTask = ({ task, onCancel, onUpdate }: { task: Task; onCancel: () => void; onUpdate: () => void }) => {
  const [updatedTask, setUpdatedTask] = useState<Task>(task);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    await updateTask(updatedTask.id, updatedTask);
    setLoading(false);
    onUpdate();
    onCancel();
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Edit Task</h2>
      <div className="space-y-3">
        <input
          type="text"
          name="title"
          value={updatedTask.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={updatedTask.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <select name="status" value={updatedTask.status} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input type="date" name="due_date" value={updatedTask.due_date} onChange={handleChange} className="w-full border p-2 rounded" />
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-400 text-white rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;