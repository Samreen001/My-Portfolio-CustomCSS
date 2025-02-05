import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Link from "next/link"
import Footer from "./components/Footer"
import ThreeJSBackground from "./components/ThreeJSBackground"
import styles from "./page.module.css"


export default function Home() {
  return (
    <main>
      <ThreeJSBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
       <Skills />
      <section className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <p>Want to work together or have any questions?</p>
        <Link href="/contact" className={styles.contactButton}>
        Contact Me
      </Link>
      </section>
      <Footer />
    </main>
  )
}
