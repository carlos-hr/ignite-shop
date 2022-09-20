import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../lib/stripe';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { priceIds } = req.body;

  if (!priceIds) {
    return res.status(400).json({ error: 'Price not found.' });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    cancel_url: `${process.env.NEXT_URL}/`,
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    mode: 'payment',
    line_items: priceIds,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
