// Extended and enriched version of spoof doomsday prepper gear shop data

export interface Product {
  id: string;
  name: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  discount?: {
    isDiscounted: boolean;
    discountPrice?: number;
    percentOff?: string;
  };
  price: number;
  tags?: string[];
  color?: string;
  whyWeMadeIt: string;
}

export interface Category {
  name: string;
  products: Product[];
  id: string;
}

export const categories: Category[] = [
  {
    name: 'Armored Outerwear',
    id: 'armored_outerwear',
    products: [
      {
        id: 'AOW001',
        name: 'Lightweight Kevlar Vest',
        images: [
          '/images/vest_1.jpg',
          '/images/vest_black_2.jpg',
          '/images/light_1.jpg',
          '/images/light_2.jpg',
          '/images/light_3.jpg',
        ],
        shortDescription: 'Breathable, minimal plating for urban scouting.',
        longDescription:
          'Engineered with urban mobility in mind, the Lightweight Kevlar Vest offers tactical protection without sacrificing breathability or agility. Ideal for reconnaissance and stealth missions in tight, high-risk environments, it provides a snug fit and optimal weight distribution. The vest features moisture-wicking fabric, reinforced seams, and modular pouch attachments for utility tools or mags.',
        color: 'cool black',
        price: 156.99,
        discount: {
          isDiscounted: false,
        },
        whyWeMadeIt:
          'We designed this vest for those who need to move quickly and quietly in urban environments. It balances protection and comfort, ensuring you stay agile during high-risk operations.',
      },
      {
        id: 'AOW002',
        name: 'Heavy-Duty Bulletproof Jacket',
        images: [
          '/images/vest_2.jpg',
          '/images/vest_black_4.jpg',
          '/images/vest_black_1.jpg',
          '/images/light_5.jpg',
          '/images/light_4.jpg',
        ],
        shortDescription: 'Full-torso coverage, reinforced shoulders.',
        longDescription:
          'The Heavy-Duty Bulletproof Jacket is crafted to endure intense combat scenarios. With full-torso Kevlar layering, shoulder reinforcements, and internal ceramic plate slots, this jacket turns the wearer into a walking tank. Thermal lining ensures comfort in colder climates, while expandable sleeves and collar seals protect against shrapnel and weather.',
        price: 189.99,
        discount: {
          isDiscounted: true,
          discountPrice: 161.49, // 15% off 189.99
          percentOff: '15% off',
        },
        color: 'black',
        whyWeMadeIt:
          'This jacket was created for maximum survivability in the harshest conditions. We wanted to offer full-body protection without compromising on comfort or mobility.',
      },
      {
        id: 'AOW003',
        name: 'Urban Camo Covert Armor',
        images: [
          '/images/tact_1.jpg',
          '/images/tact_6.jpg',
          '/images/tact_7.jpg',
          '/images/tact_8.jpg',
          '/images/tact_9.jpg',
        ],
        shortDescription: 'Slim profile, street-ready camo print.',
        longDescription: `Blending into the concrete jungle has never been easier. This covert armor offers discreet protection with a low-visibility camo design and hidden plate pockets. It's built for those who need to avoid detection but stay safe from small arms fire. Durable zippers, urban aesthetic, and lightweight inserts make this ideal for urban survivalists.`,
        color: 'camo',
        price: 204.99,
        tags: ['pro-fitted'],
        whyWeMadeIt:
          'We made this armor for those who need to blend in while staying protected. Its slim, camouflaged design is perfect for covert operations in urban settings.',
      },
      {
        id: 'AOW004',
        name: 'Full-Tactical Overcoat',
        images: [
          '/images/tact_2.jpg',
          '/images/tact_1.jpg',
          '/images/tact_4.jpg',
          '/images/tact_5.jpg',
          '/images/tact_10.jpg',
        ],
        shortDescription:
          'Weather-resistant trench with internal armor lining.',
        longDescription:
          'Combining style with defense, this overcoat features weatherproof exterior with soft-lined Kevlar padding. Adjustable cuffs, wind-sealed collar, and holster-compatible inner pockets make this a top choice for survivalists moving through unpredictable environments.',
        price: 197.49,
        discount: {
          isDiscounted: true,
          discountPrice: 130.49, // 15% off 297.49
          percentOff: '20% off',
        },
        color: 'camo',
        whyWeMadeIt:
          'We wanted to create an overcoat that could withstand the elements and provide reliable protection. It’s designed for those who need to stay ready for anything, rain or shine.',
      },
      {
        id: 'AOW005',
        name: 'Thermal Lined Armor',
        images: [
          '/images/vest_black_3.jpg',
          '/images/vest_black_6.jpg',
          '/images/altvest_3.jpg',
          '/images/vest_7.jpg',
          '/images/vest_black_5.jpg',
        ],
        shortDescription: 'Blends casual style with covert defense.',
        longDescription:
          'A rugged armor designed for comfort and defense, this garment is lined with lightweight Kevlar and includes hidden side zippers for ventilation. The oversized hood accommodates most tactical helmets and integrates seamlessly with comms gear. Comes in neutral tones for low profile travel.',
        tags: ['pro-fitted'],
        color: 'gray',
        price: 385.99,
        whyWeMadeIt:
          'This armor was made for those who want protection without drawing attention. It’s perfect for blending in while staying prepared for unexpected threats.',
      },
      {
        id: 'AOW006',
        name: 'Emergency Rain-Armor Shell',
        images: [
          '/images/altvest_2.jpg',
          '/images/heavy.jpg',
          '/images/heavy_2.jpg',
          '/images/altvest_1.jpg',
          '/images/heavy_3.jpg',
        ],
        shortDescription: 'Waterproof outer shell with reactive armor inserts.',
        longDescription:
          'For wet and wild terrains, this rain shell doesn’t just keep you dry—it keeps you alive. With fast-drying, hydrophobic outer material and removable lightweight armor panels, it’s perfect for ambush-prone wetlands or evacuation routes in storm conditions.',
        color: 'futurisitc black',
        price: 122.99,
        whyWeMadeIt:
          'We built this shell for survival in unpredictable weather and dangerous environments. It’s designed to keep you dry and protected when you need it most.',
      },
    ],
  },
  {
    name: 'Tactical Head Protection',
    id: 'tactical_head_protection',
    products: [
      {
        id: 'THP001',
        name: 'Ballistic Composite Helmet',
        images: [
          '/images/camohelm_4.jpg',
          '/images/camohelm_1.jpg',
          '/images/camohelm_2.jpg',
          '/images/camohelm_3.jpg',
          '/images/camohelm_5.jpg',
        ],
        shortDescription: 'Advanced composite shell, internal padding.',
        longDescription:
          'Built for maximum head protection, this helmet combines a composite outer shell with internal padding and anti-shock webbing to diffuse blunt force trauma. Compatible with visor attachments, comms devices, and thermal mounts.',
        color: 'camo',
        price: 60.99,
        whyWeMadeIt:
          'We made this helmet to offer reliable head protection in high-risk situations. Its compatibility with accessories ensures adaptability for any mission.',
      },
      {
        id: 'THP002',
        name: 'Modular Riot Helmet',
        images: [
          '/images/helmet_2.jpg',
          '/images/helmet_1.jpg',
          '/images/helmet_3.jpg',
          '/images/helmet_4.jpg',
          '/images/helmet_5.jpg',
        ],
        shortDescription: 'Built-in visor, attachable face shield.',
        longDescription:
          'This riot helmet includes a retractable visor, a full-face polycarbonate shield, and cushioned interior lining. Designed for maximum impact resistance and full field-of-vision retention.',
        tags: ['heavy-duty'],
        color: 'black',
        price: 100.45,
        whyWeMadeIt:
          'We designed this helmet for frontline responders who need versatile protection. Its modular features allow quick adaptation to changing threats.',
      },
      {
        id: 'THP003',
        name: 'Light Recon Cap with Armor Liner',
        images: [
          '/images/cap_1.jpg',
          '/images/cap_2.jpg',
          '/images/cap_3.jpg',
          '/images/cap_4.jpg',
          '/images/cap_5.jpg',
        ],
        shortDescription: 'Baseball-style cap with hidden Kevlar lining.',
        longDescription:
          'A casual-looking cap lined with bullet-resistant Kevlar material. Includes breathable mesh panels and adjustable strap to accommodate gear underneath.',
        price: 55.99,
        discount: {
          isDiscounted: true,
          discountPrice: 47.59, // 15% off 55.99
          percentOff: '15% off',
        },
        color: 'camo',
        whyWeMadeIt:
          'This cap was created for discreet protection in everyday scenarios. It’s ideal for those who want to stay safe without looking tactical.',
      },
      {
        id: 'THP004',
        name: 'Tactical Hood with Sensor Mesh',
        images: [
          '/images/sensor_1.jpg',
          '/images/sensor_2.jpg',
          '/images/sensor_3.jpg',
          '/images/sensor_4.jpg',
          '/images/sensor_5.jpg',
        ],
        shortDescription: 'Concealable hood with integrated sensors.',
        longDescription:
          'Worn over helmets or alone, this hood is embedded with thermal mesh to detect infrared heat sources and alert the user via haptic feedback pads.',
        color: 'futuristic',
        price: 98.99,
        whyWeMadeIt:
          'We made this hood to give users an edge in low-visibility environments. Integrated sensors help you detect threats before they see you.',
      },
      {
        id: 'THP005',
        name: 'Comm-Ready Tactical Helmet',
        images: [
          '/images/fullhelm_3.jpg',
          '/images/fullhelm_4.jpg',
          '/images/fullhelm_6.jpg',
          '/images/fullhelm_1.jpg',
          '/images/fullhelm_2.jpg',
        ],
        shortDescription: 'Integrated mic, bone-conducting headset.',
        longDescription:
          'Stay connected in chaos with this high-comms helmet, featuring bone-conducting audio and high-frequency mic that bypasses external noise.',
        tags: ['new'],
        color: 'black',
        price: 99.46,
        whyWeMadeIt:
          'This helmet was made for seamless communication in the field. It ensures you can coordinate with your team even in the noisiest environments.',
      },
      {
        id: 'THP006',
        name: 'Impact Sensor Smart Helmet',
        images: [
          '/images/impact_1.jpg',
          '/images/impact_2.jpg',
          '/images/impact_3.jpg',
          '/images/impact_4.jpg',
          '/images/impact_5.jpg',
        ],
        shortDescription: 'Tracks shock impact and relays data.',
        longDescription:
          'Designed for medevac scenarios, this helmet records impact severity and location, syncing real-time with nearby health HUDs or tactical apps.',
        color: 'gray',
        price: 59.99,
        whyWeMadeIt:
          'We created this helmet to enhance safety and medical response. Real-time impact data helps teams react quickly to injuries in the field.',
      },
    ],
  },
  {
    name: 'Mission-Ready Eye Gear',
    id: 'mission_ready_eye_gear',
    products: [
      {
        id: 'EG001',
        name: 'Sealed Impact-Resistant Goggles',
        images: [
          '/images/googles_1.jpg',
          '/images/googles_2.jpg',
          '/images/googles_3.jpg',
          '/images/googles_4.jpg',
          '/images/googles_5.jpg',
        ],
        shortDescription: 'Full-seal foam gasket, anti-fog coating.',
        longDescription:
          'Sealed against debris and fog, these goggles ensure uninterrupted visibility in harsh environments. Wide field of view and scratch-resistant coating meet military-grade durability standards.',
        price: 71.99,
        discount: {
          isDiscounted: true,
          discountPrice: 61.19, // 15% off 71.99
          percentOff: '15% off',
        },
        color: 'black',
        whyWeMadeIt:
          'We made these goggles to provide clear vision and protection in the toughest conditions. They’re built for those who can’t afford to lose sight of their mission.',
      },
      {
        id: 'EG002',
        name: 'Night-Ops Goggles',
        images: [
          '/images/night_ops_1.jpg',
          '/images/night_ops_2.jpg',
          '/images/night_ops_3.jpg',
          '/images/night_ops_4.jpg',
          '/images/night_ops_5.jpg',
        ],
        shortDescription: 'Passive light amplification without green glow.',
        longDescription:
          'Perfect for stealth ops, these goggles use a reflective mesh to amplify ambient light without creating a visible signature. Ideal for moonlit terrain.',
        color: 'futuristic',
        price: 123.87,
        whyWeMadeIt:
          'These goggles were designed for covert night operations. They let you see in the dark without revealing your position to others.',
      },
      {
        id: 'EG003',
        name: 'Panoramic Ballistic Glasses',
        images: [
          '/images/bal_5.jpg',
          '/images/bal_1.jpg',
          '/images/bal_2.jpg',
          '/images/bal_3.jpg',
          '/images/bal_4.jpg',
        ],
        shortDescription: 'Wraparound design, scratch-resistant lenses.',
        longDescription:
          'Ergonomically shaped to fit close to the face, these glasses resist fragmentation and protect against wind, sand, and UV rays. Great for both day and night patrols.',
        tags: ['new'],
        color: 'cool black',
        price: 99.99,
        whyWeMadeIt:
          'We created these glasses for all-day comfort and protection. Their panoramic design ensures you never miss a detail, no matter the environment.',
      },
      {
        id: 'EG004',
        name: 'Adaptive Tint Combat Visor',
        images: [
          '/images/visor_1.jpg',
          '/images/visor_2.jpg',
          '/images/visor_3.jpg',
          '/images/visor_4.jpg',
          '/images/visor_5.jpg',
        ],
        shortDescription: 'Auto-darkens in bright light.',
        longDescription:
          'Smart lenses detect sudden light changes and instantly adjust tint to protect eyes from flashbangs or explosions. Lightweight and helmet-compatible.',
        color: 'gray',
        price: 100.99,
        whyWeMadeIt:
          'This visor was made to protect your eyes from sudden light hazards. It’s ideal for operators who face unpredictable threats on the battlefield.',
      },
      {
        id: 'EG005',
        name: 'IR-Reflective Stealth Shades',
        images: [
          '/images/Ir_1.jpg',
          '/images/Ir_2.jpg',
          '/images/Ir_3.jpg',
          '/images/Ir_4.jpg',
          '/images/Ir_5.jpg',
        ],
        shortDescription: 'Deflects infrared tracking and heat detection.',
        longDescription:
          'A must for infiltration missions, these shades reduce your heat signature and reflect common infrared tracking wavelengths, keeping your movement undetected.',
        color: 'black',
        price: 76.99,
        whyWeMadeIt:
          'We made these shades for stealth and evasion. They help you avoid detection by advanced surveillance and tracking systems.',
      },
      {
        id: 'EG006',
        name: 'Windproof Tactical Eyewear',
        images: [
          '/images/c_1.jpg',
          '/images/c_5.jpg',
          '/images/c_3.jpg',
          '/images/camo_googles_1.jpg',
          '/images/camo_googles_2.jpg',
        ],
        shortDescription: 'Ideal for desert, high-speed conditions.',
        longDescription:
          'Full seal design with sand-proof vents and anti-fog inner lenses. Designed for operators in high-wind or high-velocity vehicles.',
        tags: ['new'],
        color: 'camo',
        price: 88.99,
        whyWeMadeIt:
          'We designed this eyewear for extreme environments where wind and debris are constant threats. It keeps your vision clear and your eyes protected.',
      },

      {
        id: 'GM001',
        name: 'Full-Seal Tactical Gas Mask',
        images: [
          '/images/gasmask_2.jpg',
          '/images/gasmask_1.jpg',
          '/images/gasmask_3.jpg',
          '/images/gasmask_4.jpg',
          '/images/gasmask_5.jpg',
        ],
        shortDescription: 'Military-grade mask with replaceable filters.',
        longDescription:
          'Designed for chemical, biological, and airborne threats, the Full-Seal Tactical Gas Mask provides full-face protection with a triple-layer filtration system. It features a polycarbonate anti-fog lens, silicone sealant for air-tight comfort, and voice diaphragm for team communication. Replaceable dual filters allow extended use in high-risk areas, and the quick-release harness system ensures rapid donning in emergencies. Perfect for first responders, survivalists, and frontline operatives.',
        price: 159.99,
        discount: {
          isDiscounted: true,
          discountPrice: 127.99,
          percentOff: '20% off',
        },
        tags: ['new'],
        color: 'black',
        whyWeMadeIt:
          'We built this gas mask for those facing hazardous environments. It’s engineered to provide reliable protection and comfort during extended missions.',
      },
    ],
  },
  {
    name: 'Survival Handwear',
    id: 'survival_handwear',
    products: [
      {
        id: 'HW001',
        name: 'Armored Tactical Gloves',
        images: [
          '/images/glove_2.jpg',
          '/images/glove_1.jpg',
          '/images/glove_3.jpg',
          '/images/glove_4.jpg',
          '/images/glove_5.jpg',
        ],
        shortDescription: 'Reinforced knuckles, grip-enhancing palms.',
        longDescription:
          'Combat-tested and reinforced, these gloves are your best bet when facing rubble, blades, or hand-to-hand conflict. Kevlar stitching and non-slip inner palm material provide superior grip and endurance.',
        color: 'black',
        price: 100.56,
        whyWeMadeIt:
          'We made these gloves to protect your hands in the most demanding situations. Their reinforced design ensures you can handle any challenge safely.',
      },
      {
        id: 'HW002',
        name: 'All-Climate Utility Gloves',
        images: [
          '/images/glove_14.jpg',
          '/images/glove_15.jpg',
          '/images/glove_12.jpg',
          '/images/glove_11.jpg',
          '/images/glove_10.jpg',
        ],
        shortDescription: 'Insulated, touchscreen-compatible fingertips.',
        longDescription:
          'Built to handle rain, snow, or desert heat, these gloves use thermal-flex fabric and have reinforced stitching around fingertips for device use.',
        tags: ['new'],
        color: 'camo',
        price: 78.99,
        whyWeMadeIt:
          'These gloves were created for versatility in any climate. They keep your hands warm, dry, and functional, no matter the weather.',
      },
      {
        id: 'HW003',
        name: 'Multi-Tool Mechanic Gloves',
        images: [
          '/images/glove_8.jpg',
          '/images/glove_5.jpg',
          '/images/glove_6.jpg',
          '/images/glove_7.jpg',
          '/images/glove_9.jpg',
        ],
        shortDescription: 'Built-in bit holders and mini-blade pocket.',
        longDescription:
          'Featuring stealth compartments in the cuff and palm for tools, these gloves include a magnetic fastener strip for easy access to small parts.',
        price: 55.99,
        discount: {
          isDiscounted: true,
          discountPrice: 44.79,
          percentOff: '20% off',
        },
        color: 'futuristic',
        whyWeMadeIt:
          'We designed these gloves for those who need tools at their fingertips. They combine protection and utility for field repairs and quick fixes.',
      },
    ],
  },
];
