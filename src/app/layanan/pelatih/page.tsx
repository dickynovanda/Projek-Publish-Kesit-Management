'use client';

import React, { useRef } from 'react';
import SlideRightIn from '@/components/SlideRightIn';

function formatBirth(dateStr: string, ageSuffix: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  const formatted = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
  return `${formatted} · ${ageSuffix}`;
}

export default function PelatihPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      scrollRef.current.scrollBy({ left: offset, behavior });
    }
  };

  const coaches = [
    {
      name: 'Adit',
      fullName: 'Aditya Pratama',
      city: 'Bandung, Jawa Barat',
      gender: 'Laki-laki',
      birthDate: '1997-01-12',
      ageSuffix: '29th',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Naya',
      fullName: 'Anaya Putri Lestari',
      city: 'Jakarta, DKI Jakarta',
      gender: 'Perempuan',
      birthDate: '1999-02-08',
      ageSuffix: '27th',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Raka',
      fullName: 'Raka Mahendra',
      city: 'Bogor, Jawa Barat',
      gender: 'Laki-laki',
      birthDate: '1995-03-24',
      ageSuffix: '31st',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Dini',
      fullName: 'Dini Ayu Safitri',
      city: 'Depok, Jawa Barat',
      gender: 'Perempuan',
      birthDate: '1998-04-16',
      ageSuffix: '28th',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Galang',
      fullName: 'Galang Saputra',
      city: 'Bekasi, Jawa Barat',
      gender: 'Laki-laki',
      birthDate: '1996-05-05',
      ageSuffix: '30th',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Siti',
      fullName: 'Siti Rahmawati',
      city: 'Tangerang, Banten',
      gender: 'Perempuan',
      birthDate: '2000-11-19',
      ageSuffix: '26th',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="font-sans bg-transparent text-[#f3ecd8] antialiased selection:bg-[#adff5f] selection:text-[#000000] min-h-screen flex flex-col w-full overflow-x-hidden">
      <link rel="preconnect" href="https://images.unsplash.com" />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[#adff5f] focus:text-[#000000] hover:bg-[#adff5f]">Skip to content</a>

      <main id="main-content">
      <section className="relative bg-transparent h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#f3ecd8]" data-purpose="hero-section">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <SlideRightIn className="max-w-3xl">
            <span className="text-[#adff5f] text-sm font-bold tracking-widest uppercase block mb-3">LAYANAN / PELATIH</span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-[#f3ecd8] text-balance">
              Kenali pendamping lintasanmu.
            </h1>
            <p className="text-[#f3ecd8] text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Belajar bersama pelatih profesional yang siap membimbing setiap langkah kecil menjadi kemajuan nyata.
            </p>
          </SlideRightIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#f3ecd8] uppercase">DAFTAR PELATIH KESIT</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#f3ecd8] mt-1 text-balance">Geser untuk melihat pelatih lainnya</h2>
          </div>
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[#3b4432] flex items-center justify-center hover:bg-[#adff5f] hover:border-[#adff5f] hover:text-[#000000] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#adff5f]"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[#3b4432] flex items-center justify-center hover:bg-[#adff5f] hover:border-[#adff5f] hover:text-[#000000] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#adff5f]"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 pt-2 px-1 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation', overscrollBehavior: 'contain' }}
          >
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="min-w-[210px] max-w-[210px] flex-shrink-0 bg-transparent rounded-2xl border border-[#3b4432] overflow-hidden shadow-sm hover:shadow-md transition-shadow snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 w-full overflow-hidden bg-[#222222]">
                    <img alt={coach.name} width={600} height={400} loading="lazy" className="w-full h-full object-cover object-center motion-safe:hover:scale-105 transition-transform duration-300" src={coach.img} />
                  </div>
                  <div className="p-3.5">
                    <h3 className="text-sm font-bold text-[#f3ecd8]">{coach.name}</h3>
                    <p className="text-sm leading-relaxed text-[#f3ecd8] font-medium mb-2.5">{coach.fullName}</p>
                    <div className="border-t border-[#3b4432] pt-2.5 space-y-1.5 text-sm leading-relaxed text-[#f3ecd8]">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[#adff5f]" aria-hidden="true">📍</span>
                        <span className="truncate">{coach.city}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#adff5f]" aria-hidden="true">👤</span>
                        <span>{coach.gender}</span>
                      </div>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-[#adff5f]" aria-hidden="true">🎂</span>
                        <span className="truncate">{formatBirth(coach.birthDate, coach.ageSuffix)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}



