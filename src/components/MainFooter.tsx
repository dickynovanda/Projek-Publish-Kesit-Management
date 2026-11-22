import React from 'react';
import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="border-t-4 border-[#adff5f] bg-black/60 text-[#f3ecd8]" data-purpose="site-footer">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
        <div className="grid gap-10 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr] lg:gap-10">
          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <img alt="Logo Kesit" width={2476} height={2044} className="h-14 w-auto shrink-0 object-contain sm:h-16" src="/images/logo-kesit-putih-simbol.png" />
              <img alt="KESIT MANAGEMENT" width={3310} height={848} className="h-9 w-auto max-w-full object-contain sm:h-10" src="/images/logo-kesit-management-putih.png" />
            </div>
            <p className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              <span className="text-[#adff5f]">BORN TO WIN</span>
            </p>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#e6e8df]">
              Bersama Kesit Management, setiap kayuhan punya tujuan.
            </p>
          </div>
          <nav aria-labelledby="footer-navigation" className="min-w-0">
            <h2 id="footer-navigation" className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#adff5f]">
              Jelajahi Kesit
            </h2>
            <ul className="space-y-1 text-base">
              <li><Link href="/" className="inline-block py-2 hover:text-[#adff5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#adff5f]">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="inline-block py-2 hover:text-[#adff5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#adff5f]">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="inline-block py-2 hover:text-[#adff5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#adff5f]">Layanan</Link></li>
              <li><Link href="/prestasi" className="inline-block py-2 hover:text-[#adff5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#adff5f]">Prestasi</Link></li>
            </ul>
          </nav>
          <section id="kontak" aria-labelledby="footer-contact" className="scroll-mt-24 min-w-0">
            <h2 id="footer-contact" className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#adff5f]">
              Sosmed
            </h2>
            <p className="text-xl font-semibold leading-snug">Terhubung dengan KESIT BEYOND.</p>
            <p className="mt-4 text-base leading-7 text-[#e6e8df]">
              Ikuti perjalanan kami.
            </p>
            <ul className="mt-6 space-y-3 border-l-2 border-[#adff5f] pl-4 text-base text-[#e6e8df]">
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0 text-[#adff5f]">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                </svg>
                <span><span className="sr-only">Facebook: </span>Kesit Beyond</span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0 text-[#adff5f]">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.2-.66 2.78-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.01-12.07Z" />
                </svg>
                <span><span className="sr-only">TikTok: </span>@kesit.beyond</span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="h-5 w-5 shrink-0 text-[#adff5f]">
                  <rect x={3} y={3} width={18} height={18} rx={5} />
                  <circle cx={12} cy={12} r={4} />
                  <circle cx={17.5} cy={6.5} r={1} fill="currentColor" stroke="none" />
                </svg>
                <span><span className="sr-only">Instagram: </span>@kesit.beyond</span>
              </li>
            </ul>
          </section>
        </div>
        <div className="border-t border-white/20 py-8">
          <p className="max-w-4xl text-sm leading-6 text-[#e6e8df]">
            Data contoh: seluruh nama, jumlah, harga, lokasi, jadwal, dan prestasi pada desain ini bersifat ilustratif. Foto pengganti, nomor WhatsApp, dan tujuan media sosial belum mewakili data resmi klub.
          </p>
          <p className="mt-6 text-sm text-[#e6e8df]">
            © 2023 Kesit Management. Seluruh hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
