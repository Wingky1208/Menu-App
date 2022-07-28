const categories = require('./connection');
const apps = [{
    name: 'Mozzarella sticks',
    description:
      'Stretchy, cheesy, melty mozzarella that\'s battered and fried. Served with a marinara sauce for dipping.',
    image: 'items_1.jpg',
    price: 2.99,
    category: categories[0]._id
  },
  {
    name: 'Cheddar Biscuits',
    description:
      'Soft, flaky and made from scratch! With just a touch of garlic and cheddar cheese',
    image: 'items_2.jpg',
    price: 4.99,
    category: categories[0]._id
  },
  {
    name: 'Jalepeno Poppers',
    description:
      'A beloved classic, spicy and cheesy goodness!.',
    image: 'items_3.jpg',
    price: 3.99,
    category: categories[0]._id
  },
  {
    name: 'Pigs in a blanket',
    description:
      'We can\'t get enough of them and neither will you!',
    image: 'items_4.jpg',
    price: 5.99,
    category: categories[0]._id
  },
  {
    name: 'Spinach cheese dip with chips',
    description:
      'This dip is a mix of cream cheese, sour cream, cooked spinach, garlic, parmesan cheese, mozzarella cheese and seasonings',
    image: 'items_5.jpg',
    price: 5.99,
    category: categories[0]._id
  },
  {
    name: 'Onion rings',
    description:
      'One of our most popular snacks, enjoy with any dipping sause you choose',
    image: 'items_6.jpg',
    price: 5.99,
    category: categories[0]._id
  },
  {
    name: 'French fries',
    description:
      'Oldie but a goldie, can\'t go wrong with this classic',
    image: 'items_7.jpg',
    price: 5.99,
    category: categories[0]._id
  },
  {
    name: 'Baked potato',
    description:
      'Take a fluffy baked potato and load it with shredded Cheddar Cheese, chopped bacon, Cheddar Cheese sauce, chives, sour cream and butter.',
    image: 'items_8.jpg',
    price: 3.99,
    category: categories[0]._id
  },
  {
    name: 'Breadsticks',
    description:
      'Crispy on the outside, soft and chewy on the inside. Served with marinara dipping sauce. Try an order with cheese.',
    image: 'items_9.jpg',
    price: 5.99,
    category: categories[0]._id
  },
  {
    name: 'Salad',
    description:
      'A plain old salad, for the veggitarian in all of us',
    image: 'items_10.jpg',
    price: 4.99,
    category: categories[0]._id
  },
  {
    name: 'Quick Kimchi (Mak Gimchi)',
    description:
      'Spicy, hot, yummy in your tummy!',
    image: 'items_11.jpg',
    price: 2.99,
    category: categories[0]._id
  },
  {
    name: 'Fresh rolls',
    description:
      'With fresh vegetables wrapped in rice paper, these Vietnamese spring rolls are a refreshing appetizer for an Asian-inspired meal.',
    image: 'items_12.jpg',
    price: 3.99,
    category: categories[0]._id
  },
  {
    name: 'Spring rolls',
    description:
      'Crispy pork spring rolls served with vinaigrette and lettuce',
    image: 'items_13.jpg',
    price: 4.99,
    category: categories[0]._id
  },
  {
    name: 'Deep fried cream cheese wontons',
    description:
      'Deep-fried cheese wonton served with sweet-and-sour sauce. One order comes with 12 dumplings',
    image: 'items_14.jpg',
    price: 5.99,
    category: categories[0]._id
  }];