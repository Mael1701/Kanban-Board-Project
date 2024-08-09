import { useState } from "react";
import styles from "./AddTask.module.css";
import { Link } from "react-router-dom";

function AddTask({ addTask, nextId }) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");

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
      id: nextId.toString(),
      title,
      description,
      assignee,
      status: "To Do",
      priority,
      createdDate,
      dueDate,
    };

    addTask(newTicket);
    setTitle("");
    setAssignee("");
    setDescription("");
    setPriority("");
    setDueDate("");
    alert("Your Ticket was successfuly created!");
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
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button>Create Ticket</button>
      </form>
    </div>
  );
}

export default AddTask;
