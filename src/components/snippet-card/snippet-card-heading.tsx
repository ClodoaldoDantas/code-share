import { CardHeader, CardTitle, CardDescription } from '../ui/card'

type SnippetCardHeadingProps = {
  title: string
  description: string
}

export function SnippetCardHeading({
  title,
  description,
}: SnippetCardHeadingProps) {
  return (
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  )
}
