import React from 'react';
import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="relative bg-[#000000] text-[#FFFFFF] pt-20 pb-12 overflow-hidden" data-purpose="site-footer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-65 filter brightness-95 contrast-105" src="/images/Dokumentasi1.jpg" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/60 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Column 1: Brand Info & Social Icons */}
          <div className="md:col-span-5 lg:col-span-5 pr-0 md:pr-6">
            <div className="flex items-center gap-3 mb-6">
              <img alt="Logo Kesit" className="h-14 w-14 object-contain" src="/images/Logo Kesit 1.png" />
              <img alt="Kesit Management" className="h-12 w-auto max-w-[210px] object-contain" src="/images/Logo Kesit 2.png" />
            </div>
            <p className="text-[#FFFFFF] text-sm leading-relaxed mb-6 max-w-sm">
              Ruang untuk belajar, bertumbuh, dan melaju. Bersama Kesit Management, setiap kayuhan punya tujuan.
            </p>
            <div className="flex items-center gap-3">
              <a aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#1DCD9F] flex items-center justify-center text-[#1DCD9F] hover:bg-[#1DCD9F] hover:text-[#000000] transition-colors" href="#">
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#1DCD9F] flex items-center justify-center text-[#1DCD9F] hover:bg-[#1DCD9F] hover:text-[#000000] transition-colors" href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"></path>
                </svg>
              </a>
              <a aria-label="YouTube" className="w-10 h-10 rounded-full border border-[#1DCD9F] flex items-center justify-center text-[#1DCD9F] hover:bg-[#1DCD9F] hover:text-[#000000] transition-colors" href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
              <a aria-label="TikTok" className="w-10 h-10 rounded-full border border-[#1DCD9F] flex items-center justify-center text-[#1DCD9F] hover:bg-[#1DCD9F] hover:text-[#000000] transition-colors" href="#">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.27 1.76-.24 1.05.12 2.21.93 2.93.75.69 1.83.94 2.8.72 1.06-.2 1.95-.98 2.27-2 .16-.48.24-.98.24-1.49.03-4.57.01-9.15.02-13.72z"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-base font-bold text-[#FFFFFF] mb-4">Jelajahi Kesit</h4>
            <ul className="space-y-2.5 text-sm text-[#FFFFFF]">
              <li><Link href="/" className="hover:text-[#1DCD9F] transition-colors">Beranda</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-[#1DCD9F] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="hover:text-[#1DCD9F] transition-colors">Layanan</Link></li>
              <li><Link href="/prestasi" className="hover:text-[#1DCD9F] transition-colors">Prestasi</Link></li>
            </ul>
          </div>
          {/* Column 3: Contact & WhatsApp */}
          <div className="md:col-span-4 lg:col-span-4" id="kontak">
            <h4 className="text-base font-bold text-[#FFFFFF] mb-2">Mulai dari satu pesan.</h4>
            <p className="text-sm text-[#FFFFFF] mb-3">
              Konsultasikan tujuan dan jadwal latihanmu melalui WhatsApp.
            </p>
            <p className="text-xl sm:text-2xl font-extrabold text-[#1DCD9F] tracking-wide mb-1">
              +62 XXX XXXX XXXX
            </p>
            <a className="text-xs text-[#FFFFFF] hover:text-[#1DCD9F] transition-colors" href="https://wa.me/62XXXXXXXXXXX" rel="noopener noreferrer" target="_blank">
              wa.me/62XXXXXXXXXXX
            </a>
          </div>
        </div>
        {/* Bottom Green Divider Line */}
        <div className="border-t border-[#1DCD9F]/40 pt-8 mt-4">
          <p className="text-[11px] text-[#FFFFFF] leading-relaxed mb-4">
            Data contoh: seluruh nama, jumlah, harga, lokasi, jadwal, dan prestasi pada desain ini bersifat ilustratif. Foto pengganti, nomor WhatsApp, dan tujuan media sosial belum mewakili data resmi klub.
          </p>
          <p className="text-xs text-[#FFFFFF]">
            © 2026 Kesit Management. Seluruh hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
