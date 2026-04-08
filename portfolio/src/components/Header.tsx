import {
  ActionIcon,
  Button,
  Burger,
  Drawer,
  Flex,
  Stack,
  Title,
  Divider,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BrandLinkedin, BrandGithub, Download, Sun, Moon } from "tabler-icons-react";

function scrollTo(id: string, close?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  close?.();
}

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme("dark");

  function toggleScheme() {
    setColorScheme(computed === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Flex justify="space-between" align="center" px="md" h="100%">
        <Title
          order={3}
          style={{ cursor: "pointer" }}
          onClick={() => scrollTo("hero")}
        >
          HT
        </Title>

        {/* Desktop nav */}
        <Flex gap={4} align="center" visibleFrom="sm">
          <Button onClick={() => scrollTo("timeline")} variant="subtle" size="sm">
            Experience
          </Button>
          <Button onClick={() => scrollTo("projects")} variant="subtle" size="sm">
            Projects
          </Button>
          <Button onClick={() => scrollTo("contact")} variant="subtle" size="sm">
            Contact
          </Button>
          <Button
            onClick={() => window.open("/HaydenTinker.pdf", "_blank")}
            variant="subtle"
            size="sm"
          >
            Resume
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/hayden-tinker/", "_blank")
            }
            variant="subtle"
            size="sm"
          >
            <BrandLinkedin size={18} />
          </Button>
          <Button
            onClick={() =>
              window.open("https://github.com/haydentinker", "_blank")
            }
            variant="subtle"
            size="sm"
          >
            <BrandGithub size={18} />
          </Button>
          <ActionIcon
            onClick={toggleScheme}
            variant="subtle"
            color="gray"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {computed === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
        </Flex>

        {/* Mobile: theme toggle + burger */}
        <Flex gap={8} align="center" hiddenFrom="sm">
          <ActionIcon
            onClick={toggleScheme}
            variant="subtle"
            color="gray"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {computed === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
          <Burger opened={opened} onClick={open} size="sm" />
        </Flex>
      </Flex>

      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        position="right"
        size="xs"
        padding="md"
      >
        <Stack gap="xs">
          <Button
            fullWidth
            variant="subtle"
            size="md"
            onClick={() => scrollTo("timeline", close)}
          >
            Experience
          </Button>
          <Button
            fullWidth
            variant="subtle"
            size="md"
            onClick={() => scrollTo("projects", close)}
          >
            Projects
          </Button>
          <Button
            fullWidth
            variant="subtle"
            size="md"
            onClick={() => scrollTo("contact", close)}
          >
            Contact
          </Button>
          <Divider />
          <Button
            fullWidth
            variant="light"
            size="md"
            leftSection={<Download size={16} />}
            onClick={() => {
              window.open("/HaydenTinker.pdf", "_blank");
              close();
            }}
          >
            Resume
          </Button>
          <Button
            fullWidth
            variant="subtle"
            size="md"
            leftSection={<BrandLinkedin size={16} />}
            onClick={() => {
              window.open("https://www.linkedin.com/in/hayden-tinker/", "_blank");
              close();
            }}
          >
            LinkedIn
          </Button>
          <Button
            fullWidth
            variant="subtle"
            size="md"
            leftSection={<BrandGithub size={16} />}
            onClick={() => {
              window.open("https://github.com/haydentinker", "_blank");
              close();
            }}
          >
            GitHub
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};
