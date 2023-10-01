import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ redirect, cookies }) => {
  const sessionId = cookies.get('gameSession').value
}
