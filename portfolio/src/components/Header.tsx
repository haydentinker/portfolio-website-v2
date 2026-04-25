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
import { useEffect, useState } from "react";
import { BrandLinkedin, BrandGithub, ExternalLink, Sun, Moon } from "tabler-icons-react";

const NAV_SECTIONS = ["hero", "about", "timeline", "projects", "contact"] as const;
type Section = (typeof NAV_SECTIONS)[number];

function scrollTo(id: string, close?: () => void) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerHeight = (document.querySelector(".mantine-AppShell-header") as HTMLElement)?.offsetHeight ?? 60;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
  close?.();
}

function useActiveSection(): Section {
  const [active, setActive] = useState<Section>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // fires when a section enters the middle band of the viewport
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme("dark");
  const activeSection = useActiveSection();

  function toggleScheme() {
    setColorScheme(computed === "dark" ? "light" : "dark");
  }

  function navProps(id: Section) {
    const isActive = activeSection === id;
    return {
      variant: isActive ? ("light" as const) : ("subtle" as const),
      color: isActive ? "blue" : undefined,
    };
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
          <Button onClick={() => scrollTo("about")} size="sm" {...navProps("about")}>
            About
          </Button>
          <Button onClick={() => scrollTo("timeline")} size="sm" {...navProps("timeline")}>
            Experience
          </Button>
          <Button onClick={() => scrollTo("projects")} size="sm" {...navProps("projects")}>
            Projects
          </Button>
          <Button onClick={() => scrollTo("contact")} size="sm" {...navProps("contact")}>
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
            aria-label="LinkedIn profile"
          >
            <BrandLinkedin size={18} />
          </Button>
          <Button
            onClick={() =>
              window.open("https://github.com/haydentinker", "_blank")
            }
            variant="subtle"
            size="sm"
            aria-label="GitHub profile"
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
            onClick={() => scrollTo("about", close)}
          >
            About
          </Button>
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
            leftSection={<ExternalLink size={16} />}
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
