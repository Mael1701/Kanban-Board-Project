import { Link } from "react-router-dom";
import List from "../List/List";
import styles from "./KanbanBoard.module.css";
import { useState } from "react";

export default function KanbanBoard({ tasks, deleteTask }) {
  const [showsLowPriority, setShowLowPriority] = useState(false);
  const [showsMediumPriority, setShowMediumPriority] = useState(false);
  const [showsHighPriority, setShowHighPriority] = useState(false);

  let filteredTasks = [...tasks];

  if (showsLowPriority || showsMediumPriority || showsHighPriority) {
    console.log(123);
    if (!showsLowPriority) {
      filteredTasks = filteredTasks.filter((task) => task.priority !== "Low");
    }
    if (!showsMediumPriority) {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority !== "Medium"
      );
    }
    if (!showsHighPriority) {
      filteredTasks = filteredTasks.filter((task) => task.priority !== "High");
    }
  }

  const toDoList = filteredTasks.filter((task) => task.status === "To Do");
  const inProgressList = filteredTasks.filter(
    (task) => task.status === "In Progress"
  );
  const doneList = filteredTasks.filter((task) => task.status === "Done");

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <Link className={styles.btn} to="/addTask">
          Add New Task
        </Link>
        <h1>Kanban Board</h1>
        <div className={styles.priority}>
          <p>Filter by priority: </p>
          <button
            className={`${styles.low} ${showsLowPriority ? styles.active : ""}`}
            onClick={() => setShowLowPriority((lp) => !lp)}
          >
            Low
          </button>
          <button
            className={`${styles.medium} ${
              showsMediumPriority ? styles.active : ""
            }`}
            onClick={() => setShowMediumPriority((mp) => !mp)}
          >
            Medium
          </button>
          <button
            className={`${styles.high} ${
              showsHighPriority ? styles.active : ""
            }`}
            onClick={() => setShowHighPriority((hp) => !hp)}
          >
            High
          </button>
        </div>
      </div>
      <div className={styles.list}>
        <List toDos={toDoList} heading="To Do" deleteTask={deleteTask} />
        <List
          toDos={inProgressList}
          heading="In Progress"
          deleteTask={deleteTask}
        />
        <List toDos={doneList} heading="Done" deleteTask={deleteTask} />
      </div>
    </div>
  );
}
