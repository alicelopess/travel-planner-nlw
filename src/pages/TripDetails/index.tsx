import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateActivityModal } from './components/modals/CreateActivityModal'
import { ImportantLinks } from './components/ImportantLinks'
import { GuestsList } from './components/GuestsList'
import { ActivityList } from './components/ActivityList'
import { TripDetailsHeader } from './components/TripDetailsHeader'
import { CreateImportantLinkModal } from './components/modals/CreateImportantLinkModal'
import { Button } from '../../components/buttons/Button'

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)
  const [isCreateImportantLinkModalOpen, setIsCreateImportantLinkModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  function openCreateImportantLinkModal() {
    setIsCreateImportantLinkModalOpen(true)
  }
  function closeCreateImportantLinkModal() {
    setIsCreateImportantLinkModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <TripDetailsHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={openCreateActivityModal}>
              <Plus className="size-5" />
              Cadastrar Atividade
            </Button>
          </div>

          <ActivityList />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks handleOpenModal={openCreateImportantLinkModal} />

          <div className="w-full h-px bg-zinc-800" />

          <GuestsList />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {isCreateImportantLinkModalOpen && (
        <CreateImportantLinkModal
          closeCreateImportantLinkModal={closeCreateImportantLinkModal}
        />
      )}
    </div>
  )
}
