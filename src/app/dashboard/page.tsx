import { Logo } from '@/components/logo'
import { UserNav } from './components/user-nav'

export default function Dashboard() {
  return (
    <>
      <header className="border-b py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Logo />
          <UserNav />
        </div>
      </header>
    </>
  )
}
