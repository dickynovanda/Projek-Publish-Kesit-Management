'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Pop, WordStagger } from '@/components/WordStagger';

const heroPhotos = [
  { image: 'Dokumentasi1.jpg', alt: 'Kegiatan latihan renang bersama Kesit Management' },
  { image: 'Dokumentasi2.JPG', alt: 'Kebersamaan tim Kesit Management' },
  { image: 'Dokumentasi3.jpg', alt: 'Proses latihan renang Kesit Management' },
  { image: 'Dokumentasi4.jpg', alt: 'Semangat berlatih bersama Kesit Management' },
];

const gallery = [
  { image: 'Dokumentasi2.JPG', title: 'Satu tim, banyak mimpi', category: 'KEBERSAMAAN' },
  { image: 'Dokumentasi3.jpg', title: 'Langkah kecil, progres nyata', category: 'LATIHAN' },
  { image: 'Dokumentasi4.jpg', title: 'Energi untuk terus melaju', category: 'SEMANGAT KESIT' },
];

export default function Home() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const ready = () => setHeroReady(true);
    window.addEventListener('kesit-intro-finished', ready);
    const timer = window.setTimeout(ready, 6500);
    return () => {
      window.removeEventListener('kesit-intro-finished', ready);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % heroPhotos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <main id="main-content" className="bg-transparent text-[#f3ecd8]">
      <section className="site-container pb-12 pt-12 sm:pb-16 lg:pt-24" aria-labelledby="hero-title">
        <div className="mb-7 flex items-center gap-3 sm:mb-10">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#adff5f]" />
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 12 }} animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }} transition={{ duration: 0.5 }} className="text-sm font-semibold leading-relaxed tracking-[0.12em] text-[#adff5f] sm:text-base"><WordStagger active={heroReady}>by KESIT MANAGEMENT</WordStagger></motion.h1>
        </div>
        <div className="relative bg-transparent px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <motion.p className="max-w-2xl text-4xl font-black italic uppercase leading-[1.05] tracking-[-0.04em] text-[#adff5f] sm:text-5xl xl:text-6xl" aria-label="MAJU TANPA ALING-ALING"><WordStagger active={heroReady}>MAJU TANPA</WordStagger><br /><WordStagger active={heroReady}>ALING-ALING</WordStagger></motion.p>
          <div className="ml-auto w-full max-w-md lg:pb-2">
            <p className="text-base leading-relaxed text-[#e6e8df] sm:text-lg"><span className="block"><WordStagger key={`hero-copy-1-${heroReady}`} active={heroReady}>KESIT BEYOND, langkah yang selalu punya arah.</WordStagger></span><span className="mt-2 block"><WordStagger key={`hero-copy-2-${heroReady}`} active={heroReady}>Kami mendampingi perjalanan di airmu—dari belajar dasar hingga berani tampil di lintasan kecepatan.</WordStagger></span></p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Pop active={heroReady} className="rounded-3xl"><Link href="#daftar" className="inline-flex items-center gap-6 rounded-3xl bg-[#adff5f] px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-[#c4ff91]">Mulai Bersama Kesit</Link></Pop>

            </div>
          </div>
          </div>
        </div>
        <figure className="relative mt-10 overflow-hidden bg-transparent sm:mt-14">
          <div className="hero-photo-gradient h-[340px] sm:h-[460px] lg:h-[560px]">
            {heroPhotos.map(({ image, alt }, index) => (
              <img key={image} src={`/images/${image}`} alt={alt} width={1440} height={720} fetchPriority={index === 0 ? 'high' : 'auto'} aria-hidden={index !== activePhoto} className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${index === activePhoto ? 'opacity-100' : 'opacity-0'}`} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
          </div>
          <button type="button" onClick={() => setIsPaused((paused) => !paused)} aria-pressed={isPaused} className="absolute right-6 top-6 border border-[#f3ecd8]/60 bg-black/60 px-3 py-2 text-sm font-semibold text-[#f3ecd8] transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#adff5f] sm:right-10 sm:top-10">
            {isPaused ? 'Lanjutkan slideshow' : 'Jeda slideshow'}
          </button>
          <figcaption className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-5 p-6 text-[#f3ecd8] sm:flex-row sm:items-end sm:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#adff5f] sm:text-sm"><WordStagger>Di dalam air, kita bertumbuh.</WordStagger></p>
              <p className="max-w-xl text-2xl font-medium leading-tight tracking-tight sm:text-4xl"><WordStagger>Satu kayuhan lebih dekat</WordStagger><br /><WordStagger>dengan versi terbaikmu.</WordStagger></p>
            </div>
            <Link href="/layanan/program" className="inline-flex w-fit items-center gap-6 border-b border-[#f3ecd8]/60 pb-2 text-sm font-semibold">Jelajahi Program</Link>
          </figcaption>
        </figure>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f3ecd8]/20 py-5 text-sm font-semibold uppercase tracking-[0.16em] sm:text-sm">
          <span><WordStagger>Untuk pemula, perenang aktif, dan calon juara.</WordStagger></span>
          <span className="text-[#e6e8df]"><WordStagger>Teknik · Disiplin · Kebersamaan</WordStagger></span>
        </div>
      </section>

      <section id="tentang" className="site-container py-10 sm:py-16" aria-labelledby="about-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#adff5f]"><WordStagger>1. Mengenal Kesit</WordStagger></p>
          <div>
            <h2 id="about-title" className="max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-5xl"><WordStagger>Lebih dari latihan.</WordStagger><br /><WordStagger>Ruang untuk tumbuh percaya diri.</WordStagger></h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2 md:gap-10">
              <p className="text-base leading-relaxed text-[#e6e8df]"><WordStagger>Kesit Beyond hadir untuk membantu setiap perenang tumbuh, dari mengenal air hingga mengembangkan kemampuan di lintasan. Kami memadukan latihan teknik, kedisiplinan, dan suasana belajar yang menyenangkan.</WordStagger></p>
              <div>
                <p className="text-base leading-relaxed text-[#e6e8df]"><WordStagger>Melalui pendampingan yang terarah, kami mendukung setiap siswa untuk berani mencoba, membangun percaya diri, dan meraih kemajuan sesuai kemampuannya.</WordStagger></p>
                <Link href="/tentang-kami" className="mt-6 inline-flex items-center gap-5 border-b border-[#f3ecd8]/60 pb-2 text-sm font-bold"><Pop>Kenali Kesit lebih dekat</Pop></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 border-y border-[#f3ecd8]/20 sm:mt-16">
          {[['120+', 'Siswa aktif'], ['4', 'Pelatih'], ['18', 'Medali']].map(([value, label], index) => (
            <div key={label} className={`py-8 sm:py-10 ${index > 0 ? 'border-l border-[#f3ecd8]/20 pl-5 sm:pl-10' : ''}`}>
              <p className="text-4xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-7xl">{value}<span className="text-[#adff5f]">.</span></p>
              <p className="mt-3 text-sm font-semibold text-[#e6e8df] sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#e6e8df]"><WordStagger>Angka merupakan ilustrasi. Setiap progres berarti, setiap pencapaian dimulai dari konsistensi.</WordStagger></p>
      </section>

      <section className="site-container py-12 sm:py-16" aria-labelledby="gallery-title">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#adff5f] mb-5"><WordStagger>02 / Cerita dari Kolam</WordStagger></p>
            <h2 id="gallery-title" className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl"><WordStagger>Latihan serius.</WordStagger><br /><WordStagger>Kebersamaan tulus.</WordStagger></h2>
          </div>
          <Link href="/prestasi" className="inline-flex w-fit items-center gap-5 border-b border-[#f3ecd8]/60 pb-2 text-sm font-bold">Lihat Prestasi</Link>
        </div>
        <div className="grid gap-9 md:grid-cols-3 md:gap-6">
          {gallery.map(({ image, title, category }, galleryIndex) => (
            <article key={image} className="group">
              <div className="gallery-popup aspect-[4/3] overflow-hidden bg-[#22301e]" data-gallery-index={galleryIndex}><img src={`/images/${image}`} alt={title} width={640} height={480} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <p className="mb-3 mt-5 text-sm font-bold tracking-[0.16em] text-[#adff5f]"><WordStagger>{category}</WordStagger></p>
              <h3 className="border-b border-[#f3ecd8]/20 pb-5 text-xl font-medium tracking-tight lg:text-2xl"><WordStagger>{title}</WordStagger></h3>
            </article>
          ))}
        </div>
      </section>

      <section id="daftar" className="mt-8 border-y border-[#adff5f]/60 bg-transparent py-14 sm:mt-16 sm:py-20" aria-labelledby="register-title">
        <div className="site-container flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#adff5f] mb-6"><WordStagger>Lintasanmu dimulai di sini</WordStagger></p>
            <h2 id="register-title" className="text-4xl font-medium leading-[1.1] tracking-[-0.05em] sm:text-6xl"><WordStagger>Siap membuat</WordStagger><br /><WordStagger>kayuhan pertamamu?</WordStagger></h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#e6e8df]"><WordStagger>Pilih program yang sesuai dan mulai perjalananmu bersama Kesit Management.</WordStagger></p>
          </div>
          <Link href="/layanan" className="inline-flex w-fit shrink-0 items-center gap-12 rounded-3xl bg-[#adff5f] px-7 py-5 text-sm font-bold text-black transition-colors hover:bg-[#c4ff91]"><Pop>Lihat Layanan</Pop></Link>
        </div>
      </section>
    </main>
  );
}



