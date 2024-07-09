import prisma from '@/lib/prisma'
import { getSessionUser } from './get-session-user'
import { Snippet } from '@/types/snippet'

export async function getUserSnippets(): Promise<Snippet[]> {
  const session = await getSessionUser()

  const snippets = prisma.snippet.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  return snippets
}
