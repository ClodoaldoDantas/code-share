import { ReactNode } from 'react'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { Search } from '@/components/search'
import { UserNav } from '@/components/user-nav'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <Search />
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>

      {children}
    </>
  )
}
