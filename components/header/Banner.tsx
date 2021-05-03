import { useSelector } from 'react-redux'

const Banner = (): JSX.Element => {
  const nominations = useSelector((state) => state.nominations.nominations)
  if (!nominations || nominations.length < 5) {
    return <></>
  }
  return (
    <div className="text-center">
      <p className="mb-4 stroke-2">Nomination Limit Reached</p>
      <button className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
        Review Nominations
      </button>
    </div>
  )
}

export default Banner
