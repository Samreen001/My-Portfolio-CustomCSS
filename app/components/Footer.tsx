import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; 2023 Samreen. All rights reserved.</p>
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
      </div>
    </footer>
  )
}

