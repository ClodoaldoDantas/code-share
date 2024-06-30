import { TbWorldCode } from 'react-icons/tb'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <TbWorldCode size={24} />
      <strong className="font-semibold text-lg">CodeShare</strong>
    </div>
  )
}
