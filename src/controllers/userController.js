import prisma from '../lib/prisma';

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password, avatar, membershipId, membershipEndDate } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        avatar,
        membershipId,
        membershipEndDate: new Date(membershipEndDate),
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};