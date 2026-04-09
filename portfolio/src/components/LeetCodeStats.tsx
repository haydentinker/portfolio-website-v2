import { useEffect, useState } from "react";
import { Group, Text, Skeleton, Anchor, RingProgress } from "@mantine/core";

interface DifficultyCount {
  difficulty: string;
  count: number;
}

interface Stats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

export function LeetCodeStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/leetcode");
        if (!res.ok) {
          setFailed(true);
          return;
        }
        const json = await res.json();
        const counts: DifficultyCount[] =
          json.data.matchedUser.submitStats.acSubmissionNum;
        const get = (d: string) =>
          counts.find((c) => c.difficulty === d)?.count ?? 0;
        setStats({
          total: get("All"),
          easy: get("Easy"),
          medium: get("Medium"),
          hard: get("Hard"),
        });
      } catch (e) {
        console.log("Failed to fetch LeetCode stats:", e);
        setFailed(true);
      }
    }
    fetchStats();
  }, []);

  if (failed) return null;

  return (
    <Anchor
      href="https://leetcode.com/u/haydentinker"
      target="_blank"
      rel="noreferrer"
      underline="never"
      style={{ color: "inherit" }}
    >
      <Group gap="lg" align="center" wrap="nowrap">
        {stats ? (
          <RingProgress
            size={64}
            thickness={5}
            roundCaps
            sections={[
              { value: (stats.easy / stats.total) * 100, color: "teal" },
              { value: (stats.medium / stats.total) * 100, color: "yellow" },
              { value: (stats.hard / stats.total) * 100, color: "red" },
            ]}
            label={
              <Text ta="center" size="xs" fw={700} lh={1}>
                {stats.total}
              </Text>
            }
          />
        ) : (
          <Skeleton circle height={64} />
        )}

        <Group gap="xl" wrap="wrap">
          <DiffStat label="Easy" value={stats?.easy ?? null} color="teal" />
          <DiffStat label="Medium" value={stats?.medium ?? null} color="yellow" />
          <DiffStat label="Hard" value={stats?.hard ?? null} color="red" />
        </Group>
      </Group>
    </Anchor>
  );
}

function DiffStat({
  label,
  value,
  color,
}: {
  label: string;
  value: number | null;
  color: string;
}) {
  return (
    <Group gap={6} align="center" wrap="nowrap">
      <Text size="sm" c={color} fw={600}>
        {value === null ? (
          <Skeleton height={14} width={24} radius="sm" />
        ) : (
          value
        )}
      </Text>
      <Text size="sm" c="dimmed">
        {label}
      </Text>
    </Group>
  );
}
