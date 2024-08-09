import { Link } from "react-router-dom";
import styles from "./Task.module.css";

export default function Task({ task }) {
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
      <div className={styles.editContainer}>
        <Link to={`./editTask/${id}`}>Edit Ticket</Link>
      </div>
    </li>
  );
}
