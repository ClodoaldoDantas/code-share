import prisma from '@/lib/prisma'
import { Snippet } from '@/types/snippet'

export async function getAllSnippets(): Promise<Snippet[]> {
  const snippets = prisma.snippet.findMany()
  return snippets
}
