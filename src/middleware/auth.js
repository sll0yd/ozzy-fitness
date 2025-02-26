import { getToken } from 'next-auth/jwt';

export const authMiddleware = async (req, res, next) => {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  req.user = token;
  next();
};