import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import styles from "./Main.module.css";

export default function Main({ tasks, deleteTask }) {
  return (
    <div className={styles.main}>
      <KanbanBoard tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
