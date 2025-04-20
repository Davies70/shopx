import { Slide, Product } from './types';
export const slides: Slide[] = [
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

export const storyImgs: string[] = ['images/story_1.png', 'images/story_2.png'];

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

// export const secondarySlides: Slide[] = [
//   {
//     title: 'Join the ranks of elite apocalypse preppers',
//     image: 'images/bride.jpg',
//   },
//   {
//     title: 'Outlast the end times in style',

//     image: 'images/beard_oil.jpg',
//   },
//   {
//     title: 'Because survival is the new luxury.',

//     image: 'images/crocs.jpg',
//   },
//   {
//     title: 'Prepare now, gloat later.',
//     image: 'images/knife.jpg',
//   },
//   {
//     title: 'Be the last one standing with snacks.',
//     image: 'images/snacks.jpg',
//   },
// ];

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
