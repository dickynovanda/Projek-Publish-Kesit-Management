'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function EntranceMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.getElementById('page-scroll');
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('main a:not(.hero-animated), main button, main .about-card, main .coach-card, main .program-card, main .place-card');
    const galleryImages = root.querySelectorAll<HTMLElement>('.gallery-popup');
    const coachCards = root.querySelectorAll<HTMLElement>('.coach-card');
    const programCards = root.querySelectorAll<HTMLElement>('.program-card');
    const placeCards = root.querySelectorAll<HTMLElement>('.place-card');
    const animatedCards = Array.from(coachCards).concat(Array.from(programCards), Array.from(placeCards));
    const coachScroller = root.querySelector<HTMLElement>('.program-scroller, .coach-scroller, .place-scroller') ?? animatedCards[0]?.parentElement ?? null;
    let previousScrollTop = root.scrollTop;
    const updateVerticalCards = () => {
      const bounds = root.getBoundingClientRect();
      animatedCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const visible = rect.bottom > bounds.top + 24 && rect.top < bounds.bottom - 24;
        card.classList.toggle('entrance-popup-visible', visible);
      });
    };
    const observer = new IntersectionObserver((entries) => {
      const scrollingDown = root.scrollTop >= previousScrollTop;
      previousScrollTop = root.scrollTop;
      entries.forEach(({ target, isIntersecting }) => {
        const element = target as HTMLElement;
        if (element.classList.contains('gallery-popup')) {
          const index = Number(element.dataset.galleryIndex ?? 0);
          const total = galleryImages.length;
          element.style.setProperty('--popup-delay', `${(scrollingDown ? index : total - 1 - index) * 120}ms`);
        }
        element.classList.toggle('entrance-popup-visible', isIntersecting);
      });
    }, { root, threshold: 0, rootMargin: '12% 8% 12% 8%' });
    targets.forEach((target) => { target.classList.remove('entrance-popup-visible'); target.classList.add('entrance-popup'); observer.observe(target); });
    galleryImages.forEach((image) => { image.classList.add('entrance-popup'); observer.observe(image); });
    const programObserver = coachScroller ? new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => target.classList.toggle('entrance-popup-visible', isIntersecting)), { root: coachScroller, threshold: 0.01, rootMargin: '0px 10% 0px 10%' }) : null;
    animatedCards.forEach((card) => {
      card.classList.remove('entrance-popup-visible');
      card.classList.add('entrance-popup');
      programObserver?.observe(card);
    });
    coachScroller?.addEventListener('scroll', () => animatedCards.forEach((card) => programObserver?.observe(card)), { passive: true });
    root.addEventListener('scroll', updateVerticalCards, { passive: true });
    requestAnimationFrame(updateVerticalCards);
    window.setTimeout(updateVerticalCards, 80);
    // Observe after styles are applied so the initial hidden state is painted first.
    requestAnimationFrame(() => galleryImages.forEach((image) => observer.observe(image)));
    return () => {
      observer.disconnect();
      programObserver?.disconnect();
      root.removeEventListener('scroll', updateVerticalCards);
    };
  }, [pathname]);
  return children;
}
