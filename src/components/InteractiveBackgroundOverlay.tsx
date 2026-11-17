'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveBackgroundOverlay({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Base photo with Dokumentasi1.jpg: left side dark for text, right side brighter & clearer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Aqua Sprint Kesit Management"
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.95] contrast-[1.05]"
          src="/images/Dokumentasi1.jpg"
        />
        {/* Asymmetric gradient: left side dark for text readability, right side brighter/clearer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/95 via-[#000000]/45 to-[#000000]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/35"></div>
      </div>

      {/* Additional animated overlay images from root folder (overlay1.png & overlay2.png) */}
      <motion.div
        className="absolute -right-12 -top-12 w-80 h-80 pointer-events-none z-1 opacity-65 mix-blend-screen filter blur-[0.5px]"
        animate={{
          y: [0, 18, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src="/images/overlays/overlay1.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        className="absolute right-1/4 bottom-0 w-72 h-72 pointer-events-none z-1 opacity-60 mix-blend-screen filter blur-[1px]"
        animate={{
          y: [0, -22, 0],
          rotate: [0, -7, 0],
          scale: [1, 1.07, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <img src="/images/overlays/overlay2.png" alt="" className="w-full h-full object-contain" />
      </motion.div>

      {/* Interactive mouse spotlight making the right side even more dynamic and bright */}
      <div
        className="absolute inset-0 pointer-events-none z-5 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 450px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 230, 118, 0.25), rgba(0, 0, 0, 0.2) 75%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
