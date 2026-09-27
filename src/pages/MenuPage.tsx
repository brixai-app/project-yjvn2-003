import React, { useEffect, useMemo, useState } from 'react';
import { Coffee, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { MenuItem, MenuCategory } from '@/types';
import { getRandomMenuSelection } from '@/data/mockData';
import MenuList from '@/components/MenuList';
import MenuItemDrawer from '@/components/MenuItemDrawer';

export type MenuFilterCategory = 'All' | 'Coffee' | 'Tea' | 'Pastry' | 'Snack';

export interface MenuPageProps {
  initialCategory?: MenuFilterCategory;
}

const categories: MenuFilterCategory[] = ['All', 'Coffee', 'Tea', 'Pastry', 'Snack'];

export function MenuPage(props: MenuPageProps = { initialCategory: 'All' }) {
  const { initialCategory } = props;
  const [selectedCategory, setSelectedCategory] = useState<MenuFilterCategory>(initialCategory ?? 'All');
  const [items, setItems] = useState<MenuItem[]>([]);
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const selection = getRandomMenuSelection(10) ?? [];
    setItems(selection);
    toast('Menu refreshed', { description: 'Today’s selection was curated just for you.' });
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return items ?? [];
    return (items ?? []).filter((item) => item?.category === (selectedCategory as MenuCategory));
  }, [items, selectedCategory]);

  const handleOpenItem = (item: MenuItem) => {
    setActiveItem(item ?? null);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222222]">
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-10 md:px-8 lg:px-12">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5F6368]">
              <Coffee className="h-4 w-4" />
              GrimyardCafe
            </div>
            <h1 className="font-light tracking-tight text-4xl leading-tight md:text-5xl lg:text-6xl">
              Quiet mornings,
              <br />
              considered pours.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-[#5F6368]">
              A pared-back curation of coffee, tea, and small bites. Brewed slow, served warm, designed for lingering.
            </p>
            <button
              type="button"
              onClick={() => {
                const selection = getRandomMenuSelection(10) ?? [];
                setItems(selection);
                setActiveItem(null);
                setDrawerOpen(false);
                toast('Menu refreshed', { description: 'A fresh rotation of today’s favorites.' });
              }}
              className="inline-flex w-fit items-center gap-2 border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#222222] transition-colors hover:border-[#B5651D] hover:text-[#000000]"
            >
              Refresh curation
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
          <div className="relative overflow-hidden rounded-[14px] bg-[#111111]">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="GrimyardCafe interior"
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-white/80">
              <div className="space-y-1">
                <p className="font-semibold tracking-[0.18em] uppercase">Today’s room tone</p>
                <p className="text-[11px] text-white/70">Soft jazz, low chatter, and warm porcelain.</p>
              </div>
              <span className="rounded-md bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]">
                All day menu
              </span>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.19em] transition-colors ${
                  selectedCategory === cat
                    ? 'border-[#B5651D] bg-[#B5651D]/5 text-[#000000]'
                    : 'border-[#E5E7EB] bg-white text-[#5F6368] hover:border-[#B5651D]/70 hover:text-[#222222]'
                } rounded-md`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="border-t border-[#E5E7EB] pt-6">
            <MenuList
              className="space-y-4"
            >
              {filteredItems.map((item) => (
                <div key={item?.id ?? ''}>
                  
                </div>
              ))}
            </MenuList>
          </div>
        </section>
      </main>
      <MenuItemDrawer
        open={drawerOpen}
        item={activeItem}
        onOpenChange={(open) => {
          setDrawerOpen(open ?? false);
          if (!open) setActiveItem(null);
        }}
      />
    </div>
  );
}

export default MenuPage;