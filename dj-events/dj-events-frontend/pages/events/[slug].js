import { useRouter, UseRouter } from 'next/router'

export default function EventPage() {
  const router = useRouter()
  console.log(router)
  return (
    <div>
        <h1>My Event</h1>
        <p>{router.query.slug}</p>
        <button onClick={() => router.push('/')}>Click</button>
    </div>
  )
}
