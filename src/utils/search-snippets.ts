import prisma from '@/lib/prisma'
import { Snippet } from '@/types/snippet'

export async function searchSnippets(query: string): Promise<Snippet[]> {
  const snippets = prisma.snippet.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          technology: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ],
    },
  })

  return snippets
}
