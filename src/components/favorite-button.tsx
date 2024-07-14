'use client'

import { Button } from './ui/button'
import { useFavorites } from '@/store/favorites'
import { Snippet } from '@/types/snippet'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export function FavoriteButton({ snippet }: { snippet: Snippet }) {
  const favorites = useFavorites((state) => state.favorites)
  const addFavorite = useFavorites((state) => state.addFavorite)
  const removeFavorite = useFavorites((state) => state.removeFavorite)

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const isFavorite = favorites.some((item) => item.id === snippet.id)
    setIsFavorite(isFavorite)
  }, [favorites, snippet.id])

  function handleAddFavorite() {
    addFavorite(snippet)
  }

  function handleRemoveFavorite() {
    removeFavorite(snippet)
  }

  return isFavorite ? (
    <Button
      aria-label="Remover dos favoritos"
      onClick={handleRemoveFavorite}
      size="icon"
      variant="ghost"
    >
      <FaHeart size={18} color="#ef4444" />
    </Button>
  ) : (
    <Button
      aria-label="Salvar como favorito"
      onClick={handleAddFavorite}
      size="icon"
      variant="ghost"
    >
      <FaRegHeart size={18} />
    </Button>
  )
}
