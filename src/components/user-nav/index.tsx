import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Bookmark, UserRound } from 'lucide-react'
import { SignOutButton } from '../sign-out-button'
import { UserAvatar } from './user-avatar'
import { UserInfo } from './user-info'

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <UserAvatar />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <UserInfo />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserRound className="mr-2 h-4 w-4" />
            <span>Meu Perfil</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Bookmark className="mr-2 h-4 w-4" />
            <span>Salvos</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
