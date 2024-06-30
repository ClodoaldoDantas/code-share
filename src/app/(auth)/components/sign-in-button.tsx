import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'

export function SignInButton() {
  return (
    <Button className="mt-5">
      <FaGithub size={20} className="mr-2" />
      Fazer login com GitHub
    </Button>
  )
}
