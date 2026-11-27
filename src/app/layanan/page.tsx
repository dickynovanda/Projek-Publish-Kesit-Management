'use client';
import React from 'react';
import Link from 'next/link';
import SlideRightIn from '@/components/SlideRightIn';
import { Pop, WordStagger } from '@/components/WordStagger';

export default function LayananPage() {
  return (
    <div className="font-sans bg-transparent text-[#f3ecd8] antialiased selection:bg-[#adff5f] selection:text-[#000000] min-h-screen flex flex-col">
      {/* BEGIN: HeroAndHeader */}
      <section className="relative bg-transparent h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#f3ecd8]" data-purpose="hero-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <SlideRightIn className="max-w-3xl">
            <span className="text-[#adff5f] text-sm font-bold tracking-widest uppercase block mb-3"><WordStagger>LAYANAN KESIT</WordStagger></span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#f3ecd8]">
              <WordStagger>Temukan latihan yang tepat untukmu.</WordStagger>
            </h1>
            <p className="text-[#f3ecd8] text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              <WordStagger>Kenali orang yang mendampingimu, pilih programmu, dan temukan tempat untuk mulai melaju.</WordStagger>
            </p>
          </SlideRightIn>
        </div>
      </section>
      {/* END: HeroAndHeader */}

      {/* Main Services Hub Selection */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Pop className="h-full rounded-3xl"><Link href="/layanan/pelatih" className="h-full bg-transparent border border-[#3b4432] rounded-3xl p-8 hover:border-[#adff5f] hover:shadow-xl transition flex flex-col justify-between group">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#adff5f] uppercase mb-2 block">1. PELATIH</span>
              <h3 className="text-2xl font-bold text-[#f3ecd8] mb-3 group-hover:text-[#adff5f] transition">Pendamping Lintasan</h3>
              <p className="text-[#f3ecd8] text-base leading-relaxed mb-6">Kenali para pelatih profesional dan berpengalaman yang siap membimbing langkah Anda.</p>
            </div>
            <span className="font-bold text-sm text-[#f3ecd8] inline-flex items-center gap-2">Lihat Pelatih →</span>
          </Link></Pop>

          <Pop className="h-full rounded-3xl"><Link href="/layanan/program" className="bg-transparent border border-[#3b4432] rounded-3xl p-8 hover:border-[#adff5f] hover:shadow-xl transition flex flex-col justify-between group">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#adff5f] uppercase mb-2 block">2. PROGRAM</span>
              <h3 className="text-2xl font-bold text-[#f3ecd8] mb-3 group-hover:text-[#adff5f] transition">Paket Latihan</h3>
              <p className="text-[#f3ecd8] text-base leading-relaxed mb-6">Pilih paket kelas reguler, private, hingga prestasi sesuai dengan target dan kebutuhan.</p>
            </div>
            <span className="font-bold text-sm text-[#f3ecd8] inline-flex items-center gap-2">Lihat Program →</span>
          </Link></Pop>

          <Pop className="h-full rounded-3xl"><Link href="/layanan/tempat" className="bg-transparent border border-[#3b4432] rounded-3xl p-8 hover:border-[#adff5f] hover:shadow-xl transition flex flex-col justify-between group">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#adff5f] uppercase mb-2 block">3. TEMPAT LATIHAN</span>
              <h3 className="text-2xl font-bold text-[#f3ecd8] mb-3 group-hover:text-[#adff5f] transition">Lokasi Kolam</h3>
              <p className="text-[#f3ecd8] text-base leading-relaxed mb-6">Temukan pilihan kolam renang strategis dan nyaman untuk sesi latihan rutin Anda.</p>
            </div>
            <span className="font-bold text-sm text-[#f3ecd8] inline-flex items-center gap-2">Lihat Lokasi →</span>
          </Link></Pop>
        </div>
      </section>
    </div>
  );
}



