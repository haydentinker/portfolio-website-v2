import { useState } from "react";
import {
  Center,
  Stack,
  Title,
  Box,
  TextInput,
  Textarea,
  Button,
  Text,
  Alert,
  Group,
} from "@mantine/core";
import { Send, CircleCheck, AlertCircle } from "tabler-icons-react";

const FORMSPREE_ID = "xbdpbpow";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(fields: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required";
  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!fields.message.trim()) errors.message = "Message is required";
  else if (fields.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export const ContactSection = () => {
  const [fields, setFields] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.currentTarget;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Center mx="sm" mt={80} mb={120}>
      <Stack style={{ width: "100%", maxWidth: 600 }}>
        <Box mb="xl">
          <Title order={2} className="section-heading">
            Get In Touch
          </Title>
          <Text c="dimmed" mt="xs">
            Have a role in mind or just want to connect? Send me a message and
            I'll get back to you.
          </Text>
        </Box>

        {status === "success" ? (
          <Alert
            icon={<CircleCheck size={20} />}
            color="green"
            variant="light"
            radius="md"
          >
            <Text fw={500}>Message sent — thanks for reaching out!</Text>
            <Text size="sm" c="dimmed" mt={4}>
              I'll get back to you as soon as possible.
            </Text>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <Stack gap="md">
              {status === "error" && (
                <Alert
                  icon={<AlertCircle size={20} />}
                  color="red"
                  variant="light"
                  radius="md"
                >
                  Something went wrong sending your message. Feel free to reach
                  me directly on{" "}
                  <a
                    href="https://www.linkedin.com/in/hayden-tinker/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit" }}
                  >
                    LinkedIn
                  </a>
                  .
                </Alert>
              )}

              <Group gap="md" grow>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  error={errors.name}
                  radius="md"
                />
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  error={errors.email}
                  radius="md"
                />
              </Group>

              <Textarea
                label="Message"
                placeholder="Tell me about the opportunity or just say hello..."
                name="message"
                value={fields.message}
                onChange={handleChange}
                error={errors.message}
                minRows={5}
                autosize
                radius="md"
              />

              <Button
                type="submit"
                size="md"
                variant="gradient"
                gradient={{ from: "#339af0", to: "#22d3ee" }}
                leftSection={<Send size={18} />}
                loading={status === "loading"}
                style={{ alignSelf: "flex-start" }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        )}
      </Stack>
    </Center>
  );
};
