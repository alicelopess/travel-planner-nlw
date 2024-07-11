import { Calendar, Clock, Tag, X } from 'lucide-react'
import { Button } from '../../../../components/buttons/Button'
import { Input } from '../../../../components/inputs/Input'
import { InputWrapper } from '../../../../components/inputs/InputWrapper'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
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

        <form className="space-y-3">
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
