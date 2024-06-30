import { TbMessage2Code } from 'react-icons/tb'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <TbMessage2Code size={24} />
      <strong className="font-semibold text-lg">CodeShare</strong>
    </div>
  )
}
