'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const glyphs = '0123456789';

export default function NumberDecode({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const active = useInView(ref, { amount: 0.4, once: false });
  const zeroValue = value.replace(/\d/g, '0');
  const [display, setDisplay] = useState(zeroValue);

  useEffect(() => {
    if (!active) {
      setDisplay(zeroValue);
      return;
    }

    // Keep the visible starting state at zero before decoding begins.
    setDisplay(zeroValue);
    let frame = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        frame += 1;
        setDisplay(value.split('').map((character, index) => {
          if (!/\d/.test(character)) return character;
          return frame >= 24 - index * 4 ? character : glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join(''));
        if (frame >= 24) window.clearInterval(interval);
      }, 55);
    }, 350);

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, [active, value, zeroValue]);

  return <motion.span ref={ref} initial={{ opacity: 0, y: 10 }} animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.35 }}>{display}</motion.span>;
}
