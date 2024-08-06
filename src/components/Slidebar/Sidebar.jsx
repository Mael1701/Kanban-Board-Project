import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="#"><i className="fa-solid fa-house"></i> Home</a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-circle-info"></i> About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
