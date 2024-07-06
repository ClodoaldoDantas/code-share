import { OpenLinkButton } from '@/components/open-link-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { XCircleIcon } from 'lucide-react'

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
                  aria-label="Remover dos favoritos"
                  size="icon"
                  variant="ghost"
                >
                  <XCircleIcon size={18} />
                </Button>

                <OpenLinkButton />
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </main>
  )
}
