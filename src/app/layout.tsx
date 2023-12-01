import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Hotel Rooms App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
