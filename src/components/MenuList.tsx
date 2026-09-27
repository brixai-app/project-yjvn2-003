import React, { useEffect, useMemo, useState } from 'react';
import { Coffee, ChevronRight } from 'lucide-react';
import { MenuItem } from '@/types';
import { getRandomMenuSelection } from '@/data/mockData';
import MenuItemCard from '@/components/MenuItemCard';
import MenuItemDrawer from '@/components/MenuItemDrawer';
import { cn } from '@/lib/utils';

export interface MenuListProps {
  className?: string;
}

export function MenuList(props: MenuListProps = { className: '' }) {
  const { className } = props;
  const [items, setItems] = useState<MenuItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const selection = getRandomMenuSelection(10);
    setItems(selection ?? []);
  }, []);

  const featuredItems = useMemo(
    () => (items ?? []).filter((item) => item?.isFeatured).slice(0, 3),
    [items]
  );

  const mainItems = useMemo(() => {
    const featuredIds = new Set((featuredItems ?? []).map((i) => i?.id));
    return (items ?? []).filter((item) => !featuredIds.has(item?.id ?? ''));
  }, [items, featuredItems]);

  const handleOpenItem = (item: MenuItem) => {
    setSelectedItem(item ?? null);
    setDrawerOpen(true);
  };

  const handleDrawerOpenChange = (open: boolean) => {
    setDrawerOpen(open ?? false);
    if (!open) {
      setSelectedItem(null);
    }
  };

  return (
    <section className={cn('w-full max-w-3xl mx-auto space-y-10', className ?? '')}>
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-[14px] bg-[#FFFFFF] border border-[#E5E7EB] flex items-center justify-center shadow-sm">
            <Coffee className="h-4 w-4 text-[#B5651D]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5F6368]">
              GrimyardCafe Menu
            </p>
            <p className="text-sm text-[#5F6368]">
              A rotating selection of ten quiet favourites, refreshed on each visit.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-md border border-[#E5E7EB] bg-white text-xs uppercase tracking-[0.18em] text-[#222222]">
            Coffee
          </span>
          <span className="px-3 py-1 rounded-md border border-[#E5E7EB] bg-white text-xs uppercase tracking-[0.18em] text-[#5F6368]">
            All Day
          </span>
          <span className="px-3 py-1 rounded-md border border-[#E5E7EB] bg-white text-xs uppercase tracking-[0.18em] text-[#5F6368]">
            Seasonal
          </span>
        </div>
      </header>

      {featuredItems?.length ? (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.22em] text-[#5F6368]">
              Featured today
            </h2>
            <div className="flex items-center gap-1 text-[11px] text-[#5F6368]">
              <span>Curated for this roast</span>
              <ChevronRight className="h-3 w-3" />
            </div>
          </div>
          <div className="space-y-3">
            {featuredItems.map((item) => (
              <MenuItemCard
                key={item?.id}
                item={item}
                onOpen={handleOpenItem}
                className="border border-[#E5E7EB] bg-white"
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#5F6368]">
          Pour-over of the day
        </h2>
        <div className="space-y-3">
          {(mainItems?.length ? mainItems : items).map((item) => (
            <MenuItemCard key={item?.id} item={item} onOpen={handleOpenItem} />
          ))}
        </div>
      </section>

      <MenuItemDrawer
        open={drawerOpen}
        onOpenChange={handleDrawerOpenChange}
        item={selectedItem ?? undefined}
      />
    </section>
  );
}

export default MenuList;