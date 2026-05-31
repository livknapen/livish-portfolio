import styles from "./styles/Home.module.css";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

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
        <div>
          <h1></h1>
        </div>
      </main>
    </>
  );
}