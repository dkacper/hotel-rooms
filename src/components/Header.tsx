import { Anchor, Container, Group, Title } from "@mantine/core";
import classes from "./Header.module.css";
import Link from "next/link";

const links = [{ link: "/rooms", label: "Rooms" }];

export function Header() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Anchor component={Link} href="/" underline="never">
          <Title c="blue">Hotel Rooms</Title>
        </Anchor>
        <Group gap={5} visibleFrom="xs">
          {links.map((link) => (
            <a key={link.label} href={link.link} className={classes.link}>
              {link.label}
            </a>
          ))}
        </Group>
      </Container>
    </header>
  );
}
