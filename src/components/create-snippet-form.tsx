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

export function CreateSnippetForm() {
  return (
    <form>
      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="title">Título</Label>
        <Input id="title" type="text" />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="description">Descrição</Label>
        <Input id="description" type="text" />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="link">Tecnologia</Label>

        <Select>
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
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor="link">Link</Label>
        <Input id="link" type="text" />
      </div>

      <DialogFooter>
        <Button type="submit">Salvar</Button>
      </DialogFooter>
    </form>
  )
}
