import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <h1 className={styles.heading}>Välkommen till köket.se</h1>
        <Link href="/recept">Se våra recept</Link>
      </main>
    </>
  );
}
