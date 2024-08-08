import { Link } from "react-router-dom"
import styles from "./Error.module.css"

export default function Error() {

    return (
      <div className={styles.error}>
        <h2> This page doesn&apos;t exist. Go back to the <Link to="/">homepage</Link>.</h2>
      </div>
    )
}
