import styles from "./styles/Home.module.css";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("../components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className={styles.main}>
        <div>
          <h1>Hallo wereld</h1>
        </div>
      </main>
    </>
  );
}