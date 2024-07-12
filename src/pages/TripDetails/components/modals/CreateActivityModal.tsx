import { Calendar, Clock, Tag, X } from 'lucide-react'
import { Button } from '../../../../components/buttons/Button'
import { Input } from '../../../../components/inputs/Input'
import { InputWrapper } from '../../../../components/inputs/InputWrapper'

import { FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../../../lib/axios'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const date = data.get('occurs_at')?.toString()
    const time = data.get('time')?.toString()

    const occursAt = new Date(`${date}T${time}:00`).toISOString()

    // console.log(tripId)
    // console.log(title)
    // console.log(date)
    // console.log(time)
    // console.log(occursAt)

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at: occursAt,
    })
    console.log('oi')

    // closeCreateActivityModal() // Delete this and use the one below
    window.document.location.reload()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          {/* <form className="space-y-3"> */}
          <InputWrapper>
            <Tag className="text-zinc-400 size-5" />

            <Input type="text" name="title" placeholder="Qual a atividade?" />
          </InputWrapper>

          <div className="flex items-center gap-2">
            <InputWrapper>
              <Calendar className="text-zinc-400 size-5" />

              <Input
                type="date"
                name="occurs_at"
                placeholder="Data da atividade"
              />
            </InputWrapper>

            <InputWrapper size="fixed">
              <Clock className="text-zinc-400 size-5" />

              <Input type="time" name="time" placeholder="Horário" />
            </InputWrapper>
          </div>

          <Button size="full">Salvar atividade</Button>
        </form>
      </div>
    </div>
  )
}
