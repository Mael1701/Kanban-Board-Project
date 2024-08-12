import styles from "./Navbar.module.css";
import logo from "../../../public/nav.png";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.mainNav}>
        <h1>Kanban Board</h1>
        <img className={styles.logo} src={logo} alt="logo" />
      </nav>
    </div>
  );
}
