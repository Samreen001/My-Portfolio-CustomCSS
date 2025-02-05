"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Samreen Hamid</h1>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
    </header>
  )
}
