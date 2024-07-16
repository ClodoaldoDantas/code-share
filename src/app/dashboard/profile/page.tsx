import { RemoveSnippetButton } from '@/components/remove-snippet-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { getUserSnippets } from '@/utils/get-user-snippets'
import { EmptyList } from '@/components/empty-list'

export default async function ProfilePage() {
  const snippets = await getUserSnippets()

  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      {snippets.length === 0 && <EmptyList />}

      <div className="grid gap-4 md:grid-cols-3">
        {snippets.map((snippet) => (
          <SnippetCard.Root key={snippet.id}>
            <SnippetCard.Heading
              title={snippet.title}
              description={snippet.description}
            />

            <SnippetCard.Content>
              <Technology value={snippet.technology} />

              <SnippetCard.Actions>
                <RemoveSnippetButton snippetId={snippet.id} />
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </main>
  )
}
