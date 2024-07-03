import { SnippetCard } from '../components/snippet-card'

export default function DashboardSavedPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <div className="grid grid-cols-3 gap-4">
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
      </div>
    </main>
  )
}
