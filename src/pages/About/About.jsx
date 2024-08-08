import styles from "./About.module.css"

export default function About() {

  return (

    <section id="about" className={styles.about}>
        <h1>Welcome to KanbanMaster!</h1>
        <h2>Our Story</h2>
        <p>KanbanMaster was founded by two passionate technologists, Atanas Kisyov and Mael Micout. With a shared vision for improving workflow efficiency, we set out to create a tool that combines simplicity, flexibility, and powerful features to support individuals and teams in their project management journey.</p>
        <h2>Our Mission</h2>
        <p>Our mission is to empower users with a user-friendly and intuitive platform that enhances productivity and fosters collaboration. Whether you&apos;re managing personal tasks or leading a team project, KanbanMaster provides the tools you need to visualize your workflow, track progress, and achieve your goals.</p>
        <h2>Meet the Founders</h2>
        <h3>Atanas Kisyov</h3>
        <p>With a background in software development and a passion for creating seamless user experiences, Atanas brings a wealth of knowledge and expertise to KanbanMaster. His technical skills and innovative mindset drive the continuous improvement of our platform.</p>
        <h3>Mael Micout</h3>
        <p>Mael is an experienced project manager who understands the challenges of coordinating tasks and teams. His insights into effective workflow management shape the practical features of KanbanMaster, ensuring it meets the needs of users from various industries.</p>
    </section>
  )
}
