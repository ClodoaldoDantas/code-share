import { CardHeader, CardTitle, CardDescription } from '../ui/card'

type SnippetCardHeadingProps = {
  title: string
  description: string | null
}

export function SnippetCardHeading({
  title,
  description,
}: SnippetCardHeadingProps) {
  return (
    <CardHeader className="min-h-[122px]">
      <CardTitle className="text-lg">{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
  )
}
