import Box, { type TaskType } from "./components/Box";

function App() {
  //data
  const title_1 = "what to learn";

  const task_1: TaskType[] = [
    { id: 1, title: "JS", isDone: false },
    { id: 2, title: "TS", isDone: false },
    { id: 3, title: "C#", isDone: false },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Box title={title_1} tasks={task_1} />
    </div>
  );
}

export default App;
