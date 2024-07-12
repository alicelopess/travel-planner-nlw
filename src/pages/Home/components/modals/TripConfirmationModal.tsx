import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../../../components/buttons/Button'
import { InputWrapper } from '../../../../components/inputs/InputWrapper'
import { Input } from '../../../../components/inputs/Input'
import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

interface TripConfirmationModalProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  closeTripConfirmatioModal: () => void
  setOwnerEmail: (email: string) => void
  setOwnerName: (name: string) => void
  destination: string
  tripDateRange: DateRange | undefined
}

export function TripConfirmationModal({
  createTrip,
  closeTripConfirmatioModal,
  setOwnerEmail,
  setOwnerName,
  destination,
  tripDateRange,
}: TripConfirmationModalProps) {
  const displayedDate =
    tripDateRange && tripDateRange.from && tripDateRange.to
      ? format(tripDateRange.from, 'd')
          .concat(' a ')
          .concat(format(tripDateRange.to, "d' de 'LLLL' de 'yyyy"))
      : null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={closeTripConfirmatioModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{' '}
            <span className=" font-semibold text-zinc-100">
              {/* Florianópolis, Brasil */}
              {destination}
            </span>{' '}
            nas datas de{' '}
            <span className=" font-semibold text-zinc-100">
              {/* 16 a 27 de Agosto de 2024 */}
              {displayedDate}
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <InputWrapper>
            <User className="text-zinc-400 size-5" />
            <Input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </InputWrapper>

          <InputWrapper>
            <Mail className="text-zinc-400 size-5" />
            <Input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              onChange={(event) => setOwnerEmail(event.target.value)}
            />
          </InputWrapper>
          <Button size="full">Confirmar criação da viagem</Button>
        </form>
      </div>
    </div>
  )
}
