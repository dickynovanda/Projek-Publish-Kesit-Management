'use client';

import { useEffect, useState } from 'react';

const PLAY_ONCE_PER_SESSION = false;

export default function KesitIntro() {
  const [visible, setVisible] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeIntro = () => {
    setClosing(true);
    window.setTimeout(() => {
      sessionStorage.setItem('kesitIntroPlayed-v4', '1');
      window.dispatchEvent(new Event('kesit-intro-finished'));
      document.documentElement.style.overflow = '';
      setVisible(false);
    }, 700);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    const played = sessionStorage.getItem('kesitIntroPlayed-v4');
    if (PLAY_ONCE_PER_SESSION && played) {
      setVisible(false);
      return;
    }

    document.documentElement.style.overflow = 'hidden';
    const start = window.setTimeout(() => setReveal(true), 250);
    const finish = window.setTimeout(() => closeIntro(), 3300);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(finish);
      document.documentElement.style.overflow = '';
    };
  }, []);

  const finish = () => {
    closeIntro();
  };

  if (!visible) return null;

  return (
    <div onClick={finish} role="dialog" aria-label="Intro Kesit Management" aria-modal="true" className={`fixed inset-0 z-[99999] grid cursor-pointer place-items-center bg-black transition-opacity duration-700 ${closing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative flex w-[min(92vw,900px)] flex-col items-center justify-center gap-3 overflow-hidden px-6 sm:flex-row sm:gap-7">
        <img
          src="/images/logo-kesit-putih-simbol.png"
          alt="Logo Kesit"
          className={`h-32 w-32 shrink-0 object-contain transition-[clip-path,transform,opacity] duration-[900ms] ease-out sm:h-36 sm:w-36 ${reveal ? 'translate-x-0 opacity-100 [clip-path:inset(0_0%_0_0)]' : '-translate-x-8 opacity-0 [clip-path:inset(0_100%_0_0)]'}`}
        />
        <img
          src="/images/logo-kesit-management-putih.png"
          alt="Kesit Management"
          className={`h-auto w-full max-w-[520px] object-contain transition-[clip-path,transform,opacity] delay-150 duration-[1400ms] ease-out ${reveal ? 'translate-x-0 opacity-100 [clip-path:inset(0_0%_0_0)]' : 'translate-x-8 opacity-0 [clip-path:inset(0_100%_0_0)]'}`}
        />
        <div className={`absolute left-[13%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,.7)] transition-all duration-700 ${reveal ? 'scale-100 opacity-0' : 'scale-0 opacity-100'}`} />
      </div>
    </div>
  );
}
