import { CreateSnippetModal } from '@/components/create-snippet-modal'
import { EmptyList } from '@/components/empty-list'
import { FavoriteButton } from '@/components/favorite-button'
import { OpenLinkButton } from '@/components/open-link-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { getAllSnippets } from '@/utils/get-all-snippets'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const snippets = await getAllSnippets()

  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <header className="flex items-center justify-end mb-5">
        <CreateSnippetModal />
      </header>

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
                <FavoriteButton snippet={snippet} />
                <OpenLinkButton url={snippet.link} />
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </main>
  )
}
