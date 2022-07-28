const db = require('./connection');
const { User, Category, Item, Order } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'appetizers' },
    { name: 'mains' },    
    { name: 'burger_toppings'},
    { name: 'pizza_toppings'},
    { name: 'kids_menu' },
    { name: 'desserts' },
    { name: 'drinks' },
    { name: 'kids_drinks' }
  ]);

  console.log('categories seeded');

  await Item.deleteMany();

  const Items = await Item.insertMany([
    {
      name: 'Mozzarella sticks',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Cheddar Biscuits',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Mac & cheese (with an option to add bacon)',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Cheddar Biscuits',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Cheddar Biscuits',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[0]._id
    },
  ]);

  console.log('Items seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        Items: [Items[0]._id, Items[0]._id, Items[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
