interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

const TaskDetails = ({ task, onEdit }: { task: Task; onEdit: () => void }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <p className="text-sm text-gray-500"><strong>Status:</strong> {task.status}</p>
      <p className="text-sm text-gray-500"><strong>Due Date:</strong> {task.due_date}</p>
      <button
        onClick={onEdit}
        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
      >
        Edit Task
      </button>
    </div>
  );
};

export default TaskDetails;
