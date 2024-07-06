'use client'

import { technologies } from '@/utils/technologies'
import { Button } from './ui/button'
import { DialogFooter } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import { useToast } from './ui/use-toast'

const createSnippetSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  technology: z.string().min(1, 'Tecnologia é obrigatória'),
  link: z.string().min(1, 'Link é obrigatório'),
})

type CreateSnippetData = z.infer<typeof createSnippetSchema>

export function CreateSnippetForm() {
  const { toast } = useToast()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateSnippetData>({
    resolver: zodResolver(createSnippetSchema),
    values: {
      title: '',
      description: '',
      technology: '',
      link: '',
    },
  })

  async function handleCreateSnippet(data: CreateSnippetData) {
    try {
      await fetch('/api/snippets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      toast({ title: 'Snippet criado com sucesso' })
      reset()
    } catch (err) {
      toast({ title: 'Erro ao criar snippet', variant: 'destructive' })
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateSnippet)}>
      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="title">Título</Label>
        <Input id="title" type="text" {...register('title')} />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="description">Descrição</Label>
        <Input id="description" type="text" {...register('description')} />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="link">Tecnologia</Label>

        <Controller
          name="technology"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select value={value} onValueChange={(value) => onChange(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleciona uma linguagem" />
              </SelectTrigger>
              <SelectContent>
                {technologies.map((tech) => (
                  <SelectItem key={tech.value} value={tech.value}>
                    {tech.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="link">Link</Label>
        <Input id="link" type="text" {...register('link')} />
      </div>

      <DialogFooter>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          )}
          <span>{isSubmitting ? 'Salvando...' : 'Salvar'}</span>
        </Button>
      </DialogFooter>
    </form>
  )
}
