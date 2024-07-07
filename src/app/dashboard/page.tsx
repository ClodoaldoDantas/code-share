import { CreateSnippetModal } from '@/components/create-snippet-modal'
import { OpenLinkButton } from '@/components/open-link-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { Button } from '@/components/ui/button'
import { getAllSnippets } from '@/utils/get-all-snippets'
import { HeartIcon } from 'lucide-react'

export default async function DashboardPage() {
  throw new Error('Not implemented')

  const snippets = await getAllSnippets()

  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <header className="flex items-center justify-end mb-5">
        <CreateSnippetModal />
      </header>

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
                  aria-label="Salvar como favorito"
                  size="icon"
                  variant="ghost"
                >
                  <HeartIcon size={18} />
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
