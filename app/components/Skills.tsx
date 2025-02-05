"use client"
import { useEffect, useRef } from "react"
import styles from "./Skills.module.css"

const skills = [
  { name: "HTML", level: 90, color: "#E34F26" },
  { name: "CSS", level: 85, color: "#1572B6" },
  { name: "JavaScript", level: 80, color: "#F7DF1E" },
  { name: "React", level: 75, color: "#61DAFB" },
  { name: "Next.js", level: 70, color: "#51D001" },
  { name: "Three.js", level: 60, color: "#E24F26" },
  { name: "Python", level: 60, color: "#000000"},
  { name: "Typescript", level: 60, color: "#1572B6" },
]

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (skillsRef.current) {
      const skillBoxes = skillsRef.current.querySelectorAll(`.${styles.skillBox}`)
      skillBoxes.forEach((box) => observer.observe(box))
    }

    return () => {
      if (skillsRef.current) {
        const skillBoxes = skillsRef.current.querySelectorAll(`.${styles.skillBox}`)
        skillBoxes.forEach((box) => observer.unobserve(box))
      }
    }
  }, [])

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.skillsContainer} ref={skillsRef}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillBox} style={{ backgroundColor: skill.color }}>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <div className={styles.skillLevel}>
              <div className={styles.skillBar} style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className={styles.skillPercentage}>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}

