import { useState } from "react";
import { addTask } from "../../services/api";

const TaskForm = ({ onTaskAdded }: { onTaskAdded: () => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newTask = {
      title,
      description,
      status: "pending",
      due_date: dueDate,
    };

    const addedTask = await addTask(newTask);
    if (addedTask) {
      setTitle("");
      setDescription("");
      setDueDate("");
      onTaskAdded(); // Refresh the task list
    }

    setLoading(false);
  };

  return (
    <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        className="w-full border p-2 mb-2 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        className="w-full border p-2 mb-4 rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
