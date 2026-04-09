import { useEffect, useState } from "react";
import {
  Button,
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
  Download,
  CircleCheck,
} from "tabler-icons-react";

const ROLES = [
  "Full-Stack Software Engineer",
  "React & TypeScript Dev",
  "AWS Cloud Engineer",
  "AI / RAG Builder",
];

function useTypewriter(phrases: string[], typingSpeed = 65, deletingSpeed = 35, pauseMs = 1800) {
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
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  useEffect(() => {
    setDisplayed(phrases[phraseIndex].slice(0, charIndex));
  }, [charIndex, phraseIndex, phrases]);

  return displayed;
}
const SKILLS = [
  { name: "TypeScript", from: "blue", to: "cyan" },
  { name: "React", from: "cyan", to: "teal" },
  { name: "Node.js", from: "green", to: "teal" },
  { name: "AWS", from: "orange", to: "yellow" },
  { name: "AWS CDK", from: "orange", to: "red" },
  { name: "Python", from: "red", to: "orange" },
  { name: "SQL", from: "grape", to: "violet" },
  { name: "NoSQL", from: "green", to: "blue" },
  { name: "Redis", from: "red", to: "pink" },
  { name: "REST APIs", from: "violet", to: "indigo" },
  { name: "GraphQL", from: "indigo", to: "blue" },
  { name: "Microservices", from: "blue", to: "red" },
  { name: "Full-Stack Development", from: "gray", to: "dark" },
  { name: "Docker", from: "blue", to: "indigo" },
];
export function HeroSection() {
  const role = useTypewriter(ROLES);

  return (
    <Container pt={{ base: 100, md: 0 }} style={{ minHeight: "100vh" }}>
      <Grid
        style={{ width: "100%" }}
        gutter={{ base: 32, md: 80 }}
        align="center"
      >
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack mt={{ base: 10, md: 250 }} justify="center">
            <Group gap="xs">
              <ThemeIcon color="green" variant="light" size="sm" radius="xl">
                <CircleCheck size={12} />
              </ThemeIcon>
              <Text size="sm" c="green" fw={500}>
                Open to new opportunities
              </Text>
            </Group>
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
            <Title order={2} c="dimmed" fw={400} size="xl" style={{ minHeight: "2rem" }}>
              {role}
              <span style={{ borderRight: "2px solid", marginLeft: 2, animation: "blink 1s step-end infinite" }}>
              </span>
            </Title>

            <Text size="lg">
              Skilled Full-Stack Engineer with expertise in TypeScript, React,
              Node.js, and AWS. Developed innovative software solutions that
              improved operational efficiency and enhanced user experiences.
            </Text>
            <Group gap="sm" wrap="wrap">
              <Button
                size="md"
                variant="gradient"
                gradient={{ from: "#339af0", to: "#22d3ee" }}
                leftSection={<Download size={19} />}
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
            gap="lg"
            className="hero-animate hero-animate-2"
            pb={{ base: "xl", md: 0 }}
          >
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
    </Container>
  );
}
