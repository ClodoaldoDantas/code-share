import { Logo } from '@/components/logo'
import { UserNav } from './components/user-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { Search } from './components/search'

export default function Dashboard() {
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
    </>
  )
}
