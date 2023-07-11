import nacl from "tweetnacl";
import base58 from "bs58";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { message, publicKey, signature } = req.body;

  if (method == "POST") {
    const verified = nacl.sign.detached.verify(
        new TextEncoder().encode(message),
        base58.decode(signature), 
        base58.decode(publicKey)
    );
    res.status(200).json(verified);
  } else {
    res.status(405).end(`Method Not Allowed`);
  }
}
