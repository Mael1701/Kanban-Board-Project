import { Link } from "react-router-dom";
import List from "../List/List";
import styles from "./KanbanBoard.module.css";

export default function KanbanBoard({ tasks }) {
  const toDoList = tasks.filter((task) => task.status === "To Do");
  const inProgressList = tasks.filter((task) => task.status === "In Progress");
  const doneList = tasks.filter((task) => task.status === "Done");

  return (
    <div className={styles.board}>
      <div>
        <Link className={styles.btn} to="/addTask">
          Add New Task
        </Link>
        <h1>Kanban Board</h1>
      </div>
      <div className={styles.list}>
        <List toDos={toDoList} heading="To Do" />
        <List toDos={inProgressList} heading="In Progress" />
        <List toDos={doneList} heading="Done" />
      </div>
    </div>
  );
}
