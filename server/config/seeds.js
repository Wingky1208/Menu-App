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
      price: 4.99,
      category: categories[0]._id
    },
    {
      name: 'Mac & cheese (with an option to add bacon)',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 3.99,
      category: categories[0]._id
    },
    {
      name: 'Pigs in a blanket',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[0]._id
    },
    {
      name: 'Spinach cheese dip with chips',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[0]._id
    },
    {
      name: 'Onion rings',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[0]._id
    },
    {
      name: 'French fries',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[0]._id
    },
    {
      name: 'Baked potato',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 3.99,
      category: categories[0]._id
    },
    {
      name: 'Breadsticks',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[0]._id
    },
    {
      name: 'Salad',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[0]._id
    },
    {
      name: 'Quick Kimchi (Mak Gimchi)',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Fresh rolls',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 3.99,
      category: categories[0]._id
    },
    {
      name: 'Spring rolls',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[0]._id
    },
    {
      name: 'Deep fried cheese dumplings',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[0]._id
    },
    {
      name: 'Pizza',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 14.99,
      category: categories[1]._id
    },
    {
      name: 'Chicken pot pie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 9.99,
      category: categories[1]._id
    },
    {
      name: 'Mashed potatoes',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[1]._id
    },
    {
      name: 'Fried chicken',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 7.99,
      category: categories[1]._id
    },
    {
      name: 'Burgers',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 12.99,
      category: categories[1]._id
    },
    {
      name: 'Lobster rolls',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 17.99,
      category: categories[1]._id
    },
    {
      name: 'Cajun Shrimp',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 16.99,
      category: categories[1]._id
    },
    {
      name: 'Grilled Fish',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 11.99,
      category: categories[1]._id
    },
    {
      name: 'Chicken soup',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[1]._id
    },
    {
      name: 'Meatloaf',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 8.99,
      category: categories[1]._id
    },
    {
      name: 'Lasagna',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 10.99,
      category: categories[1]._id
    },
    {
      name: 'Spaghetti with meatballs',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 13.99,
      category: categories[1]._id
    },
    {
      name: 'Chicken burger',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 14.99,
      category: categories[1]._id
    },
    {
      name: 'Chicken parmesan',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 15.99,
      category: categories[1]._id
    },
    {
      name: 'Chicken Pesto',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 15.99,
      category: categories[1]._id
    },
    {
      name: 'Burger Sliders',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 13.99,
      category: categories[1]._id
    },
    {
      name: 'Caramelized Onions',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Thousand Island Dressing',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[2]._id
    },
    {
      name: 'Bacon Jam',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Guacamole',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Sauteed Mushrooms',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Tomato Jam',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Dijon Mustard',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[2]._id
    },
    {
      name: 'Bourbon Barbecue Sauce',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[2]._id
    },
    {
      name: 'Onion Jam',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Blue Cheese Sauce',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[2]._id
    },
    {
      name: 'Homemade Ketchup',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.50,
      category: categories[2]._id
    },
    {
      name: 'Pepperoni',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[3]._id
    },
    {
      name: 'Mushroom',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[3]._id
    },
    {
      name: 'Extra cheese',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[3]._id
    },
    {
      name: 'Sausage',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.00,
      category: categories[3]._id
    },
    {
      name: 'Onion',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[3]._id
    },
    {
      name: 'Black olives',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[3]._id
    },
    {
      name: 'Green pepper',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[3]._id
    },
    {
      name: 'Fresh garlic',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.00,
      category: categories[3]._id
    },
    {
      name: 'Grilled cheese',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[4]._id
    },
    {
      name: 'Tomato soup',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[4]._id
    },
    {
      name: 'Chicken fingers/ nuggets',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[4]._id
    },
    {
      name: 'Flatbread pizza',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[4]._id
    },
    {
      name: 'Mac & cheese',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 3.99,
      category: categories[4]._id
    },
    {
      name: 'Mini burgers',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 3.99,
      category: categories[4]._id
    },
    {
      name: 'Mini pizzas',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 3.99,
      category: categories[4]._id
    },
    {
      name: 'Apple pie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[5]._id
    },
    {
      name: 'Pumpkin pie (a great choice during the Fall)',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[5]._id
    },
    {
      name: 'Giant chocolate chip cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[5]._id
    },
    {
      name: 'Banana split',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[5]._id
    },
    {
      name: 'Molten lava cakes',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[5]._id
    },
    {
      name: 'Cinnamon rolls',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[5]._id
    },
    {
      name: 'Cheesecake',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 7.99,
      category: categories[5]._id
    },
    {
      name: 'Baklava',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 7.99,
      category: categories[5]._id
    },
    {
      name: 'Lemon cake',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[5]._id
    },
    {
      name: 'Cannoli',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 4.99,
      category: categories[5]._id
    },
    {
      name: 'Strawberry shortcake',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 6.99,
      category: categories[5]._id
    },
    {
      name: 'Apple Cobbler',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[5]._id
    },
    {
      name: 'kale and pineapple smoothie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[6]._id
    },
    {
      name: 'spinach and blueberries smoothie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[6]._id
    },
    {
      name: 'peach and cauliflower smoothie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[6]._id
    },
    {
      name: 'strawberries and beets smoothie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 5.99,
      category: categories[6]._id
    },
    {
      name: 'coke',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.50,
      category: categories[6]._id
    },
    {
      name: 'sprite',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.50,
      category: categories[6]._id
    },
    {
      name: 'Coffee',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[6]._id
    },
    {
      name: 'root beer',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.50,
      category: categories[6]._id
    },
    {
      name: 'orange crush',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 1.50,
      category: categories[6]._id
    },
    {
      name: 'chocolate milk',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[7]._id
    },
    {
      name: 'Water',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[7]._id
    },
    {
      name: 'Coconut Water',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[7]._id
    },
    {
      name: 'milk',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[7]._id
    },
    {
      name: 'strawberry smoothie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[7]._id
    },
    {
      name: 'peach smoothie',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 2.99,
      category: categories[7]._id
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
