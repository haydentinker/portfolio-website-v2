import { useState } from "react";
import {
  Center,
  Stack,
  Title,
  Box,
  SimpleGrid,
  Card,
  Text,
  Badge,
  Group,
  Button,
  Image,
  AspectRatio,
  Grid,
} from "@mantine/core";
import { BrandGithub, ExternalLink } from "tabler-icons-react";
import { AnimatedSection } from "./AnimatedSection";

interface Project {
  name: string;
  description: string;
  tags: string[];
  tagColor: string;
  githubUrl: string;
  imageUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Repository Augur",
    description:
      "Engineered a scalable RAG-based chat system using React, Flask, and MongoDB Atlas vector indexing, enabling semantic search and real-time AI responses over GitHub repositories. Implemented incremental ingestion, GitHub OAuth, and LangGraph-based agent workflows for efficient, context-aware querying.",
    tags: [
      "Flask",
      "Python",
      "React",
      "REST API",
      "MongoDb Atlas",
      "LangChain",
      "LangSmith",
      "GitHub OAuth",
      "TypeScript",
    ],
    tagColor: "violet",
    githubUrl: "https://github.com/haydentinker/Repo-Chat-Bot",
    imageUrl: "/projects/repoChatBot.png",
  },
  {
    name: "ACE (Awesome Customer Experience)",
    description:
      "Built a full-stack internal support platform that aggregates data from multiple backend services (Ringmaster, Fusion, AWS) into a unified agent UI. Developed a TypeScript-based architecture using React (Vite, Mantine, TanStack) and Node.js with Express, tRPC, and Zod for end-to-end type safety. Implemented AWS Cognito authentication with RBAC (Agent, Manager, Admin), PII masking, and a custom session management system enforcing inactivity-based expiration for compliance. Designed a backend aggregation layer to normalize disparate APIs and enable flexible service integration. Deployed on AWS using S3, CloudFront, WAF, CodePipeline, CodeBuild, and App Runner.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "tRPC",
      "Express",
      "AWS Cognito",
      "AWS App Runner",
      "AWS S3",
      "CloudFront",
      "Zod",
    ],
    tagColor: "violet",
    githubUrl: "",
    imageUrl: "/projects/ace.png",
  },
  {
    name: "Portfolio Website",
    description:
      "The site you're on right now. Built with React, TypeScript, and Mantine UI. Deployed on Vercel with analytics tracking.",
    tags: ["React", "TypeScript", "Mantine", "Vercel"],
    tagColor: "blue",
    githubUrl: "https://github.com/haydentinker/portfolio-website-v2",
    imageUrl: "/projects/portfolioWebsite.png",
  },
  {
    name: "Bed Wars Stats Dashboard",
    description:
      "Engineered a Next.js application that aggregates and visualizes Bed Wars player data using Mojang and Hypixel APIs. Implemented typed data models, API proxy routes, and dynamic routing, alongside a performant UI built with Tailwind, HeroUI, and Framer Motion.",
    tags: ["React", "Next.js", "TypeScript", "Hero UI", "Third-Party APIs"],
    tagColor: "red",
    githubUrl: "https://github.com/haydentinker/Bed-Wars-Stats-Dashboard",
    imageUrl: "/projects/bedWarsStats.png",
    liveUrl: "https://bed-wars-stats-dashboard.vercel.app/",
  },
  {
    name: "LeetCode Solutions",
    description:
      "LeetCode solutions implemented in Python and TypeScript covering a wide range of algorithmic problems, demonstrating proficiency in data structures, algorithms, and problem-solving skills.",
    tags: ["Python", "TypeScript", "LeetCode"],
    tagColor: "yellow",
    githubUrl: "https://github.com/haydentinker/LeetCode",
    imageUrl: "/projects/leetCode.jpg",
  },
  {
    name: "Maple's Adventure",
    description:
      "Maple's Adventure is a side-scrolling game built with Python and Pygame, featuring a charming character trying to avoid obstacles as they progressively get faster.",
    tags: ["Python", "Pygame", "Game Development"],
    tagColor: "teal",
    githubUrl: "https://github.com/haydentinker/PugDash",
    imageUrl: "/projects/pugDash.png",
    liveUrl: "https://pug-dash-nine.vercel.app/",
  },
];

