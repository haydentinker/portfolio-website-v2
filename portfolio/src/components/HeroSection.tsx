import { Container, Stack, Text, Title } from "@mantine/core";

export function HeroSection() {
  return (
    <Container
      pt={{ base: 100, md: 0 }}
      h={"100vh"}
      style={{
        position: "relative",
      }}
    >
      <Stack mt={{ base: 10, md: 250 }} justify="center">
        <Title order={1} size={80}>
          Hello, I am <br />
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            Hayden Tinker
          </Text>{" "}
        </Title>

        <Text size={"xl"}>
          Skilled Full-Stack Engineer with expertise in TypeScript, React,
          Node.js, and AWS. Developed innovative software solutions that
          improved operational efficiency and enhanced user experiences.
        </Text>
      </Stack>
    </Container>
  );
}
