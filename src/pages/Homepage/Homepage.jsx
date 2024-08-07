import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Slidebar/Sidebar";
import styles from "./Homepage.module.css"


export default function Homepage() {
  return (
    <div className={styles.mainPage}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
