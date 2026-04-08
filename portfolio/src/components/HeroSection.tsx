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
import { BrandGithub, BrandLinkedin, Download, CircleCheck } from "tabler-icons-react";
const SKILLS = [
  { name: "TypeScript", from: "blue", to: "cyan" },
  { name: "React", from: "cyan", to: "teal" },
  { name: "Node.js", from: "green", to: "teal" },
  { name: "AWS", from: "orange", to: "yellow" },
  { name: "AWS CDK", from: "orange", to: "red" },
  { name: "Python", from: "red", to: "orange" },
  { name: "SQL / MySQL", from: "grape", to: "violet" },
  { name: "Redis", from: "red", to: "pink" },
  { name: "REST APIs", from: "violet", to: "indigo" },
  { name: "GraphQL", from: "indigo", to: "blue" },
  { name: "Full-Stack Development", from: "gray", to: "dark" },
  { name: "Docker", from: "blue", to: "indigo" },
];
export function HeroSection() {
  return (
    <Container
      pt={{ base: 100, md: 0 }}
      h={"100vh"}
      style={{
        position: "relative",
      }}
    >
      <Grid
        style={{ width: "100%" }}
        gutter={{ base: 48, md: 80 }}
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
            <Title order={1} size={80}>
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

            <Text size={"xl"}>
              Skilled Full-Stack Engineer with expertise in TypeScript, React,
              Node.js, and AWS. Developed innovative software solutions that
              improved operational efficiency and enhanced user experiences.
            </Text>
            <Group gap="sm">
              <Button
                size="lg"
                variant="gradient"
                gradient={{ from: "#339af0", to: "#22d3ee" }}
                leftSection={<Download size={19} />}
                onClick={() => window.open("/HaydenTinker.pdf", "_blank")}
                className="hero-cta-primary"
              >
                View Resume
              </Button>
              <Button
                size="lg"
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
                size="lg"
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
          <Stack gap="lg" className="hero-animate hero-animate-2">
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
            <Group gap="sm">
              {SKILLS.map((skill) => (
                <Badge
                  key={skill.name}
                  size="lg"
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
