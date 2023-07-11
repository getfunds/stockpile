import { NextApiRequest, NextApiResponse } from "next";

const crypto = require("crypto");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const hash = crypto.randomBytes(16).toString("hex");

  res.status(200).json(hash);
}
