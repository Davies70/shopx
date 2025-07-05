import { Slide, FeaturedType, Review, NavLink } from './types';
import { categories } from './categories';
export const slidesOne: Slide[] = [
  {
    title_1: 'Your Survival starts here',
    image: 'images/sliders/slide_1.jpg',
  },
  {
    title_1: 'Gear up in style for doomsday',

    image: 'images/sliders/slide_7.jpg',
  },
  {
    title_1: 'Be Ready Cause the end is near ',

    image: 'images/sliders/slide_4.jpg',
  },
  {
    title_1: 'Be the last one standing with our gear',
    image: 'images/sliders/slide_12.jpg',
  },
];

export const slidesTwo: Slide[] = [
  {
    title_1: 'Join the ranks of elite preppers',
    image: 'images/sliders/slide_11.jpg',
  },
  {
    title_1: 'Be the last one standing in style.',

    image: 'images/sliders/slide_9.jpg',
  },
  {
    title_1: 'Outlast the end times',
    image: 'images/sliders/slide_5.jpg',
  },
  {
    title_1: 'Because survival is the new luxury.',
    image: 'images/sliders/slide_7.jpg',
  },
];

export const firstFeaturedCards: FeaturedType = {
  text: `Doomsday Helmets are built for everything from bunker skirmishes to gas station standoffs. Engineered with reinforced shells, face shields, and enough modular attachments to make your ex jealous, these helmets keep your head protected and your look prepped-for-anything. Whether you're dodging drones or just making a suspicious grocery run — strap in, seal up, and survive in style..`,
  images: [
    'images/helmet_2.jpg',
    'images/fullhelm_2.jpg',
    'images/fullhelm_5.jpg',
  ],
  title: ' DoomsDay Helmet',
};

export const secondFeaturedCards: FeaturedType = {
  text: `Camouflage Gear isn’t just for blending into the ruins — it’s for standing out in tactical style. From street-smart urban camo to dirt-streaked desert prints, our doomsday-ready fits are lined with low-profile armor and high-key attitude. Whether you're sneaking past raiders or just ghosting your neighbors, these survival layers help you disappear when it counts — and look dangerously good doing it.`,
  images: [
    'images/camohelm_3.jpg',
    'images/cap_3.jpg',
    'images/camo_googles_1.jpg',
  ],
  title: 'Camo for Endtimes',
};

type Story = {
  title: string;
  description: string;
  image_1: string;
  image_2: string;
};

export const storyOne: Story = {
  title: 'Get Ready for the End Times with Shop Apocalypse',
  description: `At ShopApocalypse, we’re more than just a store for survival gear — we’re a movement of forward-thinkers, tacticians, and everyday preppers united by one goal: readiness. We believe that when the unexpected hits, you shouldn’t just survive — you should thrive. That’s why we’ve curated elite, battle-tested gear that empowers civilians, enthusiasts, and off-grid wanderers to stay protected, prepared, and one step ahead. Learn more about how ShopApocalypse was forged from the belief that survival isn’t paranoia — it’s power.`,
  image_1: 'images/plain/vest_2.jpg',
  image_2: 'images/plain/googles_1.jpg',
};

export const productCards = [...categories[1].products];

export const bestSellers = [
  categories[0].products[1],
  categories[0].products[2],
  categories[1].products[3],
  categories[2].products[0],
  categories[2].products[5],
  categories[3].products[1],
];

export const shopAllProducts = [
  ...categories[0].products,
  ...categories[3].products,
  ...categories[2].products,
  ...categories[1].products,
];

export const footerNavigationLinks = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
  { name: 'FAQ', link: '/faq' },
];

export const footerProductLinks = [
  { name: 'Armored Outerwear', link: '/category/armored_outerwear' },
  {
    name: 'Tacktical Head Protection',
    link: '/category/tactical_head_protection',
  },
  {
    name: 'Mission-Ready Eye Gear',
    link: '/category/mission_ready_eye_gear',
  },
  { name: 'Shop All', link: '/shop' },
];

