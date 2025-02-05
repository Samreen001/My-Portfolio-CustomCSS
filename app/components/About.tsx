import Image from "next/image"
import styles from "./About.module.css"
import AnimatedBackground from "./AnimatedBackground"

export default function About() {
  return (
    <section className={styles.about} id="about">
      <AnimatedBackground />
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src="/my-picture.webp" alt="Samreen" width={300} height={300} />
        </div>
        <div className={styles.text}>
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer with expertise in creating modern, responsive websites and applications. With
            a strong foundation in HTML, CSS, and JavaScript, I specialize in building dynamic user interfaces using
            React and Next.js. My experience includes developing e-commerce platforms, personal portfolios, and
            interactive web applications. I'm dedicated to writing clean, efficient code and staying up-to-date with the
            latest web technologies to deliver high-quality solutions for my clients.
          </p>
        </div>
      </div>
    </section>
  )
}

