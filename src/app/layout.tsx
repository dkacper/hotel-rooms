import "@mantine/core/styles.css";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { AppShell, ColorSchemeScript, Container, rem } from "@mantine/core";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Hotel Rooms App",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <AppShell header={{ height: rem(56) }} padding="md">
            <Header />
            <Container>{children}</Container>
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
