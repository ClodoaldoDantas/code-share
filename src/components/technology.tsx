import { CircleIcon } from 'lucide-react'

export function Technology() {
  return (
    <div className="flex items-center">
      <CircleIcon className="mr-1 h-3 w-3 fill-blue-500 text-blue-500" />
      <span className="text-sm text-muted-foreground">React</span>
    </div>
  )
}
