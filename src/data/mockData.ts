import { normalizeMenuItem, type MenuItem } from '@/types';

export const mockData: MenuItem[] = [
  normalizeMenuItem({
    id: 'espresso-noir',
    name: 'Espresso Noir',
    category: 'Coffee',
    price: 180,
    imageUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description: 'Dense, syrupy single-origin espresso pulled short for a deep, smoky finish.',
    tags: ['single origin', 'double shot'],
    isFeatured: true,
    notes: 'Best enjoyed without sugar to appreciate the natural bittersweet cocoa notes.',
  }),
  normalizeMenuItem({
    id: 'midnight-flat-white',
    name: 'Midnight Flat White',
    category: 'Coffee',
    price: 260,
    imageUrl:
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    description:
      'Velvety microfoam poured over a ristretto base, finished with a restrained latte art rosetta.',
    tags: ['microfoam', 'balanced'],
    isFeatured: true,
    isNew: true,
    notes: 'Balanced enough to pair with both sweet and savory pastries.',
  }),
  normalizeMenuItem({
    id: 'graveyard-cold-brew',
    name: 'Graveyard Cold Brew',
    category: 'Cold Brew',
    price: 280,
    imageUrl:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    description:
      '18-hour slow-steeped cold brew with notes of dark chocolate, black cherry, and smoke.',
    tags: ['slow brew', 'low acidity'],
    isFeatured: true,
    notes: 'Served over a single large cube to preserve clarity and flavor.',
  }),
  normalizeMenuItem({
    id: 'charcoal-vanilla-latte',
    name: 'Charcoal Vanilla Latte',
    category: 'Signature',
    price: 310,
    imageUrl:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description:
      'Smoked vanilla bean syrup folded into espresso and milk, dusted with activated charcoal.',
    tags: ['signature', 'smoked vanilla'],
    isFeatured: true,
    isNew: true,
  }),
  normalizeMenuItem({
    id: 'embers-spiced-mocha',
    name: 'Embers Spiced Mocha',
    category: 'Signature',
    price: 320,
    imageUrl:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    description:
      'Dark chocolate mocha laced with cayenne, smoked cinnamon, and a whisper of orange oil.',
    tags: ['chocolate', 'warming'],
    isSpicy: true,
    notes: 'Heat builds slowly; ask for “soft embers” for a gentler pour.',
  }),
  normalizeMenuItem({
    id: 'ashen-tonic',
    name: 'Ashen Espresso Tonic',
    category: 'Cold Brew',
    price: 295,
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description:
      'Layered espresso over charcoal tonic with grapefruit peel and a single star anise.',
    tags: ['sparkling', 'citrus'],
  }),
  normalizeMenuItem({
    id: 'smokehouse-pour-over',
    name: 'Smokehouse Pour Over',
    category: 'Coffee',
    price: 260,
    imageUrl:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85',
    description:
      'Hand-poured seasonal single origin with slow, circular extractions for clarity and depth.',
    tags: ['pour over', 'seasonal'],
    isFeatured: true,
  }),
  normalizeMenuItem({
    id: 'twilight-chai',
    name: 'Twilight Charcoal Chai',
    category: 'Tea',
    price: 240,
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description:
      'Black tea, jaggery, and a shadowy spice blend, finished with a smoky milk cap.',
    tags: ['masala', 'comfort'],
    isSpicy: true,
  }),
  normalizeMenuItem({
    id: 'bonewhite-cappuccino',
    name: 'Bonewhite Cappuccino',
    category: 'Coffee',
    price: 250,
    imageUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description:
      'Classic Italian-style cappuccino with a dry foam crown and restrained bitterness.',
    tags: ['classic', 'balanced'],
  }),
  normalizeMenuItem({
    id: 'midnight-matcha',
    name: 'Midnight Matcha Ritual',
    category: 'Tea',
    price: 290,
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description:
      'Ceremonial-grade matcha whisked with oat milk and black sesame crumble.',
    tags: ['matcha', 'oat milk'],
    isNew: true,
  }),
  normalizeMenuItem({
    id: 'caramel-tomb-tart',
    name: 'Caramel Tomb Tart',
    category: 'Pastry',
    price: 210,
    imageUrl:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description:
      'Buttery shortcrust shell filled with smoked salt caramel and a thin dark chocolate lid.',
    tags: ['pastry', 'caramel'],
  }),
  normalizeMenuItem({
    id: 'black-sesame-croissant',
    name: 'Black Sesame Croissant',
    category: 'Pastry',
    price: 190,
    imageUrl:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    description:
      'Laminated butter layers wrapped around a toasted black sesame and honey paste.',
    tags: ['viennoiserie', 'nutty'],
    isFeatured: true,
  }),
  normalizeMenuItem({
    id: 'dusk-toast',
    name: 'Dusk Sourdough Toast',
    category: 'AllDay',
    price: 230,
    imageUrl:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description:
      'Thick-cut sourdough with whipped ricotta, charred figs, and black pepper honey.',
    tags: ['all-day', 'savoury-sweet'],
  }),
  normalizeMenuItem({
    id: 'cinder-orange-fizz',
    name: 'Cinder Orange Fizz',
    category: 'Seasonal',
    price: 270,
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    description:
      'Burnt orange cordial, espresso, and soda over ice with a smoked rosemary sprig.',
    tags: ['seasonal', 'citrus'],
    isFeatured: true,
    isNew: true,
  }),
  normalizeMenuItem({
    id: 'afterglow-affogato',
    name: 'Afterglow Affogato',
    category: 'Signature',
    price: 300,
    imageUrl:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    description:
      'Vanilla bean gelato drowned in a double shot of espresso, finished with cacao nibs.',
    tags: ['dessert', 'classic'],
    notes: 'Allow the espresso to sink for a moment before the first spoonful.',
  }),
];

export function getRandomMenuSelection(count: number): MenuItem[] {
  const safeCount = Number.isFinite(count) && count > 0 ? Math.floor(count) : 10;
  const pool = [...mockData];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pool[i];
    pool[i] = pool[j];
    pool[j] = temp;
  }
  return pool.slice(0, Math.min(safeCount, pool.length));
}

export default mockData;