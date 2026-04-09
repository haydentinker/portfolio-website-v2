import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { ServerResponse } from 'node:http'

const LEETCODE_QUERY = `
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
`

function sendJson(res: ServerResponse, status: number, body: unknown) {
  const payload = JSON.stringify(body)
  res.writeHead(status, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) })
  res.end(payload)
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-leetcode-dev',
      configureServer(server) {
        server.middlewares.use('/api/leetcode', async (_req, res) => {
          try {
            const upstream = await fetch('https://leetcode.com/graphql', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Referer': 'https://leetcode.com' },
              body: JSON.stringify({ query: LEETCODE_QUERY }),
            })
            const data = await upstream.json()
            sendJson(res, 200, data)
          } catch {
            sendJson(res, 500, { error: 'Failed to fetch LeetCode stats' })
          }
        })
      },
    },
  ],
})
