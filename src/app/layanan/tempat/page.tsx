'use client';

import React, { useRef } from 'react';
import SlideRightIn from '@/components/SlideRightIn';
import { WordStagger } from '@/components/WordStagger';

export default function TempatPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
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
    <div className="font-sans bg-transparent text-[#f3ecd8] antialiased selection:bg-[#adff5f] selection:text-[#000000] min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* BEGIN: HeroAndHeader */}
      <section className="relative bg-transparent h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#f3ecd8]" data-purpose="hero-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <SlideRightIn className="max-w-3xl">
            <span className="text-[#adff5f] text-sm font-bold tracking-widest uppercase block mb-3"><WordStagger>LAYANAN / TEMPAT LATIHAN</WordStagger></span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#f3ecd8]">
              <WordStagger>Ruang untuk setiap kayuhan.</WordStagger>
            </h1>
            <p className="text-[#e6e8df] text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              <WordStagger>Pilihan kolam untuk belajar dengan nyaman. Sesuaikan lokasi dan jadwal dengan aktivitasmu.</WordStagger>
            </p>
          </SlideRightIn>
        </div>
      </section>
      {/* END: HeroAndHeader */}

      {/* Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#e6e8df] uppercase"><WordStagger>LOKASI KOLAM KESIT</WordStagger></span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#f3ecd8] mt-1"><WordStagger>Geser untuk melihat tempat latihan lainnya</WordStagger></h2>
          </div>
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[#3b4432] flex items-center justify-center hover:bg-[#adff5f] hover:border-[#adff5f] hover:text-[#000000] transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[#3b4432] flex items-center justify-center hover:bg-[#adff5f] hover:border-[#adff5f] hover:text-[#000000] transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-x-hidden overflow-y-visible">
          <div
            ref={scrollRef}
            className="place-scroller flex gap-4 overflow-x-auto overflow-y-visible pb-6 pt-2 px-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', WebkitTapHighlightColor: 'transparent', touchAction: 'pan-x pan-y', overscrollBehavior: 'auto' }}
          >
            {locations.map((loc, index) => (
              <div
                key={index}
                className="min-w-[220px] max-w-[220px] flex-shrink-0 bg-transparent rounded-2xl border border-[#adff5f] overflow-hidden shadow-sm flex flex-col justify-between snap-start place-card"
              >
                <div>
                  <div className="h-32 w-full overflow-hidden bg-[#20241c]">
                    <img alt={loc.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" src={loc.img} />
                  </div>
                  <div className="p-3.5">
                    <h3 className="text-sm font-bold text-[#f3ecd8] mb-1">{loc.name}</h3>
                    <div className="text-sm leading-relaxed text-[#e6e8df] mb-2 truncate">{loc.address}</div>
                    <p className="text-base leading-relaxed text-[#e6e8df] mb-3 font-medium line-clamp-2">{loc.desc}</p>
                    <div className="border-t border-[#3b4432] pt-2 space-y-1 text-sm leading-relaxed text-[#e6e8df]">
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



