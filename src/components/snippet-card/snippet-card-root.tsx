import { ReactNode } from 'react'
import { Card } from '../ui/card'

export function SnippetCardRoot({ children }: { children: ReactNode }) {
  return <Card>{children}</Card>
}
