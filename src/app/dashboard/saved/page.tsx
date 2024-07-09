import { EmptyList } from '@/components/empty-list'
import { OpenLinkButton } from '@/components/open-link-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { Snippet } from '@/types/snippet'
import { XCircleIcon } from 'lucide-react'

export default function DashboardSavedPage() {
  const snippets = [] as Snippet[]

  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      {snippets.length === 0 && <EmptyList />}

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
                <Button
                  aria-label="Remover dos favoritos"
                  size="icon"
                  variant="ghost"
                >
                  <XCircleIcon size={18} />
                </Button>

                <OpenLinkButton url={snippet.link} />
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </main>
  )
}
