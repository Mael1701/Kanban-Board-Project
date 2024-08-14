import { useState } from "react";
import styles from "./EditTask.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditTask({ tasks, onEditTask }) {
  const currId = useParams().id;
  const task = tasks.find((task) => task.id === currId);
  const [title, setTitle] = useState(task.title);
  const [assignee, setAssignee] = useState(task.assignee);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
    const now = Date.now();
    const date = new Date(dueDate).getTime();

    if (+now > +date) {
      alert("You can't assign tasks with in the past.\nChoose a future date.");
      return;
    }

    const createdDate = new Date().toISOString().split("T")[0];

    const newTicket = {
      id: currId,
      title,
      description,
      assignee,
      status: task.status,
      priority,
      createdDate,
      dueDate,
    };
    onEditTask(newTicket);

    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.btn} to="/">
          Go To Your Board
        </Link>
        <h2>Create a new task for your Kanban board</h2>
      </div>
      <form className={styles.addTask} onSubmit={submitForm}>
        <div className={styles.inputField}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="assignee">Assignee: </label>
          <input
            type="text"
            name="assignee"
            id="assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="priority">Priority: </label>
          <select
            name="status"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">-- SELECT PRIORITY --</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className={styles.inputField}>
          <label htmlFor="dueDate">Due date: </label>
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="description">Description: </label>
          <textarea rows={8} cols={30}
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button className={styles.submit}>Edit Ticket</button>
      </form>
    </div>
  );
}

export default EditTask;
