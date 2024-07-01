'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'

export function UserAvatar() {
  const { data: session } = useSession()

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={session?.user?.image ?? ''}
        alt={session?.user?.name ?? ''}
      />
      <AvatarFallback>CD</AvatarFallback>
    </Avatar>
  )
}
