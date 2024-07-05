import { ReactNode } from 'react'

export function SnippetCardActions({ children }: { children: ReactNode }) {
  return <div className="text-muted-foreground ml-auto">{children}</div>
}
