'use client'

import { DropdownMenuItem } from './ui/dropdown-menu'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  function handleSignOut() {
    signOut({
      callbackUrl: '/',
    })
  }

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Sair da conta</span>
    </DropdownMenuItem>
  )
}
