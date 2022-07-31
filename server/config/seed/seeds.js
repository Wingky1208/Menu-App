const db = require('../connection');
/*
const categories = require('./connection');
const path/items_appetizers = require('./connection');
const path/items_mains = require('./connection');
const path/items_burger_toppings = require('./connection');
const path/items_pizza_toppings = require('./connection');
const path/items_kids_menu = require('./connection');
const path/items_desserts = require('./connection');
const path/items_drinks = require('./connection');
const path/items_kids_drinks = require('./connection');
*/

const { User, Category, Item, Rating, Order } = require('../../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Appetizers' },
    { name: 'Mains' },    
    { name: 'Burger Toppings'},
    { name: 'Pizza Toppings'},
    { name: 'Kids Menu' },
    { name: 'Desserts' },
    { name: 'Drinks' },
    { name: 'Kids Drinks' }
  ]);

  console.log('categories seeded');

  await Item.deleteMany();
  /*
    const Items = await Item.insertMany([
      path/items_appetizers, 
      path/items_mains, 
      path/items_burger_toppings, 
      path/items_pizza_toppings, 
      path/items_kids_menu, 
      path/items_desserts, 
      path/items_drinks, 
      path/items_kids_drinks
    ]);
    */

    const Items = await Item.insertMany([
      {
        name: 'Mozzarella sticks',
        description:
          'Stretchy, cheesy, melty mozzarella that\'s battered and fried. Served with a marinara sauce for dipping.',
        image: `path/items_1.jpg`,
        price: 2.99,
        category: categories[0]._id
      },
      {
        name: 'Cheddar Biscuits',
        description:
          'Soft, flaky and made from scratch! With just a touch of garlic and cheddar cheese',
        image: `path/items_2.jpg`,
        price: 4.99,
        category: categories[0]._id
      },
      {
        name: 'Jalepeno Poppers',
        description:
          'A beloved classic, spicy and cheesy goodness!.',
        image: `path/items_3.jpg`,
        price: 3.99,
        category: categories[0]._id
      },
      {
        name: 'Pigs in a blanket',
        description:
          'We can\'t get enough of them and neither will you!',
        image: `path/items_4.jpeg`,
        price: 5.99,
        category: categories[0]._id
      },
      {
        name: 'Spinach cheese dip with chips',
        description:
          'This dip is a mix of cream cheese, sour cream, cooked spinach, garlic, parmesan cheese, mozzarella cheese and seasonings',
        image: `path/items_5.jpg`,
        price: 5.99,
        category: categories[0]._id
      },
      {
        name: 'Onion rings',
        description:
          'One of our most popular snacks, enjoy with any dipping sause you choose',
        image: `path/items_6.jpg`,
        price: 5.99,
        category: categories[0]._id
      },
      {
        name: 'French fries',
        description:
          'Oldie but a goldie, can\'t go wrong with this classic',
        image: `path/items_7.jpg`,
        price: 5.99,
        category: categories[0]._id
      },
      {
        name: 'Baked potato',
        description:
          'Take a fluffy baked potato and load it with shredded Cheddar Cheese, chopped bacon, Cheddar Cheese sauce, chives, sour cream and butter.',
        image: `path/items_8.jpg`,
        price: 3.99,
        category: categories[0]._id
      },
      {
        name: 'Breadsticks',
        description:
          'Crispy on the outside, soft and chewy on the inside. Served with marinara dipping sauce. Try an order with cheese.',
        image: `path/items_9.jpg`,
        price: 5.99,
        category: categories[0]._id
      },
      {
        name: 'Salad',
        description:
          'A plain old salad, for the veggitarian in all of us',
        image: `path/items_10.jpg`,
        price: 4.99,
        category: categories[0]._id
      },
      {
        name: 'Quick Kimchi (Mak Gimchi)',
        description:
          'Spicy, hot, yummy in your tummy!',
        image: `path/items_11.jpg`,
        price: 2.99,
        category: categories[0]._id
      },
      {
        name: 'Fresh rolls',
        description:
          'With fresh vegetables wrapped in rice paper, these Vietnamese spring rolls are a refreshing appetizer for an Asian-inspired meal.',
        image: `path/items_12.png`,
        price: 3.99,
        category: categories[0]._id
      },
      {
        name: 'Spring rolls',
        description:
          'Crispy pork spring rolls served with vinaigrette and lettuce',
        image: `path/items_13.jpg`,
        price: 4.99,
        category: categories[0]._id
      },
      {
        name: 'Deep fried cream cheese wontons',
        description:
          'Deep-fried cheese wonton served with sweet-and-sour sauce. One order comes with 12 dumplings',
        image: `path/items_14.jpg`,
        price: 5.99,
        category: categories[0]._id
      },
      {
        name: 'Pizza',
        description:
          'Served with your choice of any 3 toppings. (More toppings extra)',
        image: `path/items_15.jpg`,
        price: 14.99,
        category: categories[1]._id
      },
      {
        name: 'Chicken pot pie',
        description:
          'A delicious, homemade chicken pot pie made from scratch with carrots, peas, and celery. This comfort food classic will be a hit with your family.',
        image: `path/items_16.jpg`,
        price: 9.99,
        category: categories[1]._id
      },
      {
        name: 'Mashed potatoes',
        description:
          'Whats not to love about this savoury buttery classic!?',
        image: `path/items_17.jpg`,
        price: 5.99,
        category: categories[1]._id
      },
      {
        name: 'Fried chicken',
        description:
          'Our fired chicken would make the Colonel jealous',
        image: `path/items_18.jpg`,
        price: 7.99,
        category: categories[1]._id
      },
      {
        name: 'Burgers',
        description:
          'Juicy and delicious served with your choice of toppings.',
        image: `path/items_19.jpg`,
        price: 12.99,
        category: categories[1]._id
      },
      {
        name: 'Lobster rolls',
        description:
          'Lobster Rolls are sandwiches that hail from New England, mounding chunks of fresh lobster meat onto buttered and griddled split-top hotdog buns.',
        image: `path/items_20.jpg`,
        price: 17.99,
        category: categories[1]._id
      },
      {
        name: 'Cajun Shrimp',
        description:
          'This Cajun Shrimp and Rice Skillet is a one-pot wonder full of flavorful shrimp and rice with a Cajun seasoning that the entire family will enjoy.',
        image: `path/items_21.jpg`,
        price: 16.99,
        category: categories[1]._id
      },
      {
        name: 'Grilled Fish',
        description:
          'Accessorize with grilled vegetables! ; Perfect Corn, Corn in Foil, Corn in Husk, or Elote The best ways to cook this seasonal treat',
        image: `path/items_22.jpg`,
        price: 11.99,
        category: categories[1]._id
      },
      {
        name: 'Chicken soup',
        description:
          'Creamy, brothy, spicy or lemony—no matter what kind of chicken soup recipe you prefer, we have one that will surely hit the spot.',
        image: `path/items_23.jpg`,
        price: 4.99,
        category: categories[1]._id
      },
      {
        name: 'Meatloaf',
        description:
          'Love it or hate it, ours is simply the best.',
        image: `path/items_24.jpg`,
        price: 8.99,
        category: categories[1]._id
      },
      {
        name: 'Lasagna',
        description:
          'New lasagne selection on our menu! Lasagna is one of the worldwide famous Italian dish.',
        image: `path/items_25.jpg`,
        price: 10.99,
        category: categories[1]._id
      },
      {
        name: 'Spaghetti with meatballs',
        description:
          'Loaded with meatballs, bring a napkin, and don\'t forget to top with cheese',
        image: `path/items_26.jpg`,
        price: 13.99,
        category: categories[1]._id
      },
      {
        name: 'Chicken burger',
        description:
          'Topped with crispy bacon, juicy tomatoes, and lettuce, this burger is a twist on one of your favorite sandwiches.',
        image: `path/items_27.jpg`,
        price: 14.99,
        category: categories[1]._id
      },
      {
        name: 'Chicken parmesan',
        description:
          'Two lightly fried parmesan-breaded chicken breasts are smothered with marinara sauce and melted Italian cheeses',
        image: `path/items_28.jpeg`,
        price: 15.99,
        category: categories[1]._id
      },
      {
        name: 'Chicken Pesto',
        description:
          'This chicken pesto pasta is sauteed chicken, farfalle pasta and cherry tomatoes, all tossed in basil pesto and finished off with cheese.',
        image: `path/items_29.jpg`,
        price: 15.99,
        category: categories[1]._id
      },
      {
        name: 'Burger Sliders',
        description:
          'These sliders come four to a plate, with savory beef patties on fluffy mini buns and flavorful toppings like grilled onions, lettuce, dill pickles and ketchup.',
        image: `path/items_30.jpeg`,
        price: 13.99,
        category: categories[1]._id
      },
      {
        name: 'Caramelized Onions',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Thousand Island Dressing',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[2]._id
      },
      {
        name: 'Bacon Jam',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Guacamole',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Sauteed Mushrooms',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Tomato Jam',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Dijon Mustard',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[2]._id
      },
      {
        name: 'Bourbon Barbecue Sauce',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[2]._id
      },
      {
        name: 'Onion Jam',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Blue Cheese Sauce',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[2]._id
      },
      {
        name: 'Homemade Ketchup',
        description:
          '',
        image: '',
        price: 1.50,
        category: categories[2]._id
      },
      {
        name: 'Pepperoni',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[3]._id
      },
      {
        name: 'Mushroom',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[3]._id
      },
      {
        name: 'Extra cheese',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[3]._id
      },
      {
        name: 'Sausage',
        description:
          '',
        image: '',
        price: 2.00,
        category: categories[3]._id
      },
      {
        name: 'Onion',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[3]._id
      },
      {
        name: 'Black olives',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[3]._id
      },
      {
        name: 'Green pepper',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[3]._id
      },
      {
        name: 'Fresh garlic',
        description:
          '',
        image: '',
        price: 1.00,
        category: categories[3]._id
      },
      {
        name: 'Grilled cheese',
        description:
          'Mom\'s famous recipe made with American cheese & grilled to perfection',
        image: `path/items_50.jpg`,
        price: 4.99,
        category: categories[4]._id
      },
      {
        name: 'Tomato soup',
        description:
          'Roasted tomato soup made with roma tomatoes and red bell peppers is a tasty accompaniment to our grilled cheese!.',
        image: `path/items_51.jpg`,
        price: 2.99,
        category: categories[4]._id
      },
      {
        name: 'Chicken fingers/ nuggets',
        description:
          'Homemade chicken fingers marinated in buttermilk with a super crispy breaded exterior. The ultimate chicken tenders! ',
        image: `path/items_52.jpg`,
        price: 4.99,
        category: categories[4]._id
      },
      {
        name: 'Flatbread pizza',
        description:
          'Three flatbread pizza varieties are Cheese, Margherita and Chipotle Chicken and Bacon.',
        image: `path/items_53.jpg`,
        price: 5.99,
        category: categories[4]._id
      },
      {
        name: 'Mac & cheese',
        description:
          'A beloved classic any child would love!.',
        image: `path/items_54.jpg`,
        price: 3.99,
        category: categories[4]._id
      },
      {
        name: 'Mini burgers',
        description:
          'All-American sliders are cute, fun to make, and fun to eat.',
        image: `path/items_55.jpg`,
        price: 3.99,
        category: categories[4]._id
      },
      {
        name: 'Mini pizzas',
        description:
          'A wee Pizza, for your wee little one',
        image: `path/items_56.jpg`,
        price: 3.99,
        category: categories[4]._id
      },
      {
        name: 'Apple pie',
        description:
          'What more can we say really, grab a fork and dig in!',
        image: `path/items_57.jpg`,
        price: 5.99,
        category: categories[5]._id
      },
      {
        name: 'Pumpkin pie (a great choice during the Fall)',
        description:
          'Good all year round!',
        image: `path/items_58.jpg`,
        price: 5.99,
        category: categories[5]._id
      },
      {
        name: 'Giant chocolate chip cookies',
        description:
          'Cookie?, check, GIANT COOKIE?, YES PLEASE!',
        image: `path/items_59.jpg`,
        price: 4.99,
        category: categories[5]._id
      },
      {
        name: 'Banana split',
        description:
          'Another blast from the past',
        image: `path/items_60.jpg`,
        price: 4.99,
        category: categories[5]._id
      },
      {
        name: 'Molten lava cakes',
        description:
          'Ozzing into your soul.',
        image: `path/items_61.jpg`,
        price: 5.99,
        category: categories[5]._id
      },
      {
        name: 'Cinnamon rolls',
        description:
          'Cinnamon roll made with warm dough, Cinnamon, topped with rich cream cheese frosting. It\'s classic for a reason.',
        image: `path/items_62.jpg`,
        price: 4.99,
        category: categories[5]._id
      },
      {
        name: 'Cheesecake',
        description:
          'Cheesecake, that is all.',
        image: `path/items_63.jpg`,
        price: 7.99,
        category: categories[5]._id
      },
      {
        name: 'Baklava',
        description:
          'Baklava is a rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup or honey.',
        image: `path/items_64.jpg`,
        price: 7.99,
        category: categories[5]._id
      },
      {
        name: 'Lemon cake',
        description:
          ' Made from scratch with real ingredients such as freshly squeezed lemon juice and lemon zest, this cake is full of flavor.',
        image: `path/items_65.jpg`,
        price: 5.99,
        category: categories[5]._id
      },
      {
        name: 'Cannoli',
        description:
          ' Delicious fluffy pastry filled with traditional Italian custard and your choice of Strawberry or Black Cherry sauce. Topped with fresh Black Cherries.',
        image: `path/items_66.jpg`,
        price: 4.99,
        category: categories[5]._id
      },
      {
        name: 'Strawberry shortcake',
        description:
          ' Fresh Whipped Cream Layered with Vanilla Sponge Cake and Fresh. Strawberries Garnished with Chocolate Dipping sause! mmmmmmmmmm',
        image: `path/items_67.jpg`,
        price: 6.99,
        category: categories[5]._id
      },
      {
        name: 'Apple Cobbler',
        description:
          'This old-fashioned Apple Cobbler is one of our FAVORITE desserts. It\'s made with fresh apples in a cinnamon sauce.',
        image: `path/items_68.jpg`,
        price: 5.99,
        category: categories[5]._id
      },
      {
        name: 'kale and pineapple smoothie',
        description:
          '',
        image: `path/items_69.jpg`,
        price: 5.99,
        category: categories[6]._id
      },
      {
        name: 'spinach and blueberries smoothie',
        description:
          '',
        image: `path/items_70.jpg`,
        price: 5.99,
        category: categories[6]._id
      },
      {
        name: 'peach and cauliflower smoothie',
        description:
          '',
        image: `path/items_71.jpg`,
        price: 5.99,
        category: categories[6]._id
      },
      {
        name: 'strawberries and beets smoothie',
        description:
          '',
        image: `path/items_72.jpg`,
        price: 5.99,
        category: categories[6]._id
      },
      {
        name: 'coke',
        description:
          '',
        image: `path/items_73.jpg`,
        price: 1.50,
        category: categories[6]._id
      },
      {
        name: 'sprite',
        description:
          '',
        image: '',
        price: 1.50,
        category: categories[6]._id
      },
      {
        name: 'Coffee',
        description:
          '',
        image: `path/items_75.jpg`,
        price: 2.99,
        category: categories[6]._id
      },
      {
        name: 'root beer',
        description:
          '',
        image: '',
        price: 1.50,
        category: categories[6]._id
      },
      {
        name: 'orange crush',
        description:
          '',
        image: '',
        price: 1.50,
        category: categories[6]._id
      },
      {
        name: 'chocolate milk',
        description:
          '',
        image: `path/items_78.jpg`,
        price: 2.00,
        category: categories[7]._id
      },
      {
        name: 'Water',
        description:
          '',
        image: '',
        price: 0.00,
        category: categories[7]._id
      },
      {
        name: 'Coconut Water',
        description:
          '',
        image: '',
        price: 1.50,
        category: categories[7]._id
      },
      {
        name: 'milk',
        description:
          '',
        image: `path/items_81.jpeg`,
        price: 2.00,
        category: categories[7]._id
      },
      {
        name: 'strawberry smoothie',
        description:
          '',
        image: `path/items_82.jpg`,
        price: 2.99,
        category: categories[7]._id
      },
      {
        name: 'peach smoothie',
        description:
          '',
        image: '',
        price: 2.99,
        category: categories[7]._id
      },
      {
        name: 'orange juice',
        description:
          '',
        image: `path/items_84.jpg`,
        price: 1.99,
        category: categories[7]._id
      },
      {
        name: 'apple juice',
        description:
          '',
        image: '',
        price: 1.99,
        category: categories[7]._id
      },
    ]);

  console.log('Items seeded');

  await User.deleteMany({});

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });
  
  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  
  await User.create({
    firstName: 'Winkey',
    lastName: 'Liang',
    email: 'wL@testmail.com',
    password: 'password12345'
  });
  
  const items = await Item.find({});


  await User.create({
    firstName: 'Abdalla',
    lastName: 'Jama',
    email: 'aj@testmail.com',
    password: 'password12345',
    orders: [
      {
        items: [
          items[0],
          items[1],
          items[2]
        ]
      },
      {
        items: [
          items[0],
          items[1],
          items[2]
        ],
      }
    ]
  });

  await User.create({
    firstName: 'James',
    lastName: 'Fidlin',
    email: 'jf@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
