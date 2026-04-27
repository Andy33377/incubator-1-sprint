import { useState, type ChangeEvent } from "react";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

type Filter = "all" | "active" | "completed";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  let [error, setError] = useState<string | null>(null);

  const addTask = () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      isDone: false,
    };

    setTasks((prev) => [newTask, ...prev]);
    setTitle("");
    setError("");
  };
  const removeTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeStatus = (taskId: number, isDone: boolean) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, isDone } : t)),
    );
  };

  const getFilteredTasks = () => {
    if (filter === "active") return tasks.filter((t) => !t.isDone);
    if (filter === "completed") return tasks.filter((t) => t.isDone);
    return tasks;
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>What to learn</h2>

      <div>
        <input
          value={title}
          onChange={handleInput}
          className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>

      <ul>
        {getFilteredTasks().map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={(e) => changeStatus(task.id, e.target.checked)}
              checked={task.isDone}
            />
            <span
              style={{
                textDecoration: task.isDone ? "line-through" : "none",
                margin: "0 10px",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => removeTask(task.id)}>x</button>
          </li>
        ))}
      </ul>

      <div>
        <button
          className={filter === "all" ? "active-filter" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active-filter" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active-filter" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}
