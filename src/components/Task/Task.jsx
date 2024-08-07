import styles from './Task.module.css'

export default function Task({task}) {

   const {id, title, description, assignee, status, priority, createdDate, dueDate} = task;
   let priorityColor = priority.toLowerCase()


  return (

       <li  className={`${styles.task} ${styles[priorityColor]}`}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.assignee}>Assignee: {assignee}</p>
            <div className={styles.date}>
              <p>Created on: {createdDate}</p>
              <p>Finish until: {dueDate}</p>
            </div>
      </li>

  )

}
