'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircleIcon } from 'lucide-react'

export default function Error() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <Alert variant="destructive">
        <AlertCircleIcon className="h-4 w-4" />
        <AlertTitle>Ocorreu um problema</AlertTitle>
        <AlertDescription>
          Não foi possível os dados. Tente novamente mais tarde.
        </AlertDescription>
      </Alert>
    </main>
  )
}
