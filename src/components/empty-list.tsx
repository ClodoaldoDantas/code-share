import { SearchIcon } from 'lucide-react'
import { Alert, AlertTitle, AlertDescription } from './ui/alert'

type EmptyListProps = {
  title?: string
  description?: string
}

export function EmptyList(props: EmptyListProps) {
  const title = props.title ?? 'Nenhum resultado encontrado.'
  const description =
    props.description ?? 'Você ainda não adicionou nenhum snippet.'

  return (
    <Alert>
      <SearchIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
