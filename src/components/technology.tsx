import { technologies } from '@/data/technologies'
import { SquareTerminalIcon } from 'lucide-react'

export function Technology({ value }: { value: string }) {
  const item = technologies.find((item) => item.value === value)

  return (
    <div className="flex items-center">
      <SquareTerminalIcon size={18} className="mr-2 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">{item?.label}</span>
    </div>
  )
}
