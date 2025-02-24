import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create memberships
  const basicMembership = await prisma.membership.create({
    data: {
      name: 'Basic Plan',
      image: 'https://example.com/basic.jpg',
      price: 29.99,
      duration: 1,
    },
  });

  const premiumMembership = await prisma.membership.create({
    data: {
      name: 'Premium Plan',
      image: 'https://example.com/premium.jpg',
      price: 59.99,
      duration: 6,
    },
  });

  // Create gyms
  const gym1 = await prisma.gym.create({
    data: {
      name: 'Sydney Fitness Hub',
      address: '123 Main Street, Sydney',
      city: 'Sydney',
      latitude: -33.8688,
      longitude: 151.2093,
    },
  });

  const gym2 = await prisma.gym.create({
    data: {
      name: 'Melbourne Fitness Center',
      address: '456 King Street, Melbourne',
      city: 'Melbourne',
      latitude: -37.8136,
      longitude: 144.9631,
    },
  });

  // Create trainers
  await prisma.trainer.create({
    data: {
      name: 'John Doe',
      avatar: 'https://example.com/john.jpg',
      bio: 'Certified personal trainer with 5 years of experience.',
      gymId: gym1.id,
    },
  });

  await prisma.trainer.create({
    data: {
      name: 'Jane Smith',
      avatar: 'https://example.com/jane.jpg',
      bio: 'Specialist in weight training and endurance workouts.',
      gymId: gym2.id,
    },
  });

  // Create users
  await prisma.user.create({
    data: {
      firstName: 'Alice',
      lastName: 'Brown',
      email: 'alice@example.com',
      password: 'hashedpassword',
      avatar: 'https://example.com/alice.jpg',
      membershipId: basicMembership.id,
      membershipEndDate: new Date('2025-01-01'),
    },
  });

  await prisma.user.create({
    data: {
      firstName: 'Bob',
      lastName: 'Williams',
      email: 'bob@example.com',
      password: 'hashedpassword',
      avatar: 'https://example.com/bob.jpg',
      membershipId: premiumMembership.id,
      membershipEndDate: new Date('2025-06-01'),
    },
  });

  console.log('Database seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
