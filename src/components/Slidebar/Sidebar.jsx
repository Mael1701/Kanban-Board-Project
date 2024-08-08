import styles from "./Sidebar.module.css"
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink  style={({ isActive}) => {
              return {
                color: isActive ? "#60a5fa" : "",
              };
            }} className={styles.active} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive}) => {
              return {
                color: isActive ? "#60a5fa" : "",
              };
            }} to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
