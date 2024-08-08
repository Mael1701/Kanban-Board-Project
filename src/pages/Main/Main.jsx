import KanbanBoard from "../../components/KanbanBoard/KanbanBoard"
import styles from "./Main.module.css"

export default function Main() {


  return (
    <div className={styles.main}>
      <KanbanBoard />
    </div>
  )
}
