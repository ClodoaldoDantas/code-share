import { RemoveSnippetButton } from '@/components/remove-snippet-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { getUserSnippets } from '@/utils/get-user-snippets'

export default async function ProfilePage() {
  const snippets = await getUserSnippets()

  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <div className="grid grid-cols-3 gap-4">
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
