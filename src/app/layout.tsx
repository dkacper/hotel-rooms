import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/components/Providers";

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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
