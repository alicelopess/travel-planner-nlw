import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './components/modals/InviteGuestsModal'
import { TripConfirmationModal } from './components/modals/TripConfirmationModal'
import { DestinationAndDateStep } from './components/steps/DestinationAndDateStep'
import { InviteGuestsStep } from './components/steps/InviteGuestsStep'
import { DateRange } from 'react-day-picker'

import { api } from '../../lib/axios'

export function Home() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])
  const [isTripConfirmationModalOpen, setIsTripConfirmationModalOpen] =
    useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [travelStartAndEndDates, setTravelStartAndEndDates] = useState<
    DateRange | undefined
  >()

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }
  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }
  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }
  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    )
    setEmailsToInvite(newEmailList)
  }
  function openTripConfirmationModal() {
    setIsTripConfirmationModalOpen(true)
  }
  function closeTripConfirmatioModal() {
    setIsTripConfirmationModalOpen(false)
  }
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(destination)
    console.log(emailsToInvite)
    console.log(travelStartAndEndDates)
    console.log(ownerName)
    console.log(ownerEmail)

    if (!destination) {
      return
    }

    if (!travelStartAndEndDates?.from || !travelStartAndEndDates?.to) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: travelStartAndEndDates.from,
      ends_at: travelStartAndEndDates.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { tripId } = response.data
    console.log(tripId)

    navigate(`/trip/${tripId}`)

    // navigate('/trip/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestsInput={closeGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            setTravelStartAndEndDates={setTravelStartAndEndDates}
            travelStartAndEndDates={travelStartAndEndDates}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              invites={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openTripConfirmationModal={openTripConfirmationModal}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addEmailToInvites={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          invites={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isTripConfirmationModalOpen && (
        <TripConfirmationModal
          closeTripConfirmatioModal={closeTripConfirmatioModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
          destination={destination}
          tripDateRange={travelStartAndEndDates}
        />
      )}
    </div>
  )
}
