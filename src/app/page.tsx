'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (current) => `${Math.round(current)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration: 1.8, ease: 'easeOut' });
      return () => animation.stop();
    }
    count.set(0);
  }, [count, isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
  const [counts, setCounts] = useState([0, 0, 0]);
  useEffect(() => {
    const timer = window.setInterval(() => setCounts((current) => current.map((value, index) => Math.min([120, 4, 18][index], value + Math.max(1, Math.ceil([120, 4, 18][index] / 40))))), 35);
    return () => window.clearInterval(timer);
  }, []);

  const wordStagger = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const } }),
  };

  return (
    <main className="font-sans bg-[#FFFFFF] text-[#222222] antialiased selection:bg-[#1DCD9F] selection:text-[#000000] min-h-screen flex flex-col">
      <section className="relative bg-[#000000] min-h-[520px] sm:min-h-[560px] flex items-center pt-24 pb-28 overflow-hidden text-[#FFFFFF]" data-purpose="hero-section">
        <div className="absolute inset-0 z-0">
          <img alt="Aqua Sprint Kesit Management" className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-[center_35%] rotate-0 filter brightness-[1.25] contrast-[1.05]" src="/images/Dokumentasi1.jpg" />
          <div className="absolute inset-y-0 left-0 w-full pointer-events-none" style={{ background: 'linear-gradient(to right, #000000 0%, #000000 28%, rgba(0, 0, 0, 0.98) 42%, rgba(0, 0, 0, 0.78) 54%, rgba(0, 0, 0, 0.34) 68%, rgba(0, 0, 0, 0) 84%)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <div className="relative max-w-2xl">
            <motion.img src="/images/overlay_wayang.png" alt="" aria-hidden="true" className="pointer-events-none absolute left-[-12rem] top-[-1rem] z-0 h-[34rem] w-auto object-contain opacity-40 sm:left-[-8rem] sm:top-[-4rem]" initial={{ x: -220, opacity: 0 }} animate={{ x: 0, opacity: 0.4, rotate: [16, 24, 16] }} transition={{ x: { delay: 1.32, duration: 0.8, ease: 'easeOut' }, opacity: { delay: 1.32, duration: 0.8, ease: 'easeOut' }, rotate: { delay: 2.12, duration: 5, repeat: Infinity, ease: 'easeInOut' } }} style={{ transformOrigin: '50% 90%' }} />
            <div className="relative z-10 flex gap-1 text-xs uppercase tracking-widest font-extrabold mb-4">
              <motion.span initial="hidden" animate="visible" custom={0} variants={wordStagger} className="text-[#FFFFFF]">KLUB &amp;
              </motion.span>
              <motion.span initial="hidden" animate="visible" custom={1} variants={wordStagger} className="text-[#1DCD9F]">PUSAT LATIHAN RENANG</motion.span>
              </div>
            <h1 className="relative z-10 text-[2rem] sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 whitespace-nowrap" style={{ fontFamily: "'Lequire', sans-serif", color: '#FFFFFF', WebkitTextStroke: '0.1px #FFFFFF' }}>
              <motion.span initial="hidden" animate="visible" custom={2} variants={wordStagger}>KeSiT</motion.span>
                <span> </span>
              <motion.span initial="hidden" animate="visible" custom={3} variants={wordStagger}>MAnagement</motion.span>
            </h1>
            <p className="relative z-10 text-2xl sm:text-3xl font-bold mb-6">
              <motion.span initial="hidden" animate="visible" custom={4} variants={wordStagger} className="inline-block text-[#1DCD9F]">Berani mulai.
              </motion.span>
              <span> </span>
              <motion.span initial="hidden" animate="visible" custom={5} variants={wordStagger} className="inline-block text-[#FFFFFF]">Terus melaju.
              </motion.span>
            </p>
            <p className="relative z-10 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              <motion.span initial="hidden" animate="visible" custom={6} variants={wordStagger} className="inline-block text-[#FFFFFF]">Dari kayuhan pertama hingga lintasan prestasi.</motion.span>
                <span> </span>
              <motion.span initial="hidden" animate="visible" custom={7} variants={wordStagger} className="inline-block text-[#1DCD9F]">Belajar renang dengan pendampingan yang terarah.</motion.span>
            </p>
            <div className="relative z-10 flex flex-wrap items-center gap-4 mb-8">
              <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.08, duration: 0.55, ease: 'easeOut' }}>
                <Link href="#daftar" className="inline-flex items-center gap-2 bg-[#1DCD9F] hover:bg-[#169976] text-[#FFFFFF] font-extrabold text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#1DCD9F]/30">Daftar Sekarang</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.28, duration: 0.55, ease: 'easeOut' }}>
                <Link href="#kontak" className="inline-flex items-center gap-2 bg-transparent hover:bg-[#FFFFFF]/10 text-[#FFFFFF] font-bold text-base px-7 py-3.5 rounded-full border border-[#FFFFFF]/20 transition-colors">Contact Us</Link>
              </motion.div>
            </div>
            <div className="relative z-10 flex items-center gap-2.5 text-xs sm:text-sm text-[#FFFFFF] font-medium">
              <motion.span initial="hidden" animate="visible" custom={8} variants={wordStagger} className="text-[#1DCD9F]">≋</motion.span>
              <motion.span initial="hidden" animate="visible" custom={9} variants={wordStagger}>Untuk pemula, perenang aktif, dan calon juara.</motion.span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-none">
          <svg className="w-full h-16 sm:h-24 lg:h-32 text-[#FFFFFF] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 120">
            <path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-[#FFFFFF] relative" data-purpose="about-and-statistics" id="tentang">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="lg:col-span-7 pr-0 lg:pr-8">
              <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-xs uppercase font-extrabold tracking-wider mb-3">LEBIH DARI LATIHAN               </motion.p>
                <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">Tumbuh percaya diri, satu kayuhan setiap hari.
                </motion.h2>
                  <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-base sm:text-lg leading-relaxed mb-8">Kesit Management adalah ruang belajar renang yang mengutamakan proses. Kami mempertemukan latihan teknik, kebiasaan disiplin, dan semangat kebersamaan untuk membantu setiap siswa menemukan potensinya.
                  </motion.p>
                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }}><Link href="/tentang-kami" className="font-bold">Kenali Kesit lebih dekat                     </Link></motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.7, type: 'spring' }} className="lg:col-span-5">
              <div className="bg-[#222222] text-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={wordStagger} custom={0} className="text-[11px] font-bold tracking-widest uppercase mb-8">SEMANGAT DALAM ANGKA</motion.p>
                  <div className="grid grid-cols-3 gap-4 pb-8 border-b border-[#444]">
                    <div>
                      <motion.span initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.65, type: 'spring', stiffness: 260, damping: 14 }} className="block text-3xl font-extrabold mb-2"><Counter value={120} suffix="+" /></motion.span>
                      <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.3, type: 'spring' }} className="bg-[#1DCD9F] text-black text-[11px] font-bold px-2.5 py-1 rounded-full">Siswa aktif</motion.span>
                    </div>
                    <div>
                      <motion.span initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.65, delay: 0.1, type: 'spring', stiffness: 260, damping: 14 }} className="block text-3xl font-extrabold mb-2"><Counter value={4} /></motion.span>
                      <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.4, type: 'spring' }} className="bg-[#1DCD9F] text-black text-[11px] font-bold px-2.5 py-1 rounded-full">Pelatih</motion.span>
                    </div>
                    <div>
                      <motion.span initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.65, delay: 0.2, type: 'spring', stiffness: 260, damping: 14 }} className="block text-3xl font-extrabold mb-2"><Counter value={18} /></motion.span>
                      <motion.span initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.5, type: 'spring' }} className="bg-[#1DCD9F] text-black text-[11px] font-bold px-2.5 py-1 rounded-full">Medali</motion.span>
                    </div>
                  </div>
                     <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 1, duration: 1 }} className="text-xs sm:text-sm mt-6 leading-relaxed">Setiap progres berarti. Setiap pencapaian dimulai dari latihan yang konsisten.</motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white border-t" data-purpose="gallery-activities">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-xs uppercase font-extrabold tracking-wider mb-2">CERITA DARI KOLAM</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Latihan serius. Kebersamaan tulus.</motion.h2>
            <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="text-sm sm:text-base">Potret semangat siswa dan pelatih, di dalam maupun di luar lintasan.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .18 } } }} className="grid grid-cols-1 md:grid-cols-3 gap-8">{[['Dokumentasi2.JPG','Satu tim, banyak mimpi'],['Dokumentasi3.jpg','Langkah kecil, progres nyata'],['Dokumentasi4.jpg','Energi untuk terus melaju']].map(([image,title])=>
            <motion.article key={image} variants={{ hidden:{opacity:0,scale:0.92}, visible:{opacity:1,scale:1,transition:{duration:.8,ease:'easeOut'}} }} className="group will-change-transform">
              <div className="rounded-3xl overflow-hidden mb-5 aspect-[4/3]">
                <img alt={title} className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-500 ease-out" src={`/images/${image}`} />
              </div>
              <h3 className="text-lg font-bold mb-1">{title}</h3>
              <p className="text-sm">Kebersamaan siswa &amp; pelatih</p>
            </motion.article>)}
          </motion.div>
        </div>
      </section>
      <section className="bg-black py-16 lg:py-20 text-white" id="daftar">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} className="text-xs uppercase font-extrabold tracking-widest mb-2"><motion.span custom={0} variants={wordStagger}>LINTASANMU</motion.span><span> </span><motion.span custom={1} variants={wordStagger} className="text-[#1DCD9F]">DIMULAI DI SINI</motion.span></motion.p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1DCD9F] font-extrabold mb-3 leading-tight"><motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} custom={2} variants={wordStagger}>Siap membuat</motion.span><span> </span><motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} custom={3} variants={wordStagger} className="text-white">kayuhan pertamamu</motion.span><motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} custom={4} variants={wordStagger}>?</motion.span></h2>
            <p><motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} custom={5} variants={wordStagger} className="inline-block text-sm sm:text-base text-gray-300">Pilih program yang sesuai, </motion.span><motion.span initial="hidden" whileInView="visible" viewport={{ once: false }} custom={6} variants={wordStagger} className="inline-block text-sm sm:text-base text-[#1DCD9F] font-semibold">dan mulai perjalananmu bersama Kesit Management.</motion.span></p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.3 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: 1, duration: 0.8, type: 'spring', stiffness: 220, damping: 12 }}><Link href="/layanan" className="inline-block bg-[#1DCD9F] text-[#FFFFFF] font-extrabold px-8 py-4 rounded-full">Lihat Layanan</Link></motion.div>
        </div>
      </section>
    </main>
  );
}


