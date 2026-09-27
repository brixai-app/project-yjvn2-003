import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, ChevronRight } from 'lucide-react';
import { MenuItem } from '@/types';
import { cn } from '@/lib/utils';

export interface MenuItemCardProps {
  item?: MenuItem;
  onOpen?: (item: MenuItem) => void;
  className?: string;
}

export function MenuItemCard(props: MenuItemCardProps) {
  const { item, onOpen, className } = props;
  const safeItem: MenuItem | null = item ?? null;

  if (!safeItem) {
    return null;
  }

  const handleOpen = () => {
    if (onOpen && safeItem) {
      onOpen(safeItem);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!safeItem) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onOpen) {
        onOpen(safeItem);
      }
    }
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -2, scale: 1.03 }}
      whileFocus={{ y: -2, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={cn(
        'group flex items-center justify-between gap-4 rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3',
        'cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#B5651D]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]',
        className
      )}
      role="button"
      tabIndex={0}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      aria-label={`${safeItem?.name ?? 'Menu item'} details`}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-md bg-[#FAFAFA]">
          <img
            src={safeItem?.imageUrl ?? ''}
            crossOrigin="anonymous"
            alt={safeItem?.name ?? 'Menu item'}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-black/0" />
        </div>

        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-medium text-[#222222]">
              {safeItem?.name ?? ''}
            </h3>
            <Coffee className="h-4 w-4 text-[#5F6368]" aria-hidden="true" />
          </div>

          {safeItem?.description ? (
            <p className="line-clamp-2 text-sm text-[#5F6368]">
              {safeItem?.description ?? ''}
            </p>
          ) : null}

          <div className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#5F6368]">
            <span className="rounded-sm border border-[#E5E7EB] bg-[#FAFAFA] px-2 py-0.5">
              {safeItem?.category ?? ''}
            </span>
            {safeItem?.isNew ? (
              <span className="rounded-sm bg-[#B5651D]/10 px-2 py-0.5 text-[0.65rem] font-semibold text-[#B5651D]">
                New
              </span>
            ) : null}
            {safeItem?.isSpicy ? (
              <span className="rounded-sm bg-[#222222] px-2 py-0.5 text-[0.65rem] font-semibold text-white">
                Spiced
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="font-semibold text-[#B5651D]">
          ₹{(safeItem?.price ?? 0).toFixed(0)}
        </span>
        <ChevronRight
          className="h-4 w-4 text-[#5F6368] transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

export default MenuItemCard;