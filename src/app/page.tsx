import { Anchor } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Anchor component={Link} href="/rooms">
        See hotel rooms
      </Anchor>
    </main>
  );
}
