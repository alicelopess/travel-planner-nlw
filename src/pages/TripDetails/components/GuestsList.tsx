import { CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../../components/buttons/Button'

// interface Participant {
//   id: string
//   name: string | null
//   email: string
//   is_confirmed: boolean
// }

export function GuestsList() {
  // const { tripId } = useParams()
  // const [participants, setParticipants] = useState<Participant[]>([])

  // useEffect(() => {
  //   api.get(`/trips/${tripId}/participants`).then((response) => setTrip(response.data.participants))
  // }, [tripId])

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

        {/* {participants.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5 flex-1">
              <span className="block font-medium text-zinc-100">
                {participant.name ?? `Convidado ${index}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate ">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CheckCircle2 className="text-green-400 size-5 shrink-0" />
            ) : (
              <CircleDashed className="text-zinc-400 size-5 shrink-0" />
            )}
          </div>
        ))} */}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
