// File: src/seeders/seedUsers.js

const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const sampleUsers = [
  {
    username: 'Alice',
    email: 'alice@example.com',
    password: 'password123',
  },
  {
    username: 'Bob',
    email: 'bob@example.com',
    password: 'password123',
  },
  {
    username: 'Charlie',
    email: 'charlie@example.com',
    password: 'password123',
  },
];

const hashPasswords = async () => {
  return Promise.all(
    sampleUsers.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, password: hashedPassword };
    }),
  );
};

const seedUsers = async () => {
  try {
    await User.sync({ force: false });
    const hashedUsers = await hashPasswords();
    await User.bulkCreate(hashedUsers);
    console.log('User seeding completed.');
  } catch (error) {
    console.error('User seeding failed:', error);
  } finally {
    process.exit();
  }
};

seedUsers();
