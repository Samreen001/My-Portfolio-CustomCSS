"use client"
import { useEffect, useRef } from "react"
import styles from "./Hero.module.css"

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const texts = ["Web Developer", "Designer", "Creator"]
    let index = 0
    let charIndex = 0
    let isDeleting = false

    const type = () => {
      const current = texts[index]
      if (isDeleting) {
        textRef.current!.textContent = current.substring(0, charIndex - 1)
        charIndex--
      } else {
        textRef.current!.textContent = current.substring(0, charIndex + 1)
        charIndex++
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true
        setTimeout(type, 1500)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        index = (index + 1) % texts.length
        setTimeout(type, 500)
      } else {
        setTimeout(type, isDeleting ? 50 : 100)
      }
    }

    type()
  }, [])

  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1>Hello, I'm Samreen</h1>
        <p>
          I'm a <span ref={textRef}></span>
        </p>
        <a href="#contact" className={styles.cta}>
          Get in Touch
        </a>
      </div>
    </section>
  )
}
