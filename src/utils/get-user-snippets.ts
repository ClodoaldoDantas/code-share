import prisma from '@/lib/prisma'
import { getSessionUser } from './get-session-user'

export async function getUserSnippets() {
  const session = await getSessionUser()

  const snippets = prisma.snippet.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  return snippets
}
