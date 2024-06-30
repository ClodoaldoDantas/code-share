'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'

export function SignInButton() {
  function handleSignIn() {
    signIn('github', { callbackUrl: '/dashboard' })
  }

  return (
    <Button onClick={handleSignIn} className="mt-5">
      <FaGithub size={20} className="mr-2" />
      Fazer login com GitHub
    </Button>
  )
}
