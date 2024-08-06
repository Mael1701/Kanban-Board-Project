import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div>
      <nav className={styles.mainNav}>
        <h1>Kanban Board</h1>
        <img className={styles.logo} src="nav.png" alt="logo" />
      </nav>

    </div>
  )
}
