import { Snippet } from '@/types/snippet'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  favorites: Snippet[]
  addFavorite: (snippet: Snippet) => void
  removeFavorite: (snippet: Snippet) => void
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (snippet: Snippet) =>
        set((state) => ({
          favorites: [...state.favorites, snippet],
        })),
      removeFavorite: (snippet: Snippet) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== snippet.id),
        })),
    }),
    {
      name: 'favorites',
    }
  )
)
