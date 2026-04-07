import Button from "./Button";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsBox = {
  title: string;
  tasks: TaskType[];
};

function Box(props: PropsBox) {
  const { tasks: tasks, title: title } = props;

  const listItem = tasks.map((task: TaskType) => (
    <li key={task.id}>
      <input type="checkbox" checked={task.isDone} />
      <span>{task.title}</span>
    </li>
  ));

  const tasksList = tasks.length === 0 ? <span>its empty</span> : { listItem };

  return (
    <div>
      <h3>{title}</h3>
      <h4>Tasks</h4>
      <ul>{listItem}</ul>
      <Button title="+" />
      <div>
        <Button title="All" />
        <Button title="Active" />
        <Button title="Complited" />
      </div>
    </div>
  );
}

export default Box;
