import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { ids } = req.body;

  if (!ids) {
    return res.status(400).json({ error: 'You must send an array of ids.' });
  }

  const response = await stripe.products.list({
    ids,
  });

  const cartItems = response.data;
  return res.status(200).json({
    cartItems,
  });
}
