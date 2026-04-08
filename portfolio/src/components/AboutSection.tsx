import {
  Center,
  Stack,
  Title,
  Box,
  Text,
  Grid,
  ThemeIcon,
  Group,
} from "@mantine/core";
import { Code, Bulb, Users } from "tabler-icons-react";

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
                I'm a Full-Stack Software Engineer based in the US with a
                background in both computer science and business administration.
                I've spent the last few years building production software at
                companies like{" "}
                <Text component="span" fw={600} c="blue">
                  CARD.com
                </Text>{" "}
                and{" "}
                <Text component="span" fw={600} c="indigo">
                  Sherwin-Williams
                </Text>
                , working across the full stack from React frontends to AWS
                infrastructure.
              </Text>
              <Text size="lg" lh={1.8} c="dimmed">
                Outside of work I enjoy building side projects, grinding
                LeetCode, and exploring new tools. I'm at my best when working
                on problems that sit at the intersection of good engineering and
                real user impact.
              </Text>
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
