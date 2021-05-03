import { GetServerSideProps } from 'next'
import React from 'react'
import { IMovieLong } from '../../utils/types'
import Nominations from '../../components/Nominations'
import { fetchNominations } from '../../utils/utils'

const SharedNominations = ({
  nominations,
}: {
  nominations: IMovieLong[]
}): JSX.Element => {
  return nominations ? (
    <Nominations nominations={nominations} />
  ) : (
    <h2>Loading</h2>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const nominationIDs: string[] = context.query.nominations || []
  const nominations: IMovieLong[] = await fetchNominations(nominationIDs)
  return {
    props: {
      nominations: nominations ?? null,
    },
  }
}

export default SharedNominations
