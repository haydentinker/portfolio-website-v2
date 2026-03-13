import {
  Timeline,
  Text,
  List,
  Center,
  Title,
  Stack,
  ThemeIcon,
} from "@mantine/core";
import { CreditCard, School, Paint, AppWindow } from "tabler-icons-react";

export const TimelineSection = () => {
  return (
    <Center mx="sm">
      <Stack>
        <Title order={1}>My Software Engineering Epic</Title>
        <Timeline bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: "violet", to: "indigo", deg: 90 }}
                radius="xl"
              >
                <CreditCard />
              </ThemeIcon>
            }
            title="Full-Stack Engineer | CARD.com | 02/25 - Current"
          >
            <Text>
              Fintech platform providing prepaid cards and flexible money
              management for customers.
            </Text>
            <List>
              <List.Item>
                Developed full-stack customer support platform with React,
                TypeScript, Node.js, and AWS CDK for transaction investigation,
                account management, reducing manual workflows and improving
                support response times.
              </List.Item>
              <List.Item>
                Integrated with Plaid and Pinwheel APIs, giving customers an
                automated way to transfer recurring payments and simplifying
                bill management across accounts.
              </List.Item>
              <List.Item>
                Optimized frontend performance by implementing caching
                strategies such as Redis.
              </List.Item>
              <List.Item>
                Conducted code reviews and architectural discussions to improve
                delivery quality and team efficiency.
              </List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: "indigo", to: "red", deg: 90 }}
                radius="xl"
              >
                <Paint />
              </ThemeIcon>
            }
            title="Full-Stack Engineer | Sherwin Williams | 02/24 - 02/25"
          >
            <Text>
              Leading global paint and coatings company providing high-quality
              products, color solutions, and digital tools to professionals and
              retail customers.
            </Text>
            <List>
              <List.Item>
                Built full-stack software solution using React, Node.js, Java,
                and SQL to deliver a price quote tool, allowing users to
                estimate paint costs efficiently and improving sales conversion
                through faster quotes.
              </List.Item>
              <List.Item>
                Optimized internal searching tool speed by 90%, increasing
                operational efficiency.
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
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: "teal", to: "orange", deg: 90 }}
                radius="xl"
              >
                <School />
              </ThemeIcon>
            }
            title="Bachelor of Science in Computer Science and Business Administration | 3.4 GPA | June 2023 "
          />
          <Timeline.Item
            bullet={
              <ThemeIcon
                variant="gradient"
                size="lg"
                aria-label="Gradient action icon"
                gradient={{ from: "grape", to: "red", deg: 90 }}
                radius="xl"
              >
                <AppWindow />
              </ThemeIcon>
            }
            title="Software Developer | Walla Walla University | 09/22 - 06/23"
          >
            <List>
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
                maintaining data integrity, improving query performance, and
                enabling reliable backend services for users..
              </List.Item>
              <List.Item>
                Integrated user-facing elements with backend services,
                collaborating closely with frontend developers.
              </List.Item>
            </List>
          </Timeline.Item>
        </Timeline>
      </Stack>
    </Center>
  );
};
