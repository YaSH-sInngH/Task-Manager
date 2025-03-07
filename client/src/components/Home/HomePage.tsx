import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Task Manager</h1>
      <Link to="/tasks" className="px-6 py-2 bg-blue-500 text-white rounded-md shadow">
        Go to Tasks
      </Link>
    </div>
  );
};

export default HomePage;
