// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import albums from '../data.json' 

export default function handler(req, res) {
  const { method } = req;
  const {status } = res;
  if(method === "GET") {
    try {
      status(200).json(albums)
    } catch (error) {
      status(500).json(error)
    }
  }
}
