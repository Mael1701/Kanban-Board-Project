import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
