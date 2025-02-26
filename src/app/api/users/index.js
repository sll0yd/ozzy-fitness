import { getUsers, createUser } from '../../../controllers/userController';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await getUsers(req, res);
      break;
    case 'POST':
      await createUser(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}