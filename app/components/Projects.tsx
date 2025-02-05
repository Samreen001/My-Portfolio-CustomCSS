import styles from "./Projects.module.css"
import AnimatedBackground from "./AnimatedBackground"

const projects = [
  {
    title: "Q-commerce Website",
    description: "A fully responsive Q-commerce platform on Foodtuck built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API"],
    image: "/website-figma.png",
    link: "#",
  },
  {
    title: "E-Commerce website on ChillAndBake",
    description: "A sleek and modern portfolio website showcasing my web development skills.",
    technologies: ["React", "CSS Modules", "Framer Motion"],
    image: "/cakeweb.JPEG",
    link: "#",
  },
  {
    title: "Blog website on Burger",
    description: "A high-converting landing page for a local business with smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: "/project2.PNG",
    link: "#",
  },
  {
    title: "Web Calculator",
    description: "A feature-rich calculator app with advanced mathematical functions.",
    technologies: ["JavaScript", "CSS Grid", "Math.js"],
    image: "/maxresdefault.webp",
    link: "#",
  },
  {
    title: "Interactive Web Presentation",
    description: "A PowerPoint-style presentation built entirely with web technologies.",
    technologies: ["React", "Reveal.js", "CSS Animations"],
    image: "/Presentation NExt.js-on-power Point.png",
    link: "#",
  },
  {
    title: " Hospital data on HTML Table ",
    description: "A comprehensive admin panel for managing users, content, and analytics.",
    technologies: ["Vue.js", "Vuex", "Chart.js"],
    image: "/html-work-hospital-data.png",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <AnimatedBackground />
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <img src={project.image || "/placeholder.svg"} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link} className={styles.viewProject}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

