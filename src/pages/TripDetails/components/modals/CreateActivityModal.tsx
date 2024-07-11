import { Calendar, Clock, Tag, X } from 'lucide-react'

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
            {/* <span className=" font-semibold text-zinc-100">
                  Florianópolis, Brasil
                </span>{' '}
                nas datas de{' '}
                <span className=" font-semibold text-zinc-100">
                  16 a 27 de Agosto de 2024
                </span>{' '}
                preencha seus dados abaixo: */}
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              className="bg-transparent placeholder-zinc-400 text-lg w-40 outline-none flex-1"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="date"
                name="occurs_at"
                className="bg-transparent placeholder-zinc-400 text-lg w-40 outline-none flex-1 "
                placeholder="Data da atividade"
              />
            </div>
            <div className="h-14 w-36 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Clock className="text-zinc-400 size-5" />
              <input
                type="time"
                name="time"
                className="bg-transparent placeholder-zinc-400 text-lg w-40 outline-none flex-1 "
                placeholder="Horário"
              />
            </div>
          </div>
          {/* <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className="" />
                <input
                  type="email"
                  name="email"
                  className="bg-transparent placeholder-zinc-400 text-lg w-40 outline-none flex-1"
                  placeholder=""
                />
              </div> */}

          <button
            type="submit"
            className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Salvar atividade
            {/* <Plus className="size-5" /> */}
          </button>
        </form>
      </div>
    </div>
  )
}
