'use client'

import { BookmarkIcon, CodeIcon } from 'lucide-react'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { useRouter } from 'next/navigation'

export function UserLinks() {
  const router = useRouter()

  const handleNavigate = (path: string) => {
    router.push(path)
  }

  return (
    <>
      <DropdownMenuItem onClick={() => handleNavigate('/dashboard/profile')}>
        <CodeIcon className="mr-2 h-4 w-4" />
        <span>Meus Snippets</span>
      </DropdownMenuItem>

      <DropdownMenuItem onClick={() => handleNavigate('/dashboard/saved')}>
        <BookmarkIcon className="mr-2 h-4 w-4" />
        <span>Salvos</span>
      </DropdownMenuItem>
    </>
  )
}
