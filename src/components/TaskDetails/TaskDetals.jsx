import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./TaskDetails.module.css";

export default function TaskDetails({ tasks, deleteTask }) {
  const params = useParams();

  const navigate = useNavigate();

  const paramsId = params.id;

  const [task] = tasks.filter((task) => task.id === paramsId);

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

  function deleteAndRedirect(id) {
    navigate("/");
    deleteTask(id);
  }

  return (
    <div className={styles.main}>
      <Link className={styles.toBoardBtn} to="/">
        Go To Your Board
      </Link>
      <div className={styles.task}>
        <button className={styles.btn} onClick={() => deleteAndRedirect(id)}>
          X
        </button>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.assignee}>Assignee: {assignee}</p>
        <p className={styles.assignee}>Status: {status}</p>
        <p className={styles.assignee}>Priority: {priority}</p>
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
        </div>
      </div>
    </div>
  );
}
