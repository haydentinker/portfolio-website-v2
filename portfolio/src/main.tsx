import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import { Analytics } from "@vercel/analytics/next";
import { MantineProvider } from "@mantine/core";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
);
