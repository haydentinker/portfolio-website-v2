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
            Experience
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
                  Feb 2025 – Feb 2026
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
                  Built ACE, a compliance-grade internal support platform
                  unifying multiple backend services into a single agent-facing
                  interface, implementing multi-tier RBAC, PII masking, and AWS
                  Cognito authentication to meet security and compliance
                  requirements.
                </List.Item>
                <List.Item>
                  Integrated Plaid and Pinwheel APIs to automate recurring
                  payment transfers, reducing manual bill migration effort for
                  customers.
                </List.Item>
                <List.Item>
                  Deployed cloud-native infrastructure across a multi-region AWS
                  architecture using App Runner, S3, CloudFront, WAF, and
                  CodePipeline for high availability and reliability.
                </List.Item>
                <List.Item>
                  Led code reviews and architectural discussions to maintain
                  delivery quality and team velocity.
                </List.Item>
              </List>
              <Group gap="xs" mt="sm">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "AWS CDK",
                  "tRPC",
                  "PostgreSQL",
                  "Plaid",
                  "Pinwheel",
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
                Full-Stack Engineer — Sherwin-Williams
                <Text component="span" c="dimmed" size="sm" ml="xs">
                  Feb 2024 – Feb 2025
                </Text>
              </Text>
            }
          >
            <Box>
              <Text c="dimmed" size="sm" mb="sm">
                Leading global paint and coatings company providing high-quality
                products, color solutions, and digital tools to professionals
                and retail customers.
              </Text>
              <List size="sm" spacing="xs" mb="sm">
                <List.Item>
                  Optimized a critical internal search tool by{" "}
                  <Text component="span" fw={700} c="blue">
                    90%
                  </Text>
                  , directly improving daily operational efficiency across the
                  organization.
                </List.Item>
                <List.Item>
                  Built a full-stack price quote tool using React, Node.js,
                  Java, and SQL that let users estimate paint costs in real
                  time, improving sales conversion through faster quote
                  generation.
                </List.Item>
                <List.Item>
                  Collaborated with cross-functional teams to ship scalable,
                  user-facing applications and produced technical documentation
                  to improve developer onboarding and usability.
                </List.Item>
              </List>
              <Group gap="xs" mt="sm">
                {["React", "Node.js", "Java", "SQL", "Tailwind CSS"].map(
                  (t) => (
                    <Badge key={t} size="sm" variant="light" color="indigo">
                      {t}
                    </Badge>
                  ),
                )}
              </Group>
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
                  Sep 2022 – Jun 2023
                </Text>
              </Text>
            }
          >
            <Box>
              <Text c="dimmed" size="sm" mb="sm">
                Part-time role building production software for academic
                departments and administrative functions while completing my
                degree.
              </Text>
              <List size="sm" spacing="xs" mb="sm">
                <List.Item>
                  Directed backend development for a production web application,
                  designing scalable RESTful APIs and core business logic for
                  classroom management systems.
                </List.Item>
                <List.Item>
                  Bootstrapped MySQL database schemas focused on query
                  performance and data integrity, enabling reliable backend
                  services for real users.
                </List.Item>
                <List.Item>
                  Integrated user-facing elements with backend services in close
                  collaboration with frontend developers.
                </List.Item>
              </List>
              <Group gap="xs" mt="sm">
                {["REST APIs", "MySQL", "Node.js", "Python", "Flask"].map(
                  (t) => (
                    <Badge key={t} size="sm" variant="light" color="grape">
                      {t}
                    </Badge>
                  ),
                )}
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
                B.S. Computer Science & Business Administration
                <Text component="span" c="dimmed" size="sm" ml="xs">
                  Jun 2023 · 3.4 GPA
                </Text>
              </Text>
            }
          >
            <Box>
              <Text c="dimmed" size="sm">
                Walla Walla University. Dual degree combining software
                engineering fundamentals with business acumen in management,
                marketing, and finance.
              </Text>
            </Box>
          </Timeline.Item>
        </Timeline>
      </Stack>
    </Center>
  );
};
