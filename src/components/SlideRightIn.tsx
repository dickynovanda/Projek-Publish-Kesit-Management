'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SlideRightIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
