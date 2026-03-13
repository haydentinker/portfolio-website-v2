import { AppShell, Divider } from "@mantine/core";
import { HeroSection } from "./components/HeroSection";

import { TimelineSection } from "./components/TimelineSection";
import { Footer } from "./components/Header";

function App() {
  return (
    <AppShell
      withBorder={true}
      footer={{ height: 60 }}
      styles={{ main: { minHeight: "100vh" } }}
    >
      <AppShell.Header>
        <Footer />
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
