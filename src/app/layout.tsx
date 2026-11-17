'use client';

import React from 'react';
import type { Metadata } from 'next';
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
      <body className="font-sans bg-[#FFFFFF] text-[#222222] antialiased selection:bg-[#1DCD9F] selection:text-[#000000]">
        <MainHeader />
        <PageTransition>{children}</PageTransition>
        <MainFooter />
      </body>
    </html>
  );
}
