import { ReactNode } from 'react'
import { CardContent } from '../ui/card'

export function SnippetCardContent({ children }: { children: ReactNode }) {
  return (
    <CardContent>
      <div className="flex items-center">{children}</div>
    </CardContent>
  )
}
