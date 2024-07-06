'use client'

import { LinkIcon } from 'lucide-react'
import { Button } from './ui/button'

export function OpenLinkButton() {
  const url =
    'https://gist.github.com/ClodoaldoDantas/a450ecea4b158a74b0e07c02a9b26eb6'

  function handleOpenLink() {
    window.open(url, '_blank')
  }

  return (
    <Button
      aria-label="Acessar link"
      onClick={handleOpenLink}
      size="icon"
      variant="ghost"
    >
      <LinkIcon size={18} />
    </Button>
  )
}
