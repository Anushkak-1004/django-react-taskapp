import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch tasks
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/tasks/")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add new task
  const addTask = () => {
    if (!title) return;
    axios.post("http://127.0.0.1:8000/tasks/", { title })
      .then(res => setTasks([...tasks, res.data]));
    setTitle("");
  };

  // Toggle task
  const toggleTask = (id) => {
    axios.patch(`http://127.0.0.1:8000/tasks/${id}/`)
      .then(res => {
        setTasks(tasks.map(task => task.id === id ? res.data : task));
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Task Manager</h2>
      
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.is_done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
