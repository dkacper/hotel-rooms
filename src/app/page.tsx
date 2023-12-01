import { Title } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title order={1}>Hotel Rooms</Title>
    </main>
  );
}
