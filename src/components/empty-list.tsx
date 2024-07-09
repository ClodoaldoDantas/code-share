import { SearchIcon } from 'lucide-react'
import { Alert, AlertTitle, AlertDescription } from './ui/alert'

export function EmptyList() {
  return (
    <Alert>
      <SearchIcon className="h-4 w-4" />
      <AlertTitle>Nenhum resultado encontrado.</AlertTitle>
      <AlertDescription>
        Você ainda não adicionou nenhum snippet.
      </AlertDescription>
    </Alert>
  )
}
