import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { MenuItem } from '@/types';
import { formatPrice } from '@/lib/formatPrice';
import { cn } from '@/lib/utils';
import commaUrl from '@/assets/brand/comma.webp';

interface ProductSheetProps {
  item: MenuItem | null;
  onClose: () => void;
}

const HISTORY_KEY = 'productSheet';

export const ProductSheet = ({ item, onClose }: ProductSheetProps) => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showDetail, setShowDetail] = useState(false);

  // The sheet is a history entry, so the phone's back button closes it instead of leaving the site.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !item) return;

    setShowDetail(false);
    if (!dialog.open) dialog.showModal();
    titleRef.current?.focus();
    if (window.history.state?.[HISTORY_KEY] !== item.id) {
      window.history.pushState({ [HISTORY_KEY]: item.id }, '');
    }

    const handlePopState = () => dialog.close();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [item]);

  const handleClose = () => {
    if (window.history.state?.[HISTORY_KEY]) window.history.back();
    onClose();
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  const image = showDetail && item?.imageDetail ? item.imageDetail : item?.image;

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={handleBackdropClick}
      aria-labelledby="product-sheet-title"
      className={cn(
        'fixed inset-x-0 bottom-0 top-auto m-0 w-full max-w-none rounded-t-2xl bg-white p-0 text-gray-800 shadow-2xl',
        'max-h-[92vh] supports-[height:1svh]:max-h-[92svh] overflow-y-auto',
        'open:animate-sheet-up backdrop:bg-coffee/70 backdrop:backdrop-blur-sm',
        'md:inset-0 md:m-auto md:max-h-[min(42rem,calc(100%-4rem))] md:w-[min(56rem,calc(100%-4rem))] md:rounded-2xl md:open:animate-sheet-in',
      )}
    >
      {item && (
        <div className="relative md:grid md:grid-cols-2">
          <div className="relative bg-cream">
            {image ? (
              <img
                key={image}
                src={image}
                alt={item.name}
                className="aspect-[4/5] max-h-[52vh] w-full object-cover md:h-full md:max-h-none"
              />
            ) : (
              <div className="grid aspect-[4/5] max-h-[40vh] w-full place-items-center md:h-full md:max-h-none">
                <img src={commaUrl} alt="" width={240} height={346} className="h-24 w-auto opacity-80" />
              </div>
            )}

            {item.imageDetail && (
              <div role="group" aria-label={t('sheet.views')} className="absolute bottom-3 left-3 flex gap-2">
                {[
                  { detail: false, label: t('sheet.viewWhole') },
                  { detail: true, label: t('sheet.viewClose') },
                ].map(({ detail, label }) => (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={showDetail === detail}
                    onClick={() => setShowDetail(detail)}
                    className={cn(
                      'min-h-11 rounded-full px-4 font-display text-sm tracking-wide shadow-sm transition-colors',
                      showDetail === detail ? 'bg-coffee text-cream' : 'bg-white/90 text-coffee hover:bg-white',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="px-5 pb-10 pt-6 md:flex md:flex-col md:justify-center md:px-10 md:py-12">
            <h2
              id="product-sheet-title"
              ref={titleRef}
              tabIndex={-1}
              className="font-display text-2xl leading-tight tracking-wide text-coffee outline-none md:text-3xl"
            >
              {item.name}
            </h2>
            {item.price != null && (
              <p className="mt-2 font-display text-2xl font-bold tabular-nums text-coffee">{formatPrice(item.price)}</p>
            )}
            {item.description && (
              <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-gray-700">{item.description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={t('actions.close')}
            className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-coffee shadow-md transition-colors hover:bg-white"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
};
