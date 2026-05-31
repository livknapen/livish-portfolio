import styles from "./styles/Home.module.css";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const CustomCursor = dynamic(() => import("../components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <Projects />
      </main>
    </>
  );
}