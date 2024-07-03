import { EditableSnippetCard } from '../components/editable-snippet-card'

export default function ProfilePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <div className="grid grid-cols-3 gap-4">
        <EditableSnippetCard />
        <EditableSnippetCard />
        <EditableSnippetCard />
      </div>
    </main>
  )
}
