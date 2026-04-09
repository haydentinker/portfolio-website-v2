import type { VercelRequest, VercelResponse } from "@vercel/node";

const QUERY = `
  query {
    matchedUser(username: "haydentinker") {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const upstream = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({ query: QUERY }),
    });

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: "LeetCode request failed" });
    }

    const data = await upstream.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
