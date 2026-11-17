'use client';

import { motion } from 'framer-motion';

import React, { useRef } from 'react';
import SlideRightIn from '@/components/SlideRightIn';

export default function TempatPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -240 : 240;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const locations = [
    {
      name: 'Kolam Tirta Asri',
      address: 'Jl. Melati No. 12, Bandung',
      desc: 'Kolam terbuka yang nyaman untuk membangun teknik dan rasa percaya diri.',
      depth: '≋ Kedalaman 0,8–1,5m',
      facilities: '☕ Kolam anak, bilas, parkir',
      schedule: '⏱ Sel & Kam · 15.30-17.00',
      img: '/images/Dokumentasi2.JPG',
    },
    {
      name: 'Kolam Cakrawala',
      address: 'Jl. Anggrek No. 8, Cimahi',
      desc: 'Lintasan terpisah untuk sesi pengembangan teknik dan daya tahan.',
      depth: '≋ Kedalaman 1,2–2m',
      facilities: '☕ Lintasan 25m, loker, ganti',
      schedule: '⏱ Rab & Jum · 16.00-17.30',
      img: '/images/Dokumentasi3.jpg',
    },
    {
      name: 'Kolam Bumi Segar',
      address: 'Jl. Kenanga No. 21, Bandung',
      desc: 'Area latihan keluarga dengan suasana santai untuk sesi akhir pekan.',
      depth: '≋ Kedalaman 0,6–1,4m',
      facilities: '☕ Kolam dangkal, tunggu, bilas',
      schedule: '⏱ Sab & Min · 08.00-09.30',
      img: '/images/Dokumentasi4.jpg',
    },
    {
      name: 'Kolam Tirta Buana',
      address: 'Jl. Dipati Ukur No. 45, Bandung',
      desc: 'Kolam renang berstandar semi-olympic dengan air jernih dan fasilitas lengkap.',
      depth: '≋ Kedalaman 1,0–2,2m',
      facilities: '☕ Tribun, kantin, loker',
      schedule: '⏱ Sen & Rab · 15.00-17.00',
      img: '/images/Dokumentasi2.JPG',
    },
  ];

  return (
    <div className="font-sans bg-[#FFFFFF] text-[#222222] antialiased selection:bg-[#1DCD9F] selection:text-[#000000] min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* BEGIN: HeroAndHeader */}
      <section className="relative bg-[#000000] h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#FFFFFF]" data-purpose="hero-section">
      {/* Background Documentation Photo with Asymmetric Gradient (Brighter on Right) */}
      <div className="absolute inset-0 z-0">
        <img alt="Aqua Sprint Kesit Management" className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-[center_35%] filter brightness-[1.25] contrast-[1.05]" src="/images/Dokumentasi1.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/78 to-[#000000]/0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
           <motion.img src="/images/overlay_wayang.png" alt="" aria-hidden="true" className="pointer-events-none absolute left-[-4rem] top-[-4rem] z-0 h-[34rem] w-auto object-contain opacity-40" animate={{ rotate: [16, 24, 16] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '50% 90%' }} />
          <SlideRightIn className="max-w-3xl">
            <span className="text-[#1DCD9F] text-xs font-bold tracking-widest uppercase block mb-3">LAYANAN / TEMPAT LATIHAN</span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#FFFFFF]">
              Ruang untuk setiap kayuhan.
            </h1>
            <p className="text-[#222222] text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Pilihan kolam untuk belajar dengan nyaman. Sesuaikan lokasi dan jadwal dengan aktivitasmu.
            </p>
          </SlideRightIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-none">
          <svg className="w-full h-16 sm:h-24 lg:h-32 text-[#FFFFFF] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 120"><path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z"></path></svg>
        </div>
      </section>
      {/* END: HeroAndHeader */}

      {/* Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#222222] uppercase">LOKASI KOLAM KESIT</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#222222] mt-1">Geser untuk melihat tempat latihan lainnya</h2>
          </div>
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[#222222] flex items-center justify-center hover:bg-[#1DCD9F] hover:border-[#1DCD9F] hover:text-[#000000] transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[#222222] flex items-center justify-center hover:bg-[#1DCD9F] hover:border-[#1DCD9F] hover:text-[#000000] transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 px-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {locations.map((loc, index) => (
              <div
                key={index}
                className="min-w-[220px] max-w-[220px] flex-shrink-0 bg-[#FFFFFF] rounded-2xl border border-[#1DCD9F] overflow-hidden shadow-sm flex flex-col justify-between snap-start"
              >
                <div>
                  <div className="h-32 w-full overflow-hidden">
                    <img alt={loc.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" src={loc.img} />
                  </div>
                  <div className="p-3.5">
                    <h3 className="text-sm font-bold text-[#222222] mb-1">{loc.name}</h3>
                    <div className="text-[10px] text-[#222222] mb-2 truncate">{loc.address}</div>
                    <p className="text-[10px] text-[#222222] mb-3 font-medium line-clamp-2">{loc.desc}</p>
                    <div className="border-t border-[#222222] pt-2 space-y-1 text-[10px] text-[#222222]">
                      <div className="truncate">{loc.depth}</div>
                      <div className="truncate">{loc.facilities}</div>
                      <div className="truncate">{loc.schedule}</div>
                    </div>
                  </div>
               </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
