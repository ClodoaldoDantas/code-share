'use client'

import { TrashIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

export function RemoveSnippetButton({ snippetId }: { snippetId: string }) {
  const { toast } = useToast()
  const router = useRouter()

  async function handleDeleteSnippet() {
    const confirm = window.confirm(
      'Tem certeza que deseja remover este snippet?'
    )

    if (!confirm) return

    try {
      await fetch(`/api/snippets/${snippetId}`, { method: 'DELETE' })
      toast({ title: 'Snippet removido com sucesso' })

      router.refresh()
    } catch (err) {
      console.error(err)

      toast({
        title: 'Não foi possível remover o snippet',
        variant: 'destructive',
      })
    }
  }

  return (
    <Button
      onClick={handleDeleteSnippet}
      aria-label="Remover snippet"
      size="icon"
      variant="ghost"
    >
      <TrashIcon size={18} />
    </Button>
  )
}
