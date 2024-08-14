import { Link } from "react-router-dom";
import styles from "./Task.module.css";

export default function Task({ task, deleteTask, moovingTask }) {
  const {
    id,
    title,
    description,
    assignee,
    status,
    priority,
    createdDate,
    dueDate,
  } = task;
  let priorityColor = priority.toLowerCase();


  return (
    <li className={`${styles.task} ${styles[priorityColor]}`}>
      <div className={styles.divButton}>
        <select value={status} onChange={(e) => {moovingTask(id, e.target.value)}}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        </select>
        <button className={styles.btn} onClick={() => deleteTask(id)}>
          x
        </button>
      </div>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.assignee}>Assignee: {assignee}</p>
      <div className={styles.date}>
        <div>
          <p>Created on:</p>
          <p>{createdDate}</p>
        </div>
        <div>
          <p>Finish until:</p>
          <p>{dueDate}</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.editContainer}>
          <Link to={`/editTask/${id}`}>Edit Ticket</Link>
        </div>
        <div className={styles.editContainer}>
          <Link to={`/taskDetails/${id}`}>Details</Link>
        </div>
      </div>
    </li>
  );
}
