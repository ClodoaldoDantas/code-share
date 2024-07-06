'use client'

import { LinkIcon } from 'lucide-react'
import { Button } from './ui/button'

export function OpenLinkButton({ url }: { url: string }) {
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
