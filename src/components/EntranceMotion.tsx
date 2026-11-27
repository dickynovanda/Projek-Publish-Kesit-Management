'use client';

import { useEffect } from 'react';

export default function EntranceMotion({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.getElementById('page-scroll');
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>('main a, main button, main .about-card');
    const galleryImages = root.querySelectorAll<HTMLElement>('.gallery-popup');
    let previousScrollTop = root.scrollTop;
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
    }, { root, threshold: 0.15 });
    targets.forEach((target) => { target.classList.add('entrance-popup'); observer.observe(target); });
    galleryImages.forEach((image) => { image.classList.add('entrance-popup'); observer.observe(image); });
    // Observe after styles are applied so the initial hidden state is painted first.
    requestAnimationFrame(() => galleryImages.forEach((image) => observer.observe(image)));
    return () => observer.disconnect();
  }, []);
  return children;
}
