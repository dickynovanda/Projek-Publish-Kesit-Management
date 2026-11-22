'use client';

import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';
import PageTransition from '@/components/PageTransition';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className="font-sans bg-[#171916] text-[#f3ecd8] antialiased selection:bg-[#adff5f] selection:text-[#000000]">
        <div className="app-shell">
          <div className="relative z-50 shrink-0">
            <MainHeader />
          </div>
          <div className="relative isolate min-h-0 flex-1 overflow-hidden">
            <div aria-hidden="true" className="site-watermark pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
              <svg width="0" height="0" aria-hidden="true" className="absolute">
                <defs>
                  <filter id="watermark-green" colorInterpolationFilters="sRGB">
                    <feColorMatrix type="matrix" values="0.1442 0.4852 0.049 0 0 0.2126 0.7152 0.0722 0 0 0.0792 0.2664 0.0269 0 0 0 0 0 1 0" />
                  </filter>
                  <filter id="watermark-green-transparent" colorInterpolationFilters="sRGB">
                    <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 8 0 0 -0.12" />
                    <feColorMatrix type="matrix" values="0.1442 0.4852 0.049 0 0 0.2126 0.7152 0.0722 0 0 0.0792 0.2664 0.0269 0 0 0 0 0 1 0" />
                  </filter>
                </defs>
              </svg>
              <div className="watermark-pool">
                <svg viewBox="0 990 365 450" preserveAspectRatio="xMidYMid slice" className="watermark-pool-image" focusable="false">
                  <image href="/images/background-kolam.jpeg" width="893" height="1600" />
                </svg>
              </div>
              {['left', 'right'].map((side) => (
                <div key={side} className={`watermark-puppet watermark-puppet-${side}`}>
                  <img src={side === 'right' ? '/images/Wayang Neon Duryudana Bermahkota Kerajaan.png' : '/images/wayang-watermark.png'} alt="" width={1014} height={1573} draggable={false} className={`site-watermark-image ${side === 'left' ? 'watermark-puppet-mirrored' : ''}`} />
                </div>
              ))}
            </div>
            <div id="page-scroll" className="relative z-10 h-full overflow-y-auto overscroll-contain">
              <PageTransition>{children}</PageTransition>
              <MainFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
