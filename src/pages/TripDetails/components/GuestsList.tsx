import { CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../../components/Button'

export function GuestsList() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Alice</span>
            <span className="block text-sm text-zinc-400 truncate ">
              alice@aliceamapepe.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Pepê</span>
            <span className="block text-sm text-zinc-400 truncate ">
              pepe@pepeamaalice.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
