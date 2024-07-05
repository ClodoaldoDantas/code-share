import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { LinkIcon, XCircleIcon, XIcon } from 'lucide-react'

export default function DashboardSavedPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <SnippetCard.Root key={index}>
            <SnippetCard.Heading
              title="useClipboard"
              description="A hook to copy text to the clipboard"
            />

            <SnippetCard.Content>
              <Technology />

              <SnippetCard.Actions>
                <Button
                  aria-label="Salvar como favorito"
                  size="icon"
                  variant="ghost"
                >
                  <XCircleIcon size={18} />
                </Button>

                <Button aria-label="Acessar link" size="icon" variant="ghost">
                  <LinkIcon size={18} />
                </Button>
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </main>
  )
}
