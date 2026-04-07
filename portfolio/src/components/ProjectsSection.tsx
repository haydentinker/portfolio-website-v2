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
} from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  tagColor: string;
  githubUrl: string;
  imageUrl: string;
}

const PROJECTS: Project[] = [
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
    name: "Bed Wars Stats Dashboard",
    description:
      "Engineered a Next.js application that aggregates and visualizes Bed Wars player data using Mojang and Hypixel APIs. Implemented typed data models, API proxy routes, and dynamic routing, alongside a performant UI built with Tailwind, HeroUI, and Framer Motion.",
    tags: ["React", "Next.js", "TypeScript", "Hero UI", "Third-Party APIs"],
    tagColor: "red",
    githubUrl: "https://github.com/haydentinker/Bed-Wars-Stats-Dashboard",
    imageUrl: "/projects/bedWarsStats.png",
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
      "Maple's Adventure is a side-scrolling game built with Python and Pygame, featuring a charming character trying to avoid obstacles as they progessively get faster.",
    tags: ["Python", "Pygame", "Game Development"],
    tagColor: "teal",
    githubUrl: "https://github.com/haydentinker/PugDash",
    imageUrl: "/projects/pugDash.png",
  },
];

export const ProjectsSection = () => {
  return (
    <Center mx="sm" mt={80} mb={120}>
      <Stack style={{ width: "100%", maxWidth: 800 }}>
        <Box mb="xl">
          <Title order={2} className="section-heading">
            Projects
          </Title>
        </Box>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {PROJECTS.map((project) => (
            <Card
              key={project.name}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ display: "flex", flexDirection: "column" }}
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

                <Text size="sm" c="dimmed" style={{ flex: 1 }}>
                  {project.description}
                </Text>

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

                <Button
                  mt="xs"
                  variant="outline"
                  color="gray"
                  size="sm"
                  leftSection={<BrandGithub size={16} />}
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  fullWidth
                >
                  View on GitHub
                </Button>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Center>
  );
};
