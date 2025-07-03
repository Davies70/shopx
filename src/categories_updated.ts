// Extended and enriched version of spoof doomsday prepper gear shop data

export interface Product {
  id: string;
  name: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  price?: {
    old: number;
    new: number;
    discount: string;
  };
  tags?: string[];
  color?: string;
}

export interface Category {
  name: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    name: 'Armored Outerwear',
    products: [
      {
        id: 'AOW001',
        name: 'Lightweight Kevlar Vest',
        images: [
          'images/vest_1.jpg',
          'images/vest_black_2.jpg,',
          'images/vest_9.jpg',
        ],
        shortDescription: 'Breathable, minimal plating for urban scouting.',
        longDescription:
          'Engineered with urban mobility in mind, the Lightweight Kevlar Vest offers tactical protection without sacrificing breathability or agility. Ideal for reconnaissance and stealth missions in tight, high-risk environments, it provides a snug fit and optimal weight distribution. The vest features moisture-wicking fabric, reinforced seams, and modular pouch attachments for utility tools or mags.',
        color: 'camo',
      },
      {
        id: 'AOW002',
        name: 'Heavy-Duty Bulletproof Jacket',
        images: ['images/vest_2.jpg', 'images/vest_black_4.jpg'],
        shortDescription: 'Full-torso coverage, reinforced shoulders.',
        longDescription:
          'The Heavy-Duty Bulletproof Jacket is crafted to endure intense combat scenarios. With full-torso Kevlar layering, shoulder reinforcements, and internal ceramic plate slots, this jacket turns the wearer into a walking tank. Thermal lining ensures comfort in colder climates, while expandable sleeves and collar seals protect against shrapnel and weather.',
        price: {
          old: 289.99,
          new: 231.99,
          discount: '20% off',
        },
        tags: ['new'],
        color: 'black',
      },
      {
        id: 'AOW003',
        name: 'Urban Camo Covert Armor',
        images: [
          'images/vest_3.jpg',
          'images/vest_black_6.jpg',
          'images/vest_black_3.jpg',
        ],
        shortDescription: 'Slim profile, street-ready camo print.',
        longDescription: `Blending into the concrete jungle has never been easier. This covert armor offers discreet protection with a low-visibility camo design and hidden plate pockets. It's built for those who need to avoid detection but stay safe from small arms fire. Durable zippers, urban aesthetic, and lightweight inserts make this ideal for urban survivalists.`,
        color: 'cool black',
      },
      {
        id: 'AOW004',
        name: 'Full-Tactical Overcoat',
        images: ['images/vest_7.jpg', 'images/vest_black_6.jpg'],
        shortDescription:
          'Weather-resistant trench with internal armor lining.',
        longDescription:
          'Combining style with defense, this overcoat features weatherproof exterior with soft-lined Kevlar padding. Adjustable cuffs, wind-sealed collar, and holster-compatible inner pockets make this a top choice for survivalists moving through unpredictable environments.',
        price: {
          old: 349.99,
          new: 297.49,
          discount: '15% off',
        },
        color: 'black',
      },
      {
        id: 'AOW005',
        name: 'Thermal Lined Armor Hoodie',
        images: [
          'images/vest_4.jpg',
          'images/vest_1.jpg',
          'images/vest_black_5.jpg',
        ],
        shortDescription: 'Blends casual style with covert defense.',
        longDescription:
          'A rugged hoodie designed for comfort and defense, this garment is lined with lightweight Kevlar and includes hidden side zippers for ventilation. The oversized hood accommodates most tactical helmets and integrates seamlessly with comms gear. Comes in neutral tones for low profile travel.',
        tags: ['new'],
        color: 'gray',
      },
      {
        id: 'AOW006',
        name: 'Emergency Rain-Armor Shell',
        images: [
          'images/altvest_2.jpg',
          'images/altvest_3.jpg',
          'images/altvest_1.jpg',
        ],
        shortDescription: 'Waterproof outer shell with reactive armor inserts.',
        longDescription:
          'For wet and wild terrains, this rain shell doesn’t just keep you dry—it keeps you alive. With fast-drying, hydrophobic outer material and removable lightweight armor panels, it’s perfect for ambush-prone wetlands or evacuation routes in storm conditions.',
        color: 'futurisitc black',
      },
    ],
  },
  {
    name: 'Tactical Head Protection',
    products: [
      {
        id: 'THP001',
        name: 'Ballistic Composite Helmet',
        images: [
          'images/camohelm_1.jpg',
          'images/camohelm_2',
          'images/camohelm_3',
        ],
        shortDescription: 'Advanced composite shell, internal padding.',
        longDescription:
          'Built for maximum head protection, this helmet combines a composite outer shell with internal padding and anti-shock webbing to diffuse blunt force trauma. Compatible with visor attachments, comms devices, and thermal mounts.',
        color: 'camo',
      },
      {
        id: 'THP002',
        name: 'Modular Riot Helmet',
        images: [
          'images/helmet_1.jpg',
          'images/helmet_2.jpg',
          'images/helmet_3.jpg',
        ],
        shortDescription: 'Built-in visor, attachable face shield.',
        longDescription:
          'This riot helmet includes a retractable visor, a full-face polycarbonate shield, and cushioned interior lining. Designed for maximum impact resistance and full field-of-vision retention.',
        tags: ['new'],
        color: 'black',
      },
      {
        id: 'THP003',
        name: 'Light Recon Cap with Armor Liner',
        images: ['images/cap_1.jpg', 'images/cap_2.jpg', 'images/cap_3.jpg'],
        shortDescription: 'Baseball-style cap with hidden Kevlar lining.',
        longDescription:
          'A casual-looking cap lined with bullet-resistant Kevlar material. Includes breathable mesh panels and adjustable strap to accommodate gear underneath.',
        price: {
          old: 69.99,
          new: 55.99,
          discount: '20% off',
        },
        color: 'cool black',
      },
      {
        id: 'THP004',
        name: 'Tactical Hood with Sensor Mesh',
        images: [
          'images/fullhelm_5.jpg',
          'images/fullhelm_1.jpg',
          'images/fullhelm_2.jpg',
        ],
        shortDescription: 'Concealable hood with integrated sensors.',
        longDescription:
          'Worn over helmets or alone, this hood is embedded with thermal mesh to detect infrared heat sources and alert the user via haptic feedback pads.',
        color: 'futuristic',
      },
      {
        id: 'THP005',
        name: 'Comm-Ready Tactical Helmet',
        images: [
          'images/fullhem_3.jpg',
          'images/fullhem_2.jpg',
          'images/fullhem_4.jpg',
        ],
        shortDescription: 'Integrated mic, bone-conducting headset.',
        longDescription:
          'Stay connected in chaos with this high-comms helmet, featuring bone-conducting audio and high-frequency mic that bypasses external noise.',
        tags: ['new'],
        color: 'black',
      },
      {
        id: 'THP006',
        name: 'Impact Sensor Smart Helmet',
        images: [
          'images/helmet_1.jpg',
          'images/helmet_2.jpg',
          'images/helmet_3.jpg',
        ],
        shortDescription: 'Tracks shock impact and relays data.',
        longDescription:
          'Designed for medevac scenarios, this helmet records impact severity and location, syncing real-time with nearby health HUDs or tactical apps.',
        color: 'gray',
      },
    ],
  },
  {
    name: 'Mission-Ready Eye Gear',
    products: [
      {
        id: 'EG001',
        name: 'Sealed Impact-Resistant Goggles',
        images: [
          'images/googles_4.jpg',
          'images/googles_5.jpg',
          'images/googles_6.jpg',
        ],
        shortDescription: 'Full-seal foam gasket, anti-fog coating.',
        longDescription:
          'Sealed against debris and fog, these goggles ensure uninterrupted visibility in harsh environments. Wide field of view and scratch-resistant coating meet military-grade durability standards.',
        price: {
          old: 89.99,
          new: 71.99,
          discount: '20% off',
        },
        color: 'black',
      },
      {
        id: 'EG002',
        name: 'Night-Ops Low-Light Goggles',
        images: [
          'images/googles_1.jpg',
          'images/googles_2.jpg',
          'images/googles_3.jpg',
        ],
        shortDescription: 'Passive light amplification without green glow.',
        longDescription:
          'Perfect for stealth ops, these goggles use a reflective mesh to amplify ambient light without creating a visible signature. Ideal for moonlit terrain.',
        color: 'futuristic',
      },
      {
        id: 'EG003',
        name: 'Panoramic Ballistic Glasses',
        images: [
          'images/googles_6.jpg',
          'images/googles_5.jpg',
          'images/googles_4.jpg',
        ],
        shortDescription: 'Wraparound design, scratch-resistant lenses.',
        longDescription:
          'Ergonomically shaped to fit close to the face, these glasses resist fragmentation and protect against wind, sand, and UV rays. Great for both day and night patrols.',
        tags: ['new'],
        color: 'cool black',
      },
      {
        id: 'EG004',
        name: 'Adaptive Tint Combat Visor',
        images: [
          'images/googles_4.jpg',
          'images/googles_2.jpg',
          'images/googles_3.jpg',
        ],
        shortDescription: 'Auto-darkens in bright light.',
        longDescription:
          'Smart lenses detect sudden light changes and instantly adjust tint to protect eyes from flashbangs or explosions. Lightweight and helmet-compatible.',
        color: 'gray',
      },
      {
        id: 'EG005',
        name: 'IR-Reflective Stealth Shades',
        images: [
          'images/googles_3.jpg',
          'images/googles_5.jpg',
          'images/googles_3.jpg',
        ],
        shortDescription: 'Deflects infrared tracking and heat detection.',
        longDescription:
          'A must for infiltration missions, these shades reduce your heat signature and reflect common infrared tracking wavelengths, keeping your movement undetected.',
        color: 'black',
      },
      {
        id: 'EG006',
        name: 'Windproof Tactical Eyewear',
        images: [
          'images/camo_googles_1.jpg',
          'images/camo_googles_2.jpg',
          'images/camo_googles_3.jpg',
        ],
        shortDescription: 'Ideal for desert, high-speed conditions.',
        longDescription:
          'Full seal design with sand-proof vents and anti-fog inner lenses. Designed for operators in high-wind or high-velocity vehicles.',
        tags: ['new'],
        color: 'camo',
      },
    ],
  },
  {
    name: 'Survival Handwear',
    products: [
      {
        id: 'HW001',
        name: 'Armored Tactical Gloves',
        images: [
          'images/glove_1.jpg',
          'images/glove_2.jpg',
          'images/glove_3.jpg',
        ],
        shortDescription: 'Reinforced knuckles, grip-enhancing palms.',
        longDescription:
          'Combat-tested and reinforced, these gloves are your best bet when facing rubble, blades, or hand-to-hand conflict. Kevlar stitching and non-slip inner palm material provide superior grip and endurance.',
        color: 'black',
      },
      {
        id: 'HW002',
        name: 'All-Climate Utility Gloves',
        images: [
          'images/glove_2.jpg',
          'images/glove_1.jpg',
          'images/glove_3.jpg',
        ],
        shortDescription: 'Insulated, touchscreen-compatible fingertips.',
        longDescription:
          'Built to handle rain, snow, or desert heat, these gloves use thermal-flex fabric and have reinforced stitching around fingertips for device use.',
        tags: ['new'],
        color: 'camo',
      },
      {
        id: 'HW003',
        name: 'Multi-Tool Mechanic Gloves',
        images: [
          'images/glove_3.jpg',
          'images/glove_2.jpg',
          'images/glove_1.jpg',
        ],
        shortDescription: 'Built-in bit holders and mini-blade pocket.',
        longDescription:
          'Featuring stealth compartments in the cuff and palm for tools, these gloves include a magnetic fastener strip for easy access to small parts.',
        price: {
          old: 69.99,
          new: 55.99,
          discount: '20% off',
        },
        color: 'futuristic',
      },
    ],
  },
  {
    name: 'Advanced Respiratory Gear',
    products: [
      {
        id: 'GM001',
        name: 'Full-Seal Tactical Gas Mask',
        images: [
          'images/gaskmask_2.jpg',
          'images/gaskmask_1.jpg',
          'images/gaskmask_3.jpg',
        ],
        shortDescription: 'Military-grade mask with replaceable filters.',
        longDescription:
          'Designed for chemical, biological, and airborne threats, the Full-Seal Tactical Gas Mask provides full-face protection with a triple-layer filtration system. It features a polycarbonate anti-fog lens, silicone sealant for air-tight comfort, and voice diaphragm for team communication. Replaceable dual filters allow extended use in high-risk areas, and the quick-release harness system ensures rapid donning in emergencies. Perfect for first responders, survivalists, and frontline operatives.',
        price: {
          old: 199.99,
          new: 159.99,
          discount: '20% off',
        },
        tags: ['new'],
        color: 'black',
      },
    ],
  },
];
