import { CircleIcon, ImageIcon, LinkIcon, StarIcon } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'

export function SnippetCard() {
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
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-blue-500 text-blue-500" />
            <span className="text-sm text-muted-foreground">React</span>
          </div>

          <div>
            <Button aria-label="Acessar link" size="icon" variant="ghost">
              <LinkIcon size={18} />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              aria-label="Ver preview do código"
            >
              <ImageIcon size={18} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
