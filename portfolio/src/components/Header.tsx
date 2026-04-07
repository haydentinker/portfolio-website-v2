import { Button, Flex, Title } from "@mantine/core";

import { BrandLinkedin, BrandGithub } from "tabler-icons-react";
export const Header = () => {
  return (
    <Flex justify={"space-between"} m={10}>
      <Title>HT</Title>
      <Flex gap={5}>
        <Button
          onClick={() => window.open("/HaydenTinker.pdf", "_blank")}
          variant="subtle"
          size="md"
        >
          Resume
        </Button>
        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/hayden-tinker/", "_blank")
          }
          variant="subtle"
          size="md"
        >
          <BrandLinkedin />
        </Button>
        <Button
          onClick={() =>
            window.open("https://github.com/haydentinker", "_blank")
          }
          variant="subtle"
          size="md"
        >
          <BrandGithub />
        </Button>
      </Flex>
    </Flex>
  );
};
