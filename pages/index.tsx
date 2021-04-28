import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const Home = (): JSX.Element => {
  const { data, error } = useSwr('/api/movies', fetcher)

  if (error) return <div>Failed to load movies</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/movie/[id]" as={`/movie/${user.id}`}>
            <a>{`Movie ${user.id}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Home
