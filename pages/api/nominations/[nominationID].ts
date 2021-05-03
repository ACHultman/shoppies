import { NextApiRequest, NextApiResponse } from 'next'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { nominationID },
    method,
  } = req

  let request
  let result

  switch (method) {
    case 'GET':
      // Get data from your database
      request = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${nominationID}`
      )
      if (!request.ok) {
        res.send(500)
        break
      }
      try {
        result = await request.json()
      } catch (e) {
        res.send(500)
        break
      }
      res.status(200).json({ nomination: result })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default handler
