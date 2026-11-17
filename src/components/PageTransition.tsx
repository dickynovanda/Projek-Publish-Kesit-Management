'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="relative overflow-hidden">
      {/* Animated wave transition overlay on page change */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-end bg-[#1DCD9F]/95 backdrop-blur-md"
      >
        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="w-[200%] flex"
        >
          <svg className="w-1/2 h-28 text-[#000000] fill-current flex-shrink-0" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path d="M0,32 C320,90 640,90 960,32 C1280,-26 1440,32 1440,32 L1440,120 L0,120 Z"></path>
          </svg>
          <svg className="w-1/2 h-28 text-[#000000] fill-current flex-shrink-0" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path d="M0,32 C320,90 640,90 960,32 C1280,-26 1440,32 1440,32 L1440,120 L0,120 Z"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Background fade-in wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
