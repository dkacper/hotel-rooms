"use client";
import { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@/app/theme";

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </QueryClientProvider>
  );
}
