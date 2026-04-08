import { Button, Burger, Drawer, Flex, Stack, Title, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BrandLinkedin, BrandGithub, Download } from "tabler-icons-react";

function scrollTo(id: string, close?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  close?.();
}

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);

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
        <Flex gap={4} visibleFrom="sm">
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
        </Flex>

        {/* Mobile burger */}
        <Burger opened={opened} onClick={open} hiddenFrom="sm" size="sm" />
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
