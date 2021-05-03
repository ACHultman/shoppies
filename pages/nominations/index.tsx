import React, { useEffect, useState } from 'react'
import { KEY_ID, KEY_NOMINATIONS } from '../../utils/nominationController'
import Nominations from '../../components/Nominations'
import { fetchNominations } from '../../utils/utils'

const NominationsWrapper = (): JSX.Element => {
  const [nominations, setNominations] = useState(null)

  useEffect(() => {
    const getNominations = async () => {
      let parsedNominations
      const nominationsString = localStorage.getItem(KEY_NOMINATIONS)
      if (nominationsString && nominationsString.length > 0) {
        // nominations value not null and string not empty
        parsedNominations = JSON.parse(nominationsString)
        if (parsedNominations && parsedNominations[KEY_ID]) {
          // nominations value valid JSON, has KEY_ID property
          const fetchedNominations = await fetchNominations(
            parsedNominations[KEY_ID]
          )

          setNominations([...fetchedNominations])
        }
      }
    }

    getNominations()
  }, [setNominations])

  const hasNominations =
    nominations && nominations.length && nominations.length > 0

  if (!hasNominations) return <></>

  return (
    <div>
      <div>
        {hasNominations ? (
          <Nominations nominations={nominations} />
        ) : (
          <h2>No Nominations</h2>
        )}
      </div>
    </div>
  )
}

export default NominationsWrapper
