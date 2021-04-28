import { NextApiRequest, NextApiResponse } from 'next'

// Fake movies data
const movies = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  // Get data from your database
  res.status(200).json(movies)
}
