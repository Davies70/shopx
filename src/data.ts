import { Slide, Product, ProductCardType } from './types';
export const slidesOne: Slide[] = [
  {
    title_1: 'Your Survival',
    title_2: 'Starts',
    title_3: 'Here:',
    image: 'images/slide_3.webp',
  },
  {
    title_1: 'Be Ready ',
    title_2: 'Cause',
    title_3: 'The End is Near',
    image: 'images/slide_2.webp',
  },
  {
    title_1: 'Gear up',
    title_2: 'In Style',
    title_3: 'For Doomsday',
    image: 'images/slide_1.webp',
  },
  {
    title_1: 'Be the last one',
    title_2: 'Standing',
    title_3: 'With our gear',
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
    productTitle: 'Survival Backpack',
    subtitle: 'Durable and spacious for all your survival needs.',
    labelTag: 'Best Seller',
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
  },
  {
    id: 3,
    images: [
      'images/card_3_1.png',
      'images/card_3_2.png',
      'images/card_3_3.png',
    ],
    price: '$19.99',
    oldPrice: '$24.99',
    productTitle: 'Water Purification Tablets',
    subtitle: 'Ensure safe drinking water anywhere.',
    labelTag: 'Limited Offer',
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
  },
  {
    id: 5,
    images: [
      'images/card_5_1.png',
      'images/card_5_2.png',
      'images/card_5_3.png',
    ],
    price: '$39.99',
    productTitle: 'Solar Charger',
    subtitle: 'Keep your devices powered with solar energy.',
    labelTag: 'Eco-Friendly',
  },
];
