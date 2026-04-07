import {
  Timeline,
  Text,
  List,
  Center,
  Title,
  Stack,
  ThemeIcon,
  Box,
  Badge,
  Group,
} from "@mantine/core";
import { CreditCard, School, Paint, AppWindow } from "tabler-icons-react";

export const TimelineSection = () => {
  return (
    <Center mx="sm" mt={100} mb={120}>
      <Stack style={{ width: "100%", maxWidth: 800 }}>
        <Box mb="xl">
          <Title order={2} className="section-heading">
            My Software Engineering Epic
          </Title>
        </Box>

        <Timeline bulletSize={28} lineWidth={2}>
          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                gradient={{ from: "violet", to: "indigo", deg: 90 }}
                radius="xl"
              >
                <CreditCard size={16} />
              </ThemeIcon>
            }
            title={
              <Text fw={600} size="md">
                Full-Stack Engineer — CARD.com
                <Text component="span" c="dimmed" size="sm" ml="xs">
                  02/25 – Current
                </Text>
              </Text>
            }
          >
            <Box>
              <Text c="dimmed" size="sm" mb="sm">
                Fintech platform providing prepaid cards and flexible money
                management for customers.
              </Text>
              <List size="sm" spacing="xs" mb="sm">
                <List.Item>
                  Developed full-stack customer support platform with React,
                  TypeScript, Node.js, and AWS CDK for transaction investigation
                  and account management, reducing manual workflows and
                  improving response times.
                </List.Item>
                <List.Item>
                  Integrated Plaid and Pinwheel APIs enabling automated
                  recurring payment transfers and simplified bill management
                  across accounts.
                </List.Item>
                <List.Item>
                  Optimized frontend performance with Redis caching strategies.
                </List.Item>
                <List.Item>
                  Conducted code reviews and architectural discussions to
                  improve delivery quality and team efficiency.
                </List.Item>
              </List>
              <Group gap="xs" mt="sm">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "AWS CDK",
                  "Redis",
                  "Plaid",
                ].map((t) => (
                  <Badge key={t} size="sm" variant="light" color="violet">
                    {t}
                  </Badge>
                ))}
              </Group>
            </Box>
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                gradient={{ from: "indigo", to: "red", deg: 90 }}
                radius="xl"
              >
                <Paint size={16} />
              </ThemeIcon>
            }
            title={
              <Text fw={600} size="md">
                Full-Stack Engineer — Sherwin Williams
                <Text component="span" c="dimmed" size="sm" ml="xs">
                  02/24 – 02/25
                </Text>
              </Text>
            }
          >
            <Box>
              <Text c="dimmed" size="sm" mb="sm">
                Leading global paint and coatings company providing high-quality
                products, color solutions, and digital tools.
              </Text>
              <List size="sm" spacing="xs" mb="sm">
                <List.Item>
                  Built full-stack price quote tool using React, Node.js, Java,
                  and SQL — allowing users to estimate paint costs efficiently
                  and improving sales conversion through faster quotes.
                </List.Item>
                <List.Item>
                  Optimized internal searching tool speed by{" "}
                  <Text component="span" fw={700} c="blue">
                    90%
                  </Text>
                  , increasing operational efficiency.
                </List.Item>
                <List.Item>
                  Collaborated with cross-functional teams to implement
                  user-centric applications with high scalability.
                </List.Item>
                <List.Item>
                  Created technical documents to enhance understanding and
                  usability of software solutions.
                </List.Item>
              </List>
              <Group gap="xs" mt="sm">
                {["React", "Node.js", "Java", "SQL"].map((t) => (
                  <Badge key={t} size="sm" variant="light" color="indigo">
                    {t}
                  </Badge>
                ))}
              </Group>
            </Box>
          </Timeline.Item>

          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                gradient={{ from: "teal", to: "cyan", deg: 90 }}
                radius="xl"
              >
                <School size={16} />
              </ThemeIcon>
            }
            title={
              <Text fw={600} size="md">
                BS Computer Science & Business Administration
                <Text component="span" c="dimmed" size="sm" ml="xs">
                  06/23 · 3.4 GPA
                </Text>
              </Text>
            }
          >
            <Box>
              <Text c="dimmed" size="sm">
                Graduated with a dual degree combining software engineering
                fundamentals with business acumen.
              </Text>
            </Box>
          </Timeline.Item>

          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                gradient={{ from: "grape", to: "red", deg: 90 }}
                radius="xl"
              >
                <AppWindow size={16} />
              </ThemeIcon>
            }
            title={
              <Text fw={600} size="md">
                Software Developer — Walla Walla University
                <Text component="span" c="dimmed" size="sm" ml="xs">
                  09/22 – 06/23
                </Text>
              </Text>
            }
          >
            <Box>
              <List size="sm" spacing="xs" mb="sm">
                <List.Item>
                  Developed software solutions that streamlined operations for
                  academic departments and administrative functions.
                </List.Item>
                <List.Item>
                  Directed backend development for production web application,
                  designing scalable RESTful APIs and core business logic for
                  classroom applications.
                </List.Item>
                <List.Item>
                  Designed schemas and bootstrapped MySQL database systems,
                  maintaining data integrity and improving query performance.
                </List.Item>
                <List.Item>
                  Integrated user-facing elements with backend services,
                  collaborating closely with frontend developers.
                </List.Item>
              </List>
              <Group gap="xs" mt="sm">
                {["REST APIs", "MySQL", "Node.js"].map((t) => (
                  <Badge key={t} size="sm" variant="light" color="grape">
                    {t}
                  </Badge>
                ))}
              </Group>
            </Box>
          </Timeline.Item>
        </Timeline>
      </Stack>
    </Center>
  );
};
