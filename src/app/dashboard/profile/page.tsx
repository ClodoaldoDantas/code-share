import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { getUserSnippets } from '@/utils/get-user-snippets'
import { PenIcon, TrashIcon } from 'lucide-react'

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
                <Button aria-label="Editar snippet" size="icon" variant="ghost">
                  <PenIcon size={18} />
                </Button>

                <Button
                  aria-label="Remover snippet"
                  size="icon"
                  variant="ghost"
                >
                  <TrashIcon size={18} />
                </Button>
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </main>
  )
}
