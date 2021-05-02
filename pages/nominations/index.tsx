import { useEffect, useState } from 'react'
import { KEY_ID, KEY_NOMINATIONS } from '../../utils/nominationController'

const Nominations = (): JSX.Element => {
  const [nominations, setNominations] = useState([])

  useEffect(() => {
    let parsedNominations
    const nominationsString = localStorage.getItem(KEY_NOMINATIONS)
    if (nominationsString && nominationsString.length > 0) {
      // nominations value not null and string not empty
      parsedNominations = JSON.parse(nominationsString)
      if (parsedNominations && parsedNominations[KEY_ID]) {
        // nominations value valid JSON, has KEY_ID property
        setNominations([...parsedNominations[KEY_ID]])
      }
    }
  }, [setNominations])

  const hasNominations = nominations && nominations.length > 0

  return (
    <div>
      <div>
        <h1>Nominations</h1>
      </div>
      <div>
        {hasNominations ? (
          nominations.map((imdbID, idx) => <p key={idx}>{imdbID}</p>)
        ) : (
          <h2>No Nominations</h2>
        )}
      </div>
    </div>
  )
}

export default Nominations
