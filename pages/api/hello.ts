// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  //obtiene as cookies desde el api
  console.log(req.cookies);

  res.status(200).json({
    name: 'John Doe',
    ...req.cookies  //se las manda al front
  })
}
