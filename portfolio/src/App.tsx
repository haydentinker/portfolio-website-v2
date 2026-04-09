import { AppShell, Divider } from "@mantine/core";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimatedSection } from "./components/AnimatedSection";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Terminal } from "./components/Terminal";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  return (
    <AppShell
      withBorder={true}
      footer={{ height: 60 }}
      styles={{ main: { minHeight: "100vh" } }}
    >
      <Analytics />
      <ScrollProgressBar />
      <Terminal />
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <div id="hero">
          <HeroSection />
        </div>
        <Divider my="md" />
        <div id="about">
          <AnimatedSection>
            <AboutSection />
          </AnimatedSection>
        </div>
        <Divider my="md" />
        <div id="timeline">
          <AnimatedSection>
            <TimelineSection />
          </AnimatedSection>
        </div>
        <Divider my="md" />
        <div id="projects">
          <AnimatedSection delay={100}>
            <ProjectsSection />
          </AnimatedSection>
        </div>
        <Divider my="md" />
        <div id="contact">
          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </div>
      </AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
