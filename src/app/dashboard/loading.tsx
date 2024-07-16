import { Skeleton } from '@/components/ui/skeleton'

export default function DashboardLoading() {
  return (
    <main className="max-w-5xl mx-auto px-4 my-5">
      <div className="grid gap-4 md:grid-cols-3">
        <Skeleton className="h-[188px] rounded-lg" />
        <Skeleton className="h-[188px] rounded-lg" />
        <Skeleton className="h-[188px] rounded-lg" />
      </div>
    </main>
  )
}
