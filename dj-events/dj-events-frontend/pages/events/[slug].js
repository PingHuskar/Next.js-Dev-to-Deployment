import Layout from "@/components/Layout"
import { useRouter } from 'next/router'
import { API_URL } from "../../config/index"

export default function EventPage({evt}) {
  const router = useRouter()
  // console.log(router)
  // console.log(evt)
  return (
    <Layout>
        <h1>{evt.name}</h1>
        {/* <p>{router.query.slug}</p> */}
        {/* <button onClick={() => router.push('/')}>Click</button> */}
    </Layout>
  )
}

// export async function getServerSideProps({query: {slug}}) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json()
//   return {
//     props: {
//       evt: events[0],
//     }
//   }
// }

export async function getStaticPaths() {
   const res = await fetch(`${API_URL}/api/events`)
   const events = await res.json()
   const paths = events.map(evt => ({
    params: {slug: evt.slug}
   }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json()
  return {
    props: {
      evt: events[0],
    },
    revalidate: 1

  }
}