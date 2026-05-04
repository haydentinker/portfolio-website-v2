import {
  Center,
  Stack,
  Title,
  Box,
  Text,
  Grid,
  ThemeIcon,
  Group,
  Divider,
} from "@mantine/core";
import { Code, Bulb, Users } from "tabler-icons-react";
import { GitHubStats } from "./GitHubStats";
import { LeetCodeStats } from "./LeetCodeStats";

const VALUES = [
  {
    icon: <Code size={20} />,
    color: "blue",
    heading: "Clean, Purposeful Code",
    body: "I care about writing software that's readable, maintainable, and built to last — not just code that ships fast.",
  },
  {
    icon: <Bulb size={20} />,
    color: "yellow",
    heading: "Curiosity-Driven",
    body: "From RAG pipelines to fintech payment flows, I gravitate toward problems that push me into unfamiliar territory.",
  },
  {
    icon: <Users size={20} />,
    color: "teal",
    heading: "Team-First Mindset",
    body: "The best software gets built collaboratively. I invest in code reviews, documentation, and making the people around me better.",
  },
];

export const AboutSection = () => {
  return (
    <Center mx="sm" mt={80} mb={80}>
      <Stack style={{ width: "100%", maxWidth: 800 }}>
        <Box mb="xl">
          <Title order={2} className="section-heading">
            About Me
          </Title>
        </Box>

        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="md">
              <Text size="lg" lh={1.8}>
                I'm a Full-Stack Engineer based in the Detroit Metro Area with a
                background in computer science and business. I've shipped
                production software at a fintech startup and one of the largest
                companies in the world, building everything from{" "}
                <Text component="span" fw={600} c="blue">
                  compliance-grade internal platforms
                </Text>{" "}
                to{" "}
                <Text component="span" fw={600} c="yellow">
                  AI-powered developer tools
                </Text>
                . I write code that's{" "}
                <Text component="span" fw={600} c="blue">
                  readable, maintainable, and built to last
                </Text>
                , not just code that ships fast. I gravitate toward work that
                pulls me into{" "}
                <Text component="span" fw={600} c="yellow">
                  unfamiliar problems and new domains
                </Text>
                , because that's where the best learning happens. And I believe
                software gets better when the{" "}
                <Text component="span" fw={600} c="green">
                  people around you get better too
                </Text>
                , which is why I put real effort into code reviews,
                documentation, and the craft of working well with a team.
              </Text>
              <Divider />
              <GitHubStats />
              <Divider />
              <LeetCodeStats />
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="lg">
              {VALUES.map((v) => (
                <Group key={v.heading} gap="md" align="flex-start">
                  <ThemeIcon
                    color={v.color}
                    variant="light"
                    size="lg"
                    radius="md"
                  >
                    {v.icon}
                  </ThemeIcon>
                  <Box style={{ flex: 1 }}>
                    <Text fw={600} size="sm" mb={2}>
                      {v.heading}
                    </Text>
                    <Text size="sm" c="dimmed" lh={1.6}>
                      {v.body}
                    </Text>
                  </Box>
                </Group>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Center>
  );
};
