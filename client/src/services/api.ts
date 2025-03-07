const API_URL = "http://localhost:5000/api/tasks"; // Update if needed

export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

export const addTask = async (task: { title: string; description: string; status: string; due_date: string }) => {
    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        });

        if(!response.ok) throw new Error('Failed to Add Task');

        return response.json();

    }catch(error){
        console.error("Error adding task:", error);
        return null;
    }
};

// Update a task
export const updateTask = async (id: number, updatedData: { title?: string; description?: string; status?: string; due_date?: string }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) throw new Error("Failed to update task");
  
      return response.json();
    } catch (error) {
      console.error("Error updating task:", error);
      return null;
    }
  };
  
  // Delete a task
    export const deleteTask = async (id: number) => {
        try {
        const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    
        if (!response.ok) throw new Error("Failed to delete task");
    
        return true;
        } catch (error) {
        console.error("Error deleting task:", error);
        return false;
        }
    };  