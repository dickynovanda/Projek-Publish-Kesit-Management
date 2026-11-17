'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SlideRightIn from '@/components/SlideRightIn';

export default function LayananPage() {
  return (
    <div className="font-sans bg-[#FFFFFF] text-[#222222] antialiased selection:bg-[#1DCD9F] selection:text-[#000000] min-h-screen flex flex-col">
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
            <span className="text-[#1DCD9F] text-xs font-bold tracking-widest uppercase block mb-3">LAYANAN KESIT</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#FFFFFF]">
              Temukan latihan yang tepat untukmu.
            </h1>
            <p className="text-[#FFFFFF] text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Kenali orang yang mendampingimu, pilih programmu, dan temukan tempat untuk mulai melaju.
            </p>
          </SlideRightIn>
        </div>
        {/* Bottom Smooth Wave Cutout Effect */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-none">
          <svg className="w-full h-16 sm:h-24 lg:h-32 text-[#FFFFFF] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 120"><path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z"></path></svg>
        </div>
      </section>
      {/* END: HeroAndHeader */}

      {/* Main Services Hub Selection */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/layanan/pelatih" className="bg-[#FFFFFF] border border-[#222222] rounded-3xl p-8 hover:border-[#1DCD9F] hover:shadow-xl transition flex flex-col justify-between group">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#169976] uppercase mb-2 block">01 / PELATIH</span>
              <h3 className="text-2xl font-bold text-[#222222] mb-3 group-hover:text-[#169976] transition">Pendamping Lintasan</h3>
              <p className="text-[#222222] text-sm leading-relaxed mb-6">Kenali para pelatih profesional dan berpengalaman yang siap membimbing langkah Anda.</p>
            </div>
            <span className="font-bold text-sm text-[#222222] inline-flex items-center gap-2">Lihat Pelatih →</span>
          </Link>

          <Link href="/layanan/program" className="bg-[#FFFFFF] border border-[#222222] rounded-3xl p-8 hover:border-[#1DCD9F] hover:shadow-xl transition flex flex-col justify-between group">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#169976] uppercase mb-2 block">02 / PROGRAM</span>
              <h3 className="text-2xl font-bold text-[#222222] mb-3 group-hover:text-[#169976] transition">Paket Latihan</h3>
              <p className="text-[#222222] text-sm leading-relaxed mb-6">Pilih paket kelas reguler, private, hingga prestasi sesuai dengan target dan kebutuhan.</p>
            </div>
            <span className="font-bold text-sm text-[#222222] inline-flex items-center gap-2">Lihat Program →</span>
          </Link>

          <Link href="/layanan/tempat" className="bg-[#FFFFFF] border border-[#222222] rounded-3xl p-8 hover:border-[#1DCD9F] hover:shadow-xl transition flex flex-col justify-between group">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#169976] uppercase mb-2 block">03 / TEMPAT LATIHAN</span>
              <h3 className="text-2xl font-bold text-[#222222] mb-3 group-hover:text-[#169976] transition">Lokasi Kolam</h3>
              <p className="text-[#222222] text-sm leading-relaxed mb-6">Temukan pilihan kolam renang strategis dan nyaman untuk sesi latihan rutin Anda.</p>
            </div>
            <span className="font-bold text-sm text-[#222222] inline-flex items-center gap-2">Lihat Lokasi →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
