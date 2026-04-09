import { useEffect, useRef, useState } from "react";
import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { Terminal as TerminalIcon, X, Minus } from "tabler-icons-react";

interface TerminalLine {
  type: "input" | "output" | "error";
  text: string;
}

const HELP_TEXT = `Available commands:
  whoami       Who is Hayden?
  skills       Tech stack & skills
  experience   Work history
  projects     Notable projects
  contact      How to reach me
  clear        Clear the terminal
  help         Show this message`;

const COMMANDS: Record<string, string> = {
  whoami: `Hayden Tinker — Full-Stack Software Engineer based in the US.
CS + Business Administration grad. Currently building fintech software at CARD.com.
Passionate about clean code, great UX, and problems worth solving.`,

  skills: `Languages:   TypeScript · Python · Java · SQL
Frontend:    React · Next.js · Tailwind · Mantine
Backend:     Node.js · Flask · REST APIs · GraphQL
Cloud/Infra: AWS · AWS CDK · Docker · Redis
Databases:   PostgreSQL · MongoDB Atlas · MySQL
AI/ML:       LangChain · LangGraph · RAG pipelines`,

  experience: `[Current]  Full-Stack Engineer @ CARD.com (02/25 – present)
           React · TypeScript · Node.js · AWS CDK · Redis

[2024]     Full-Stack Engineer @ Sherwin-Williams (02/24 – 02/25)
           React · Node.js · Java · SQL
           → Sped up internal search tool by 90%

[2022-23]  Software Developer @ Walla Walla University
           REST APIs · MySQL · Node.js`,

  projects: `1. Repository Augur  — RAG chat over GitHub repos (Flask · React · MongoDB Atlas · LangChain)
   github.com/haydentinker/Repo-Chat-Bot

2. Bed Wars Stats Dashboard  — live Hypixel stats (Next.js · TypeScript · HeroUI)
   bed-wars-stats-dashboard.vercel.app

3. Maple's Adventure  — side-scrolling Pygame game
   pug-dash-nine.vercel.app

4. Portfolio Website  — this site (React · TypeScript · Mantine)
   github.com/haydentinker/portfolio-website-v2`,

  contact: `Email:    haydentinker7@gmail.com
LinkedIn: linkedin.com/in/hayden-tinker
GitHub:   github.com/haydentinker

Or just scroll down and use the contact form!`,

  help: HELP_TEXT,
};

const BOOT_LINES = [
  "Initializing portfolio shell v2.0...",
  "Loading modules... done.",
  'Type "help" to see available commands.',
];

export function Terminal() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [booted, setBooted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme !== "light";

  useEffect(() => {
    if (!open || booted) return;
    setBooted(true);
    let delay = 0;
    BOOT_LINES.forEach((line) => {
      delay += 420;
      setTimeout(() => {
        setLines((prev) => [...prev, { type: "output", text: line }]);
      }, delay);
    });
  }, [open, booted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines, open]);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open, minimized]);

  function submit() {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setLines((prev) => [...prev, { type: "input", text: cmd }]);
    setHistory((h) => [cmd, ...h]);
    setHistoryIndex(-1);
    setInput("");

    if (cmd === "clear") {
      setTimeout(() => setLines([]), 50);
      return;
    }

    const response = COMMANDS[cmd];
    if (response) {
      setLines((prev) => [...prev, { type: "output", text: response }]);
    } else {
      setLines((prev) => [
        ...prev,
        { type: "error", text: `Command not found: ${cmd}. Type "help" for available commands.` },
      ]);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : history[next]);
    }
  }

  const bg = isDark ? "#0d1117" : "#1e1e1e";
  const border = isDark ? "#30363d" : "#444";
  const promptColor = "#22d3ee";
  const errorColor = "#f87171";
  const outputColor = isDark ? "#c9d1d9" : "#d4d4d4";

  return (
    <>
      <Tooltip label="Open terminal" position="left" withArrow>
        <ActionIcon
          size="xl"
          radius="xl"
          variant="gradient"
          gradient={{ from: "#339af0", to: "#22d3ee" }}
          style={{
            position: "fixed",
            bottom: "calc(60px + 1rem)",
            right: 16,
            zIndex: 1000,
            boxShadow: "0 4px 20px rgba(51,154,240,0.4)",
          }}
          onClick={() => {
            setOpen(true);
            setMinimized(false);
          }}
          aria-label="Open terminal"
        >
          <TerminalIcon size={20} />
        </ActionIcon>
      </Tooltip>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "calc(60px + 1rem)",
            right: 16,
            width: "min(560px, calc(100vw - 32px))",
            height: minimized ? 40 : "min(420px, calc(100vh - 160px))",
            background: bg,
            border: `1px solid ${border}`,
            borderRadius: 10,
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
            fontSize: 13,
            overflow: "hidden",
            boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
            transition: "height 0.2s ease",
          }}
          onClick={() => inputRef.current?.focus()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 12px",
              height: 40,
              borderBottom: minimized ? "none" : `1px solid ${border}`,
              background: isDark ? "#161b22" : "#2d2d2d",
              flexShrink: 0,
              userSelect: "none",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
            </div>
            <span style={{ color: "#8b949e", fontSize: 12 }}>visitor@hayden:~</span>
            <div style={{ display: "flex", gap: 4 }}>
              <ActionIcon
                size="xs"
                variant="subtle"
                color="gray"
                onClick={(e) => { e.stopPropagation(); setMinimized((m) => !m); }}
                aria-label={minimized ? "Restore" : "Minimize"}
              >
                <Minus size={12} />
              </ActionIcon>
              <ActionIcon
                size="xs"
                variant="subtle"
                color="gray"
                onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                aria-label="Close terminal"
              >
                <X size={12} />
              </ActionIcon>
            </div>
          </div>

          {!minimized && (
            <>
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "12px 16px",
                  color: outputColor,
                  lineHeight: 1.7,
                }}
              >
                {lines.map((line, i) => (
                  <div key={i} style={{ whiteSpace: "pre-wrap", marginBottom: 2 }}>
                    {line.type === "input" ? (
                      <span>
                        <span style={{ color: promptColor }}>visitor@hayden:~$ </span>
                        <span style={{ color: "#e6edf3" }}>{line.text}</span>
                      </span>
                    ) : line.type === "error" ? (
                      <span style={{ color: errorColor }}>{line.text}</span>
                    ) : (
                      <span style={{ color: outputColor }}>{line.text}</span>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 16px",
                  borderTop: `1px solid ${border}`,
                  flexShrink: 0,
                }}
              >
                <span style={{ color: promptColor, marginRight: 8, flexShrink: 0 }}>
                  visitor@hayden:~$
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#e6edf3",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    caretColor: promptColor,
                  }}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Terminal input"
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
