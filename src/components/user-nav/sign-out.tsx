'use client'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOut() {
  function handleSignOut() {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Sair da conta</span>
    </DropdownMenuItem>
  )
}
