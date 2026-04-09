import { Flex, Text, ActionIcon, Group } from "@mantine/core";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

export function Footer() {
  return (
    <Flex
      justify="space-between"
      align="center"
      px="xl"
      h="100%"
      wrap="wrap"
      gap="sm"
    >
      <Text size="sm" c="dimmed">
        © {new Date().getFullYear()} Hayden Tinker · Built with React &amp; Mantine
      </Text>
      <Group gap="xs">
        <ActionIcon
          variant="subtle"
          color="gray"
          size="md"
          aria-label="GitHub"
          onClick={() => window.open("https://github.com/haydentinker", "_blank")}
        >
          <BrandGithub size={17} />
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          color="gray"
          size="md"
          aria-label="LinkedIn"
          onClick={() => window.open("https://www.linkedin.com/in/hayden-tinker/", "_blank")}
        >
          <BrandLinkedin size={17} />
        </ActionIcon>
      </Group>
    </Flex>
  );
}
