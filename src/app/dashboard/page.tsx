import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { HeartIcon, LinkIcon } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
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
