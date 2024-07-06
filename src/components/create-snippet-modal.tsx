import { PlusCircleIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { CreateSnippetForm } from './create-snippet-form'

export function CreateSnippetModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2" variant="default">
          <PlusCircleIcon size={18} />
          <span>Adicionar snippet</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Adicionar Snippet</DialogTitle>
          <DialogDescription>
            Adicione um novo snippet para compartilhar com a comunidade.
          </DialogDescription>
        </DialogHeader>

        <CreateSnippetForm />
      </DialogContent>
    </Dialog>
  )
}
