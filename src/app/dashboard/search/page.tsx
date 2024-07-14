import { EmptyList } from '@/components/empty-list'
import { FavoriteButton } from '@/components/favorite-button'
import { OpenLinkButton } from '@/components/open-link-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { searchSnippets } from '@/utils/search-snippets'
import { redirect } from 'next/navigation'

export default async function DashboardSearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/dashboard')
  }

  const snippets = await searchSnippets(query)

  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      {snippets.length > 0 ? (
        <p className="text-base mb-4">
          Resultados para: <span className="font-semibold">{query}</span>
        </p>
      ) : (
        <EmptyList description="Digite outro termo e tente novamente." />
      )}

      <div className="grid grid-cols-3 gap-4">
        {snippets.map((snippet: any) => (
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
