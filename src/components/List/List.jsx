import Task from "../Task/Task";
import styles from "./List.module.css";

export default function List({ toDos, heading, deleteTask }) {
  if (toDos.length === 0) return;

  return (
    <div className={styles.list}>
      <h1>{heading}</h1>
      <div>
        <ul>
          {toDos.map((task) => (
            <Task key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </ul>
      </div>
    </div>
  );
}
