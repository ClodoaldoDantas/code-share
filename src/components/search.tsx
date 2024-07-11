'use client'

import { FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'

export function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const term = data.q

    if (!term) return

    router.push(`/dashboard/search?q=${term}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <Input
        name="q"
        type="text"
        defaultValue={query ?? ''}
        placeholder="Buscar snippets..."
        className="hidden md:block w-[300px]"
      />
    </form>
  )
}
