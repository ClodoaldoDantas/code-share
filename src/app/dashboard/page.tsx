import { CreateSnippetModal } from '@/components/create-snippet-modal'
import { OpenLinkButton } from '@/components/open-link-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { HeartIcon } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <header className="flex items-center justify-end mb-5">
        <CreateSnippetModal />
      </header>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <SnippetCard.Root key={index}>
            <SnippetCard.Heading
              title="useOnline"
              description="A hook to check if the user is online"
            />

            <SnippetCard.Content>
              <Technology />

              <SnippetCard.Actions>
                <Button
                  aria-label="Salvar como favorito"
                  size="icon"
                  variant="ghost"
                >
                  <HeartIcon size={18} />
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
