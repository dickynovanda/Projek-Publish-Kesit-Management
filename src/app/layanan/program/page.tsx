'use client';

import React, { useRef } from 'react';
import SlideRightIn from '@/components/SlideRightIn';
import { WordStagger } from '@/components/WordStagger';

export default function ProgramPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const programs = [
    {
      title: 'Kelas Reguler Pemula',
      sessions: '6 Sesi',
      price: 'Rp 100.000',
      desc: 'Mulai nyaman di air, lalu kuasai dasar renang selangkah demi selangkah.',
      features: ['Pengenalan air & pernapasan', 'Gerak dasar dan koordinasi', 'Kelompok kecil, 60 menit'],
    },
    {
      title: 'Kelas Private',
      sessions: '8 Sesi',
      price: 'Rp 350.000',
      desc: 'Tingkatkan teknik, efisiensi gerak, dan ketahanan di setiap lintasan.',
      features: ['Penguatan empat gaya renang', 'Latihan daya tahan bertahap', 'Evaluasi teknik, 90 menit'],
    },
    {
      title: 'Kelas Prestasi',
      sessions: '4 Sesi',
      price: 'Rp 250.000',
      desc: 'Pendampingan personal dengan fokus latihan yang mengikuti kebutuhanmu.',
      features: ['Satu siswa dengan satu pelatih', 'Target dan ritme lebih personal', 'Jadwal fleksibel, 60 menit'],
    },
    {
      title: 'Kelas Intensif Akhir Pekan',
      sessions: '5 Sesi',
      price: 'Rp 200.000',
      desc: 'Program khusus bagi perenang yang ingin melatih kecepatan di akhir pekan.',
      features: ['Fokus latihan kecepatan sprint', 'Analisis video start & turn', 'Pelatih bersertifikat nasional'],
    },
    {
      title: 'Kelas Balita (Toddler Swim)',
      sessions: '6 Sesi',
      price: 'Rp 180.000',
      desc: 'Pengenalan air yang aman dan menyenangkan untuk anak usia dini bersama orang tua.',
      features: ['Stimulasi motorik air', 'Game edukatif berbasis air', 'Kolam khusus air hangat'],
    },
  ];

  return (
    <div className="font-sans bg-transparent text-[#f3ecd8] antialiased selection:bg-[#adff5f] selection:text-[#000000] min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* BEGIN: HeroAndHeader */}
      <section className="relative bg-transparent h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#f3ecd8]" data-purpose="hero-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <SlideRightIn className="max-w-3xl">
            <span className="text-[#adff5f] text-sm font-bold tracking-widest uppercase block mb-3"><WordStagger>LAYANAN / PROGRAM</WordStagger></span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#f3ecd8]">
              <WordStagger>Paket latihan, tujuan yang jelas.</WordStagger>
            </h1>
            <p className="text-[#f3ecd8] text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              <WordStagger>Pilih titik awalmu. Diskusikan kebutuhan dan ketersediaan jadwal dengan admin sebelum mendaftar.</WordStagger>
            </p>
          </SlideRightIn>
        </div>
      </section>
      {/* END: HeroAndHeader */}

      {/* Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#e6e8df] uppercase"><WordStagger>PILIHAN PROGRAM KESIT</WordStagger></span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#f3ecd8] mt-1"><WordStagger>Geser untuk melihat program lainnya</WordStagger></h2>
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
            className="program-scroller flex gap-4 overflow-x-auto overflow-y-visible pb-6 pt-2 px-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', WebkitTapHighlightColor: 'transparent', touchAction: 'pan-x pan-y', overscrollBehavior: 'auto' }}
          >
            {programs.map((prog, index) => (
              <div
                key={index}
                className="min-w-[220px] max-w-[220px] flex-shrink-0 bg-transparent rounded-2xl p-3.5 border border-[#adff5f] shadow-sm flex flex-col justify-between snap-start program-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#adff5f] text-[#000000] text-sm font-bold px-2 py-0.5 rounded-full">{prog.sessions}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#f3ecd8] mb-2">{prog.title}</h3>
                  <div className="bg-transparent text-[#f3ecd8] p-3 rounded-xl mb-3">
                    <div className="text-base font-extrabold text-[#adff5f]">{prog.price}</div>
                    <div className="text-sm leading-relaxed text-[#e6e8df] mt-0.5">per paket latihan</div>
                  </div>
                  <p className="text-base leading-relaxed text-[#e6e8df] mb-3 font-medium">{prog.desc}</p>
                  <ul className="space-y-1.5 text-base leading-relaxed text-[#e6e8df] mb-4 font-medium">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx}>✓ {feat}</li>
                    ))}
                  </ul>
                </div>
                <a className="inline-flex items-center justify-center rounded-3xl bg-[#adff5f] hover:bg-[#c4ff8d] text-[#000000] text-sm font-bold px-4 py-1.5 rounded-full transition" href="https://wa.me/62XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  Hubungi Admin
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



