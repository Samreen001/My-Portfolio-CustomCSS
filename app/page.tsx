import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ThreeJSBackground from "./components/ThreeJSBackground";
import styles from "./page.module.css";

const components = [
  ThreeJSBackground,
  Header,
  Hero,
  About,
  Projects,
  Skills,
  Footer,
];

export default function Home() {
  return (
    <main>
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </main>
  );
}