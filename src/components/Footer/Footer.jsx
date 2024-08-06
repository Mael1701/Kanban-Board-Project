import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/Mael1701/Kanban-Board-Project" target='_blank'>
      <i className="fa-brands fa-github"></i><span>GitHub Repo</span></a>
    </footer>
  )
}
