import { TbWorldCode } from 'react-icons/tb'
import { SignInButton } from '@/components/sign-in-button'

export default function SignIn() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col text-center">
        <div className="self-center mb-4">
          <TbWorldCode size={48} />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight">
          Entre na sua conta
        </h1>

        <p className="text-base text-muted-foreground">
          Acesse a plataforma para continuar
        </p>

        <SignInButton />
      </div>
    </main>
  )
}
