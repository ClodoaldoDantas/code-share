import { PenIcon, TrashIcon } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Technology } from '@/components/technology'

export function EditableSnippetCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">useOnline</CardTitle>
        <CardDescription>
          A custom React hook to check if the user is online or offline
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center">
          <Technology />

          <div className="text-muted-foreground">
            <Button aria-label="Editar snippet" size="icon" variant="ghost">
              <PenIcon size={18} />
            </Button>

            <Button aria-label="Remover snippet" size="icon" variant="ghost">
              <TrashIcon size={18} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
