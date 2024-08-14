import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import styles from "./Main.module.css";

export default function Main({ tasks, deleteTask, moovingTask }) {
  return (
    <div className={styles.main}>
      <KanbanBoard tasks={tasks} deleteTask={deleteTask} moovingTask={moovingTask}/>
    </div>
  );
}
