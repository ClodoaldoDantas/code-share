import prisma from '@/lib/prisma'

export async function getAllSnippets() {
  const snippets = prisma.snippet.findMany()
  return snippets
}
