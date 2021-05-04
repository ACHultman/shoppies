import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Nominations from '../../components/Nominations'
import { RootState } from '../../store/store'
import { IMovieLong } from '../../utils/types'
import { fetchNominations } from '../../utils/utils'

const NominationsWrapper = (): JSX.Element => {
  const nominationIDs: string[] = useSelector(
    (state: RootState) => state.nominations.nominations
  )
  const [nominations, setNominations] = useState([])

  useEffect(() => {
    const getNominations = async () => {
      const fetchedNominations: IMovieLong[] = await fetchNominations(
        nominationIDs
      )

      setNominations([...fetchedNominations])
    }
    getNominations()
  }, [nominationIDs])

  const hasNominations =
    nominationIDs && nominationIDs.length && nominationIDs.length > 0

  return (
    <div>
      <div>
        {hasNominations ? (
          <Nominations nominations={nominations} />
        ) : (
          <h2 className="text-4xl mb-10 ml-5">No Nominations</h2>
        )}
      </div>
    </div>
  )
}

export default NominationsWrapper
