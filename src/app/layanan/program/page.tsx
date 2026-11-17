'use client';

import { motion } from 'framer-motion';

import React, { useRef } from 'react';
import SlideRightIn from '@/components/SlideRightIn';

export default function ProgramPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
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
            <span className="text-[#1DCD9F] text-xs font-bold tracking-widest uppercase block mb-3">LAYANAN / PROGRAM</span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#FFFFFF]">
              Paket latihan, tujuan yang jelas.
            </h1>
            <p className="text-[#FFFFFF] text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Pilih titik awalmu. Diskusikan kebutuhan dan ketersediaan jadwal dengan admin sebelum mendaftar.
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
            <span className="text-xs font-bold tracking-widest text-[#222222] uppercase">PILIHAN PROGRAM KESIT</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#222222] mt-1">Geser untuk melihat program lainnya</h2>
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
            {programs.map((prog, index) => (
              <div
                key={index}
                className="min-w-[220px] max-w-[220px] flex-shrink-0 bg-[#FFFFFF] rounded-2xl p-3.5 border border-[#1DCD9F] shadow-sm flex flex-col justify-between snap-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#1DCD9F] text-[#000000] text-[10px] font-bold px-2 py-0.5 rounded-full">{prog.sessions}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#222222] mb-2">{prog.title}</h3>
                  <div className="bg-[#000000] text-[#FFFFFF] p-3 rounded-xl mb-3">
                    <div className="text-base font-extrabold text-[#1DCD9F]">{prog.price}</div>
                    <div className="text-[9px] text-[#222222] mt-0.5">per paket latihan</div>
                  </div>
                  <p className="text-[10px] text-[#222222] mb-3 font-medium">{prog.desc}</p>
                  <ul className="space-y-1.5 text-[10px] text-[#222222] mb-4 font-medium">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx}>✓ {feat}</li>
                    ))}
                  </ul>
                </div>
                <a className="inline-flex items-center justify-center bg-[#1DCD9F] hover:bg-[#169976] text-[#000000] text-[10px] font-bold px-4 py-1.5 rounded-full transition" href="https://wa.me/62XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  Hubungi Admin ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
