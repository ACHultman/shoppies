import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Banner = (): JSX.Element => {
  const nominations = useSelector((state) => state.nominations.nominations)
  const router = useRouter()
  if (!nominations || nominations.length < 5) {
    return <></>
  }
  return (
    <div className="text-center">
      <p className="mb-4 stroke-2">Nomination Limit Reached</p>
      {router.route !== '/nominations' && (
        <button
          onClick={() => router.push('/nominations')}
          className="transition duration-500 ease-in-out hover:bg-purple-300 transform hover:-translate-y-1 hover:scale-110 bg-white text-gray-800 focus:outline-none font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
        >
          Review Nominations
        </button>
      )}
    </div>
  )
}

export default Banner
