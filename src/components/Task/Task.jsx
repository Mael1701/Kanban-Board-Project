export default function Task({task}) {

   const {id, title, description, assignee, status, priority, createdDate, dueDate} = task
  return (

       <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Assignee:</strong> {assignee}</p>
            <p><strong>Status:</strong> {status}</p>
      </li>

  )

}
