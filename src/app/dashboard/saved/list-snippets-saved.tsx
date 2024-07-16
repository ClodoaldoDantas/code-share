'use client'

import { EmptyList } from '@/components/empty-list'
import { OpenLinkButton } from '@/components/open-link-button'
import { RemoveFavoriteButton } from '@/components/remove-favorite-button'
import { SnippetCard } from '@/components/snippet-card'
import { Technology } from '@/components/technology'
import { useFavorites } from '@/store/favorites'

export function ListSnippetsSaved() {
  const { favorites } = useFavorites()

  return (
    <>
      {favorites.length === 0 && <EmptyList />}

      <div className="grid gap-4 md:grid-cols-3">
        {favorites.map((snippet) => (
          <SnippetCard.Root key={snippet.id}>
            <SnippetCard.Heading
              title={snippet.title}
              description={snippet.description}
            />

            <SnippetCard.Content>
              <Technology value={snippet.technology} />

              <SnippetCard.Actions>
                <RemoveFavoriteButton snippet={snippet} />
                <OpenLinkButton url={snippet.link} />
              </SnippetCard.Actions>
            </SnippetCard.Content>
          </SnippetCard.Root>
        ))}
      </div>
    </>
  )
}