export const testimonials: Review[] = [
  {
    review:
      '"Wore the Ballistic Composite Helmet to my HOA meeting. Nobody questioned my bunker plans again."',
    author: 'Paranoid Pete',
  },
  {
    review:
      '"The Kevlar Hoodie kept me warm, safe, and stylish while scavenging the frozen food aisle."',
    author: 'Icy Ivy',
  },
  {
    review:
      '"I put on the Full-Seal Gas Mask during my commute. Best air I’ve breathed since 1998."',
    author: 'Metro Max',
  },
  {
    review:
      '"These armored gloves helped me open a stubborn can of beans *and* survive a raccoon ambush. Five stars."',
    author: 'Bunker Brenda',
  },
  {
    review:
      '"The Recon Cap is so casual, no one suspects I’m one broken supply chain away from snapping."',
    author: 'Subtle Steve',
  },
  {
    review:
      '"I bought the Night-Ops Goggles for stealth missions. Ended up using them to find snacks in the dark. Still worth it."',
    author: 'Snack Ops Sam',
  },
];

export const navLinks: NavLink[] = [
  {
    link: 'Home',
    url: '/',
  },
  {
    link: 'Shop',
    url: '/shop',
  },
  {
    link: 'About',
    url: '/about',
  },
  {
    link: 'Contact',
    url: '/contact',
  },
];

export const FAQ = [
  {
    question: 'When will you restock?',
    answer:
      'We restock our spoof survival gear every month, depending on demand and supply chain shenanigans. If an item is out of stock, sign up for our newsletter to get notified as soon as it’s back. Our bunker elves work tirelessly to keep the shelves full. Stay prepared—restocks can happen at any moment!',
  },
  {
    question: 'Discount codes & promotions',
    answer:
      'We offer exclusive discount codes during major apocalyptic events and random Tuesdays. Follow us on social media or subscribe to our emails for the latest deals. Promotions are limited, so act fast before the world ends. Remember, nothing says “prepared” like saving a few bucks!',
  },
  {
    question: 'Are your products actually survival tested?',
    answer:
      'Our spoof survival gear is tested in the wildest environments—like living rooms and backyard barbecues. While they look the part, these products are designed for laughs and novelty, not real emergencies. Please don’t rely on them for actual survival situations. Enjoy the fun and share a smile with fellow preppers!',
  },
  {
    question: 'Can I return a product if the apocalypse happens?',
    answer:
      'If the apocalypse happens, our return policy is simple: keep the gear and good luck! For all other scenarios, we offer a 30-day hassle-free return policy. Just contact our support team and we’ll help you out. Remember, refunds are not valid during zombie outbreaks.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship our spoof survival gear worldwide, as long as the postal service is still running. Shipping times may vary depending on your bunker’s location. Customs may ask questions about tactical cat helmets—just smile and nod. Prepare for the end, no matter where you are!',
  },
  {
    question: 'Is your gear safe for pets?',
    answer:
      'Our spoof gear is designed with fun in mind and is generally safe for pets under supervision. Always check the product description for any specific warnings. We recommend supervising your furry friends during use. Safety first, even in pretend doomsday scenarios!',
  },
  {
    question: 'How do I care for my DoomsDay Helmet?',
    answer:
      'To keep your DoomsDay Helmet looking sharp, wipe it down with a damp cloth after each adventure. Avoid harsh chemicals or exposing it to actual combat situations. Store it in a cool, dry place away from curious cats. With proper care, your helmet will be ready for any costume party or apocalypse drill!',
  },
];

export const shippingAndReturnsFAQ = [
  {
    question: 'How long does shipping take?',
    answer:
      'Shipping typically takes 3-7 business days within the US and 7-21 business days for international orders. Delivery times may vary depending on your location and current world events.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day hassle-free return policy on all spoof survival gear. If you’re not satisfied, contact our support team and we’ll guide you through the return process.',
  },
  {
    question: 'Do you provide tracking for shipments?',
    answer:
      'Yes, once your order ships, you’ll receive a tracking number via email so you can follow your package’s journey to your bunker.',
  },
];

export const camoAndGearFAQ = [
  {
    question: 'Where are your camo and gear products made?',
    answer:
      'Our camo and gear products are designed in-house and manufactured by trusted partners in the US and overseas. We ensure each item meets our standards for novelty, comfort, and feline fashion.',
  },
  {
    question: 'What materials are used in your armor and gear?',
    answer:
      'Our spoof armor and gear are made from lightweight, pet-friendly materials such as polyester, cotton blends, and soft foam padding. They are designed for costume use and comfort, not for real protection.',
  },
  {
    question: 'What sizes are available for your camo and gear?',
    answer:
      'We offer a range of sizes to fit most cats and small pets. Please refer to our size chart on each product page for measurements and tips on choosing the right fit for your furry friend.',
  },
];
