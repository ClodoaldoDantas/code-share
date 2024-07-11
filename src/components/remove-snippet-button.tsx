'use client'

import { TrashIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'

export function RemoveSnippetButton({ snippetId }: { snippetId: string }) {
  const { toast } = useToast()
  const router = useRouter()

  async function handleDeleteSnippet() {
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
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button aria-label="Remover snippet" size="icon" variant="ghost">
          <TrashIcon size={18} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente os
            dados de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>

          <AlertDialogAction onClick={handleDeleteSnippet}>
            Remover
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
