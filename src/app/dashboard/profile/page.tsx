import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { PenIcon, TrashIcon } from 'lucide-react'

export default function ProfilePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <SnippetCard.Root key={index}>
            <SnippetCard.Heading
              title="useModal"
              description="A hook to manage modals in React"
            />

            <SnippetCard.Content>
              <Technology />

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
