import { AppShell, Divider } from "@mantine/core";
import { HeroSection } from "./components/HeroSection";

import { TimelineSection } from "./components/TimelineSection";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/next";
function App() {
  return (
    <AppShell
      withBorder={true}
      footer={{ height: 60 }}
      styles={{ main: { minHeight: "100vh" } }}
    >
      <Analytics />
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <HeroSection />
        <Divider my="md" />
        <TimelineSection />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
