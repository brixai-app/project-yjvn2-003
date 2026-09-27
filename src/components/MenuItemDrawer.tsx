import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Coffee, ChevronRight } from 'lucide-react';
import { MenuItem } from '@/types';
import { cn } from '@/lib/utils';

export interface MenuItemDrawerProps {
  open?: boolean;
  item?: MenuItem | null;
  onOpenChange?: (open: boolean) => void;
}

export function MenuItemDrawer(props: MenuItemDrawerProps = { open: false, item: null, onOpenChange: () => undefined }) {
  const open = props?.open ?? false;
  const item = props?.item ?? null;
  const onOpenChange = props?.onOpenChange ?? (() => undefined);

  const categoryColors: Record<string, string> = {
    Coffee: 'bg-[#F3E5D8] text-[#6B3A1E]',
    Tea: 'bg-[#E5EFE5] text-[#27462E]',
    Signature: 'bg-[#EAE6F6] text-[#3F2A7A]',
    'Cold Brew': 'bg-[#E3ECF5] text-[#1E3A5F]',
    Pastry: 'bg-[#F6E9E1] text-[#6A3A23]',
    AllDay: 'bg-[#EDEDED] text-[#333333]',
    Seasonal: 'bg-[#FFF4E5] text-[#7A4A16]',
  };

  const formatPrice = (price?: number) => {
    if (typeof price !== 'number') return '—';
    return `₹${price.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content
          className={cn(
            'fixed right-0 top-0 z-50 h-full w-full max-w-md',
            'bg-white shadow-xl border-l border-[#E5E7EB]',
            'data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut',
            'focus:outline-none'
          )}
        >
          <div className="flex h-full flex-col">
            <header className="flex items-center justify-between px-6 py-5 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[#F3F4F6] text-[#222222]">
                  <Coffee className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <Dialog.Title className="text-sm font-semibold tracking-[0.18em] text-[#5F6368] uppercase">
                    GrimyardCafe
                  </Dialog.Title>
                  <Dialog.Description className="text-xs text-[#5F6368]">
                    Quietly curated for unhurried afternoons.
                  </Dialog.Description>
                </div>
              </div>
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close menu item details"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] bg-white text-[#222222] hover:bg-[#F3F4F6] transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </header>

            <div className="flex-1 overflow-y-auto px-6 pb-8 pt-4">
              {item ? (
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-[14px] bg-[#F3F4F6]">
                    <div className="relative aspect-[4/5] w-full">
                      <img
                        src={item?.imageUrl ?? ''}
                        crossOrigin="anonymous"
                        alt={item?.name ?? 'Menu item'}
                        className="h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h2 className="text-xl font-semibold tracking-tight text-[#222222]">
                          {item?.name ?? 'Untitled item'}
                        </h2>
                        <div className="inline-flex items-center gap-2 text-xs text-[#5F6368]">
                          <span
                            className={cn(
                              'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium',
                              categoryColors[item?.category ?? 'Coffee'] ?? 'bg-[#EDEDED] text-[#333333]'
                            )}
                          >
                            {item?.category ?? 'Coffee'}
                          </span>
                          {item?.isNew ? (
                            <span className="text-[11px] tracking-[0.18em] uppercase text-[#B5651D]">
                              New
                            </span>
                          ) : null}
                          {item?.isSpicy ? (
                            <span className="text-[11px] tracking-[0.18em] uppercase text-[#B5651D]">
                              Warm
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <p className="shrink-0 text-base font-semibold text-[#B5651D]">
                        {formatPrice(item?.price)}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-[#5F6368]">
                      {item?.description ?? 'No description available for this item yet.'}
                    </p>

                    {item?.notes ? (
                      <div className="rounded-[12px] border border-dashed border-[#E5E7EB] bg-[#FAFAFA] px-3.5 py-3">
                        <p className="text-xs font-medium tracking-[0.16em] text-[#5F6368] uppercase mb-1.5">
                          Brew notes
                        </p>
                        <p className="text-xs text-[#5F6368] leading-relaxed">
                          {item?.notes ?? ''}
                        </p>
                      </div>
                    ) : null}

                    {item?.tags && item?.tags?.length ? (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item?.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px] text-[#5F6368]"
                          >
                            <ChevronRight className="h-3 w-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center text-sm text-[#5F6368]">
                  <p>Select a menu item to see more details.</p>
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MenuItemDrawer;