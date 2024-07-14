'use client'

import { XCircleIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useFavorites } from '@/store/favorites'
import { Snippet } from '@/types/snippet'

export function RemoveFavoriteButton({ snippet }: { snippet: Snippet }) {
  const { removeFavorite } = useFavorites()

  function handleRemoveFavorite() {
    removeFavorite(snippet)
  }

  return (
    <Button
      onClick={handleRemoveFavorite}
      aria-label="Remover dos favoritos"
      size="icon"
      variant="ghost"
    >
      <XCircleIcon size={18} />
    </Button>
  )
}
