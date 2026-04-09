import { useEffect, useState } from "react";
import { Group, Text, Skeleton, Anchor, Badge, Stack } from "@mantine/core";
import { BrandGithub, Star, Users, Clock, Calendar } from "tabler-icons-react";

interface Stats {
  repos: number;
  stars: number;
  followers: number;
  topLanguages: string[];
  yearsActive: string;
  lastActive: string;
}

function relativeTime(date: string): string {
  const days = Math.floor((Date.now() - new Date(date).getTime()) / 86_400_000);
  if (days === 0) return "active today";
  if (days === 1) return "active yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}yr ago`;
}

function StatItem({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string | number | null;
  label: string;
}) {
  return (
    <Group gap={6} align="center" wrap="nowrap">
      <Text c="dimmed" style={{ display: "flex", alignItems: "center" }}>
        {icon}
      </Text>
      {value === null ? (
        <Skeleton height={14} width={32} radius="sm" />
      ) : (
        <Text size="sm" fw={600}>
          {typeof value === "number" ? value.toLocaleString() : value}
        </Text>
      )}
      {label && <Text size="sm" c="dimmed">{label}</Text>}
    </Group>
  );
}

export function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/haydentinker"),
          fetch("https://api.github.com/users/haydentinker/repos?per_page=100"),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user = await userRes.json();
        const repos: { stargazers_count: number; language: string | null; pushed_at: string }[] = await reposRes.json();
        const stars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
        const langCount: Record<string, number> = {};
        for (const r of repos) {
          if (r.language) langCount[r.language] = (langCount[r.language] ?? 0) + 1;
        }
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);
        const mostRecent = repos.reduce((latest, r) =>
          r.pushed_at > latest ? r.pushed_at : latest, "");
        const yearsActive = `${new Date().getFullYear() - new Date(user.created_at).getFullYear()} yrs`;
        const lastActive = relativeTime(mostRecent);
        setStats({ repos: user.public_repos, stars, followers: user.followers, topLanguages, yearsActive, lastActive });
      } catch {
        // silently fail — stats are non-critical
      }
    }
    fetchStats();
  }, []);

  return (
    <Anchor
      href="https://github.com/haydentinker"
      target="_blank"
      rel="noreferrer"
      underline="never"
      style={{ color: "inherit" }}
    >
      <Stack gap="sm">
        <Group gap="xl" wrap="wrap">
          <StatItem
            icon={<BrandGithub size={14} />}
            value={stats?.repos ?? null}
            label="repos"
          />
          <StatItem
            icon={<Star size={14} />}
            value={stats?.stars ?? null}
            label="stars"
          />
          <StatItem
            icon={<Users size={14} />}
            value={stats?.followers ?? null}
            label="followers"
          />
          <StatItem
            icon={<Calendar size={14} />}
            value={stats?.yearsActive ?? null}
            label="on GitHub"
          />
          <StatItem
            icon={<Clock size={14} />}
            value={stats?.lastActive ?? null}
            label={stats && !stats.lastActive.endsWith("ago") ? "" : "last active"}
          />
        </Group>
        <Group gap="xs" wrap="wrap">
          {stats
            ? stats.topLanguages.map((lang) => (
                <Badge key={lang} size="sm" variant="light" color="blue">
                  {lang}
                </Badge>
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} height={20} width={64} radius="xl" />
              ))}
        </Group>
      </Stack>
    </Anchor>
  );
}
