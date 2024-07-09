import { FieldError } from 'react-hook-form'

export function ErrorMessage({ field }: { field: FieldError | undefined }) {
  if (!field) {
    return null
  }

  return <p className="text-red-600 text-xs">{field.message}</p>
}
