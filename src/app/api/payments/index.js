import { getPayments, createPayment } from '../../../controllers/paymentController';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await getPayments(req, res);
      break;
    case 'POST':
      await createPayment(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}