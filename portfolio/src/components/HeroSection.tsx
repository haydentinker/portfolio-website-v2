import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Badge,
  ThemeIcon,
} from "@mantine/core";
import {
  BrandGithub,
  BrandLinkedin,
  ChevronDown,
  ExternalLink,
  CircleCheck,
} from "tabler-icons-react";

const ROLES = [
  "Full-Stack Software Engineer",
  "API & Backend Engineer",
  "AI Integration Engineer",
];

function useTypewriter(
  phrases: string[],
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseMs = 1800,
) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [
    charIndex,
    deleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseMs,
  ]);

  useEffect(() => {
    setDisplayed(phrases[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex, phrases]);

  return displayed;
}
const SKILLS = [
  { name: "TypeScript", from: "blue", to: "cyan" },
  { name: "React.js", from: "cyan", to: "teal" },
  { name: "Node.js", from: "green", to: "teal" },
  { name: "Next.js", from: "gray", to: "dark" },
  { name: "AWS", from: "orange", to: "yellow" },
  { name: "AWS CDK", from: "orange", to: "red" },
  { name: "Python", from: "red", to: "orange" },
  { name: "Flask", from: "yellow", to: "red" },
  { name: "LangChain", from: "pink", to: "red" },
  { name: "REST APIs", from: "violet", to: "indigo" },
  { name: "GraphQL", from: "indigo", to: "blue" },
  { name: "PostgreSQL", from: "grape", to: "violet" },
  { name: "MongoDB", from: "green", to: "blue" },
  { name: "Docker", from: "blue", to: "indigo" },
  { name: "CI/CD", from: "blue", to: "red" },
  { name: "Microservices", from: "blue", to: "red" },
  { name: "tRPC", from: "indigo", to: "blue" },
];
export function HeroSection() {
  const role = useTypewriter(ROLES);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (leftRef.current) leftRef.current.style.transform = `translateY(${y * 0.06}px)`;
      if (rightRef.current) rightRef.current.style.transform = `translateY(${y * 0.14}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container
      style={{
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        paddingTop: "clamp(1.5rem, 5vh, 3rem)",
      }}
    >
      <Grid
        style={{ width: "100%" }}
        gutter={{ base: 24, md: 48 }}
        align="center"
      >
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack ref={leftRef} mt={{ base: 10, md: 0 }} justify="center" style={{ willChange: "transform" }}>
            {import.meta.env.VITE_OPEN_TO_WORK === "true" && (
              <Group gap="xs">
                <ThemeIcon color="green" variant="light" size="sm" radius="xl">
                  <CircleCheck size={12} />
                </ThemeIcon>
                <Text size="sm" c="green" fw={500}>
                  Open to new opportunities
                </Text>
              </Group>
            )}
            <Title
              order={1}
              style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)", lineHeight: 1.1 }}
            >
              Hello, I am <br />
              <Text
                component="span"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                inherit
              >
                Hayden Tinker
              </Text>{" "}
            </Title>
            <Title
              order={2}
              c="dimmed"
              fw={400}
              size="xl"
              style={{ minHeight: "2rem" }}
            >
              {role}
              <span
                style={{
                  borderRight: "2px solid",
                  marginLeft: 2,
                  animation: "blink 1s step-end infinite",
                }}
              ></span>
            </Title>

            <Text size="lg">
              I turn complex problems into clean, scalable software.
            </Text>
            <Group gap="sm" wrap="wrap">
              <Button
                size="md"
                variant="gradient"
                gradient={{ from: "#339af0", to: "#22d3ee" }}
                leftSection={<ExternalLink size={19} />}
                onClick={() => window.open("/HaydenTinker.pdf", "_blank")}
                className="hero-cta-primary"
              >
                View Resume
              </Button>
              <Button
                size="md"
                variant="outline"
                color="blue"
                leftSection={<BrandLinkedin size={19} />}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hayden-tinker/",
                    "_blank",
                  )
                }
              >
                LinkedIn
              </Button>
              <Button
                size="md"
                variant="subtle"
                color="gray"
                leftSection={<BrandGithub size={19} />}
                onClick={() =>
                  window.open("https://github.com/haydentinker", "_blank")
                }
              >
                GitHub
              </Button>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack
            ref={rightRef}
            gap="lg"
            className="hero-animate hero-animate-2"
            pb={{ base: "xl", md: 0 }}
            style={{ willChange: "transform" }}
          >
            <Center>
              <Box
                w={150}
                h={150}
                style={{
                  borderRadius: "var(--mantine-radius-lg)",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/headshot.png"
                  alt="Hayden Tinker"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </Box>
            </Center>
            <div className="hero-stack-header">
              <Text
                size="xs"
                fw={700}
                tt="uppercase"
                c="dimmed"
                style={{ letterSpacing: "0.12em" }}
              >
                Skills
              </Text>
            </div>
            <Group gap="sm" wrap="wrap">
              {SKILLS.map((skill) => (
                <Badge
                  key={skill.name}
                  size="md"
                  variant="gradient"
                  gradient={{ from: skill.from, to: skill.to, deg: 135 }}
                  className="hero-skill-badge"
                  style={{ cursor: "default" }}
                >
                  {skill.name}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
      <Box
        className="scroll-indicator"
        onClick={() => {
          const el = document.getElementById("about");
          if (!el) return;
          const headerHeight =
            (document.querySelector(".mantine-AppShell-header") as HTMLElement)
              ?.offsetHeight ?? 60;
          window.scrollTo({
            top: el.getBoundingClientRect().top + window.scrollY - headerHeight,
            behavior: "smooth",
          });
        }}
        style={{
          alignSelf: "center",
          cursor: "pointer",
          opacity: 0.4,
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
      >
        <ChevronDown size={28} />
      </Box>
    </Container>
  );
}