function hoverStyle(hovered: boolean) {
  return {
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.4)" : undefined,
  };
}

const DESCRIPTION_LINE_CLAMP = 3;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Rough heuristic: show toggle if description is likely to overflow 3 lines
  const showToggle = project.description.length > 120;

  return (
    <AnimatedSection delay={index * 80} style={{ height: "100%" }}>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          ...hoverStyle(hovered),
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card.Section>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={project.imageUrl}
              alt={`${project.name} screenshot`}
              fallbackSrc="https://placehold.co/600x338?text=No+Image"
            />
          </AspectRatio>
        </Card.Section>

        <Stack mt="md" gap="sm" style={{ flex: 1 }}>
          <Text fw={600} size="md">
            {project.name}
          </Text>

          <Box>
            <Text
              size="sm"
              c="dimmed"
              style={
                expanded
                  ? undefined
                  : {
                      display: "-webkit-box",
                      WebkitLineClamp: DESCRIPTION_LINE_CLAMP,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
              }
            >
              {project.description}
            </Text>
            {showToggle && (
              <Text
                size="xs"
                c="blue"
                style={{ cursor: "pointer", marginTop: 4 }}
                onClick={() => setExpanded((e) => !e)}
              >
                {expanded ? "Show less" : "Show more"}
              </Text>
            )}
          </Box>

          <Group gap="xs">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                size="sm"
                variant="light"
                color={project.tagColor}
              >
                {tag}
              </Badge>
            ))}
          </Group>

          <Group gap="xs" mt="auto">
            <Button
              variant="outline"
              color="gray"
              size="sm"
              leftSection={<BrandGithub size={16} />}
              onClick={() => window.open(project.githubUrl, "_blank")}
              style={{ flex: 1 }}
            >
              GitHub
            </Button>
            {project.liveUrl && (
              <Button
                variant="light"
                color="blue"
                size="sm"
                leftSection={<ExternalLink size={16} />}
                onClick={() => window.open(project.liveUrl, "_blank")}
                style={{ flex: 1 }}
              >
                Live Demo
              </Button>
            )}
          </Group>
        </Stack>
      </Card>
    </AnimatedSection>
  );
}

export const ProjectsSection = () => {
  const [featured, ...rest] = PROJECTS;
  const [featuredHovered, setFeaturedHovered] = useState(false);

  return (
    <Center mx="sm" mt={80} mb={120}>
      <Stack style={{ width: "100%", maxWidth: 800 }} gap="xl">
        <Box mb="xl">
          <Title order={2} className="section-heading">
            Projects
          </Title>
        </Box>

        <AnimatedSection>
          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            style={hoverStyle(featuredHovered)}
            onMouseEnter={() => setFeaturedHovered(true)}
            onMouseLeave={() => setFeaturedHovered(false)}
          >
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={featured.imageUrl}
                    alt={`${featured.name} screenshot`}
                    radius="sm"
                    fallbackSrc="https://placehold.co/600x338?text=No+Image"
                  />
                </AspectRatio>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Stack gap="sm">
                  <Group gap="xs">
                    <Badge
                      size="sm"
                      variant="gradient"
                      gradient={{ from: "violet", to: "indigo" }}
                    >
                      Featured Project
                    </Badge>
                  </Group>
                  <Text fw={700} size="xl">
                    {featured.name}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {featured.description}
                  </Text>
                  <Group gap="xs" mt="xs">
                    {featured.tags.map((tag) => (
                      <Badge
                        key={tag}
                        size="sm"
                        variant="light"
                        color={featured.tagColor}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                  <Group gap="xs" mt="sm">
                    <Button
                      variant="outline"
                      color="gray"
                      size="sm"
                      leftSection={<BrandGithub size={16} />}
                      onClick={() => window.open(featured.githubUrl, "_blank")}
                    >
                      GitHub
                    </Button>
                    {featured.liveUrl && (
                      <Button
                        variant="light"
                        color="blue"
                        size="sm"
                        leftSection={<ExternalLink size={16} />}
                        onClick={() => window.open(featured.liveUrl, "_blank")}
                      >
                        Live Demo
                      </Button>
                    )}
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        </AnimatedSection>

        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing="lg"
          style={{ alignItems: "stretch" }}
        >
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </SimpleGrid>
      </Stack>
    </Center>
  );
};
