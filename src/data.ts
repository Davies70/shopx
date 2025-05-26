import { Slide, Product, ProductCardType, FeaturedType, Review } from './types';
export const slidesOne: Slide[] = [
  {
    title_1: 'Your Survival starts here',
    image: 'images/slide_3.webp',
  },
  {
    title_1: 'Be Ready Cause the end is near ',

    image: 'images/slide_2.webp',
  },
  {
    title_1: 'Gear up in style for doomsday',

    image: 'images/slide_1.webp',
  },
  {
    title_1: 'Be the last one standing with our gear',
    image: 'images/slide_4.webp',
  },
];

export const slidesTwo: Slide[] = [
  {
    title_1: 'Join the ranks of elite apocalypse preppers',
    image: 'images/slide_3.webp',
  },
  {
    title_1: 'Be the last one standing with snacks.',

    image: 'images/slide_2.webp',
  },
  {
    title_1: 'Outlast the end times in style',
    image: 'images/slide_1.webp',
  },
  {
    title_1: 'Because survival is the new luxury.',
    image: 'images/slide_4.webp',
  },
];

export const firstFeaturedCards: FeaturedType = {
  text: `The Purrtection Helmet is a military-grade headgear designed to
              keep your cat safe and comfortable during any mission.`,
  images: [
    'images/new_card_1.png',
    'images/new_card_2.png',
    'images/new_card_3.png',
  ],
  title: ' DoomsDay Helmet',
};

export const secondFeaturedCards: FeaturedType = {
  text: 'The Purrfect Camo Gear is the ultimate tactical outfit for your feline friend.',
  images: [
    'images/new_card_3.png',
    'images/new_card_4.png',
    'images/new_card_5.png',
  ],
  title: 'Camo for endtimes',
};

type Story = {
  title: string;
  description: string;
  image_1: string;
  image_2: string;
};

export const storyOne: Story = {
  title: 'Our Story',
  description:
    "At Stealthy Whiskers, we're more than just a store that sells cat gear. We're passionate cat owners and military enthusiasts who want to help other cat owners train their furry friends to become skilled and prepared warriors. Learn more about our story and how we got started on our mission to help cats become the best they can be.",
  image_1: 'images/story_1.png',
  image_2: 'images/story_2.png',
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Survival Backpack',
    description: 'A durable backpack for all your survival needs.',
    price: 49.99,
    image: 'images/snacks.jpg',
  },
  {
    id: 2,
    name: 'Emergency Food Supply',
    description: 'A 72-hour food supply for emergencies.',
    price: 29.99,
    image: 'images/crocs.jpg',
  },
  {
    id: 3,
    name: 'Water Purification Tablets',
    description: 'Ensure safe drinking water with these tablets.',
    price: 19.99,
    image: 'images/mask.jpg',
  },
  {
    id: 4,
    name: 'First Aid Kit',
    description: 'A comprehensive first aid kit for emergencies.',
    price: 24.99,
    image: 'images/knife.jpg',
  },
  {
    id: 5,
    name: 'Solar Charger',
    description: 'Keep your devices charged with solar power.',
    price: 39.99,
    image: 'images/beard_oil.jpg',
  },
  {
    id: 6,
    name: 'Multi-Tool',
    description: 'A versatile multi-tool for various tasks.',
    price: 14.99,
    image: 'images/tracker.jpg',
  },
  {
    id: 7,
    name: 'Emergency Blanket',
    description: 'Stay warm with this emergency blanket.',
    price: 9.99,
    image: 'images/shirt.jpg',
  },
  {
    id: 8,
    name: 'Portable Stove',
    description: 'Cook meals on the go with this portable stove.',
    price: 34.99,
    image: 'images/robot.jpg',
  },
  {
    id: 9,
    name: 'Survival Knife',
    description: 'A reliable knife for survival situations.',
    price: 29.99,
    image: 'images/stroller.jpg',
  },
  {
    id: 10,
    name: 'Fire Starter Kit',
    description: 'Easily start a fire with this kit.',
    price: 12.99,
    image: 'images/burrito.jpg',
  },
  {
    id: 11,
    name: 'Emergency Radio',
    description: 'Stay informed with this emergency radio.',
    price: 24.99,
    image: 'images/chum.jpg',
  },
  {
    id: 12,
    name: 'Tactical Flashlight',
    description: 'A bright flashlight for tactical use.',
    price: 19.99,
    image: 'images/cat.jpg',
  },
];
export const productCards: ProductCardType[] = [
  {
    id: 1,
    images: [
      'images/card_1_1.png',
      'images/card_1_2.png',
      'images/card_1_3.png',
    ],
    price: '$49.99',
    oldPrice: '$59.99',
    percentOff: 17,
    productTitle: 'Survival Backpack',
    subtitle: 'Durable and spacious for all your survival needs.',
    labelTag: 'Best Seller',
    productType: 'discount',
  },
  {
    id: 2,
    images: [
      'images/card_2_1.png',
      'images/card_2_2.png',
      'images/card_2_3.png',
    ],
    price: '$29.99',
    productTitle: 'Emergency Food Supply',
    subtitle: '72-hour food supply for emergencies.',
    productType: 'normal',
  },
  {
    id: 3,
    images: [
      'images/card_3_1.png',
      'images/card_3_2.png',
      'images/card_3_3.png',
    ],
    price: '$19.99',
    productTitle: 'Water Purification Tablets',
    subtitle: 'Ensure safe drinking water anywhere.',
    labelTag: 'Limited Offer',
    productType: 'normal',
  },
  {
    id: 4,
    images: [
      'images/card_4_1.png',
      'images/card_4_2.png',
      'images/card_4_3.png',
    ],
    price: '$24.99',
    productTitle: 'First Aid Kit',
    subtitle: 'Comprehensive kit for emergency situations.',
    productType: 'new',
  },
  {
    id: 5,
    images: [
      'images/card_5_1.png',
      'images/card_5_2.png',
      'images/card_5_3.png',
    ],
    price: '$39.99',
    oldPrice: '$49.99',
    percentOff: 20,
    productTitle: 'Solar Charger',
    subtitle: 'Keep your devices powered with solar energy.',
    labelTag: 'Eco-Friendly',
    productType: 'discount',
  },
];

export const footerNavigationLinks: string[] = [
  'Home',
  'About',
  'Contact',
  'FAQ',
];

export const footerProductLinks: string[] = [
  'Gas masks',
  'Tactical Gear',
  'Shop All',
];

export const testimonials: Review[] = [
  {
    review: ' "I am definitely prepared for the end of times "',
    author: 'John Richardson',
  },
  {
    review: '"My cat looks ready to lead a post-apocalyptic army. 10/10."',
    author: 'Sarah Apocalypse',
  },
  {
    review:
      '"Finally, a backpack that fits my bunker snacks and existential dread!"',
    author: 'Doomsday Dave',
  },
  {
    review:
      '"The emergency food supply tastes better than my cooking. Might eat it before the world ends."',
    author: 'Hungry Hank',
  },
  {
    review:
      '"Bought the survival knife. Now I just need to survive my cooking."',
    author: 'Chef Catastrophe',
  },
  {
    review:
      '"Solar charger works great, even powers my conspiracy theory podcasts!"',
    author: 'Radio Rick',
  },
];
