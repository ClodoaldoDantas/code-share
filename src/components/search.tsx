import { Input } from '@/components/ui/input'

export function Search() {
  return (
    <div>
      <Input
        type="text"
        placeholder="Buscar snippets..."
        className="hidden md:block w-[300px]"
      />
    </div>
  )
}
