import { Link2, Tag, X } from 'lucide-react'
import { Button } from '../../../../components/buttons/Button'
import { Input } from '../../../../components/inputs/Input'
import { InputWrapper } from '../../../../components/inputs/InputWrapper'
import { useParams } from 'react-router-dom'
import { FormEvent } from 'react'
import { api } from '../../../../lib/axios'

interface CreateImportantLinkModalProps {
  closeCreateImportantLinkModal: () => void
}

export function CreateImportantLinkModal({
  closeCreateImportantLinkModal,
}: CreateImportantLinkModalProps) {
  const { tripId } = useParams()

  async function createImportantLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    // // console.log(title)
    // // console.log(url)

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
    })

    // // closeCreateImportantLinkModal() // Delete this and use the one below
    window.document.location.reload()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button type="button" onClick={closeCreateImportantLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>

        <form onSubmit={createImportantLink} className="space-y-3">
          <InputWrapper>
            <Tag className="text-zinc-400 size-5" />
            <Input type="text" name="title" placeholder="Título do link" />
          </InputWrapper>
          <InputWrapper>
            <Link2 className="text-zinc-400 size-5" />
            <Input type="text" name="url" placeholder="URL" />
          </InputWrapper>

          <Button size="full">Salvar link</Button>
        </form>
      </div>
    </div>
  )
}
