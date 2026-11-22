'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const container = document.getElementById('page-scroll');
    const hash = window.location.hash;

    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    } else {
      container?.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname]);

  return <div className="relative overflow-hidden">{children}</div>;
}
