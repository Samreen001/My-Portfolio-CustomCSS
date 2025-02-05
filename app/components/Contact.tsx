import styles from "./contact.module.css"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Contact Me</h1>
          <div className={styles.contactInfo}>
            <p>
              <strong>Email:</strong> <a href="mailto:samreen@example.com">samreen_hamid@example.com</a>
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Location:</strong> New York, NY
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/contact-us-blog.jpg" alt="Contact" width={400} height={600} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

