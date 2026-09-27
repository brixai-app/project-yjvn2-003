export type MenuCategory =
  | 'Coffee'
  | 'Tea'
  | 'Signature'
  | 'Cold Brew'
  | 'Pastry'
  | 'AllDay'
  | 'Seasonal';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  imageUrl: string;
  tags?: string[];
  isFeatured?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  notes?: string;
}

export type MenuItemInput = Partial<MenuItem> & {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  imageUrl: string;
};

export function isMenuCategory(value: unknown): value is MenuCategory {
  const allowed: MenuCategory[] = [
    'Coffee',
    'Tea',
    'Signature',
    'Cold Brew',
    'Pastry',
    'AllDay',
    'Seasonal',
  ];
  return typeof value === 'string' && allowed.includes(value as MenuCategory);
}

export function isMenuItem(value: unknown): value is MenuItem {
  const v = value as MenuItem | null | undefined;
  if (!v) return false;
  return (
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    typeof v.description === 'string' &&
    typeof v.price === 'number' &&
    typeof v.imageUrl === 'string' &&
    isMenuCategory(v.category)
  );
}

export function normalizeMenuItem(input: MenuItemInput): MenuItem {
  const base: MenuItem = {
    id: input.id,
    name: input.name,
    description: input.description ?? '',
    category: input.category,
    price: Number.isFinite(input.price) ? input.price : 0,
    imageUrl: input.imageUrl,
    tags: input.tags ?? [],
    isFeatured: input.isFeatured ?? false,
    isSpicy: input.isSpicy ?? false,
    isNew: input.isNew ?? false,
    notes: input.notes ?? '',
  };
  return base;
}

export type { MenuCategory as TMenuCategory, MenuItem as TMenuItem };

const types = {};
export default types;