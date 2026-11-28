'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function WordStagger({ children, className = '', active = true, playOnActivate = false }: { children: string; className?: string; active?: boolean; playOnActivate?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const [activated, setActivated] = useState(false);
  useEffect(() => {
    if (!active) return;
    if (playOnActivate) {
      setActivated(false);
      const timer = window.setTimeout(() => setActivated(true), 16);
      return () => window.clearTimeout(timer);
    }
    setActivated(true);
  }, [active, playOnActivate]);
  const words = children.split(/\s+/);
  const show = active && (inView || activated);
  const animationKey = `${active}-${playOnActivate}`;
  return <motion.span key={animationKey} ref={ref} className={`inline ${className}`} aria-label={children}>{words.map((word, index) => <motion.span key={`${word}-${index}`} className="inline-block whitespace-nowrap will-change-transform" initial={{ opacity: 0, y: 14, clipPath: 'inset(100% 0 0)' }} animate={show ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0)' } : { opacity: 0, y: 14, clipPath: 'inset(100% 0 0)' }} transition={{ duration: 0.5, delay: index * 0.075, ease: [0.22, 1, 0.36, 1] }}>{word}{index < words.length - 1 ? '\u00a0' : ''}</motion.span>)}</motion.span>;
}

export function Pop({ children, className = '', active = true, playOnActivate = false }: { children: React.ReactNode; className?: string; active?: boolean; playOnActivate?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  return <motion.span ref={ref} className={`inline-block ${className}`} initial={{ opacity: 0, scale: 0.75, y: 12 }} animate={active && (inView || playOnActivate) ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.75, y: 12 }} transition={{ type: 'spring', stiffness: 180, damping: 14 }}>{children}</motion.span>;
}
