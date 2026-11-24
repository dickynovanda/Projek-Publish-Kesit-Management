'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Prestasi', href: '/prestasi' },
];

const services = [
  { name: 'Semua Layanan', href: '/layanan' },
  { name: 'Pelatih', href: '/layanan/pelatih' },
  { name: 'Program', href: '/layanan/program' },
  { name: 'Tempat Latihan', href: '/layanan/tempat' },
];

export default function MainHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="relative z-50" onKeyDown={(event) => { if (event.key === 'Escape') closeMenus(); }}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-[#adff5f] focus:p-4 focus:text-black">Lewati navigasi</a>
      <div className="bg-black text-white">
        <div className="site-container flex min-h-12 items-center justify-between gap-4 py-3 lg:pl-[360px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm">BEYOND THE LIMIT</p>
          <div className="flex items-center gap-5 text-[#adff5f]" role="group" aria-label="Media sosial KESIT">
            <span role="img" aria-label="Facebook" title="Facebook — tautan akun segera tersedia">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.021 10.125 11.927v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" /></svg>
            </span>
            <span role="img" aria-label="TikTok" title="TikTok — tautan akun segera tersedia">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 0h-4.1v16.4a3.1 3.1 0 1 1-2.7-3.1V9.1a7.3 7.3 0 1 0 6.8 7.3V8.1A10 10 0 0 0 22 9.7V5.6A5.6 5.6 0 0 1 16.6 0Z" /></svg>
            </span>
            <span role="img" aria-label="Instagram" title="Instagram — tautan akun segera tersedia">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </span>
          </div>
        </div>
      </div>
      <div className="border-b border-[#adff5f]/30 bg-[#1c2119] text-[#f3ecd8]">
        <div className="site-container relative flex min-h-24 items-center justify-between gap-4 lg:min-h-24 lg:pl-[360px]">
          <Link href="/" onClick={closeMenus} aria-label="Kesit Management — Beranda" className="flex items-center gap-2 rounded-xl bg-black px-3 py-3 sm:gap-3 sm:px-4 lg:absolute lg:left-8 lg:top-[-48px] lg:h-[180px] lg:w-[290px] lg:flex-col lg:justify-center lg:gap-2 lg:rounded-b-[36px] lg:px-8 lg:shadow-xl">
            <span className="relative block h-12 w-12 shrink-0 overflow-hidden lg:h-16 lg:w-16">
              <img alt="" width={1280} height={1280} className="h-full w-full scale-[1.7] object-contain" src="/images/logo-kesit-hijau.png" />
            </span>
            <img alt="KESIT BEYOND" width={2000} height={645} className="h-12 w-36 object-contain lg:h-14 lg:w-48" src="/images/logo-kesit-beyond.png" />
          </Link>
          <nav aria-label="Navigasi utama" className="hidden flex-1 items-center justify-between gap-5 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href === '/layanan' && pathname.startsWith('/layanan/'));
              return item.href === '/layanan' ? (
                <div key={item.href} className="relative" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdownOpen(false); }}>
                  <button type="button" aria-expanded={dropdownOpen} aria-controls="desktop-services" onClick={() => setDropdownOpen(!dropdownOpen)} className={`flex items-center gap-3 border-b-2 py-3 text-sm font-bold uppercase tracking-wide ${isActive ? 'border-[#adff5f] text-[#adff5f]' : 'border-transparent hover:border-[#adff5f]/50'}`}>
                    Layanan <span aria-hidden="true" className={`text-xs transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {dropdownOpen && (
                    <div id="desktop-services" className="absolute left-0 top-full mt-3 w-56 border-t-4 border-[#adff5f] bg-[#20241c] py-2 shadow-xl">
                      {services.map((service) => <Link key={service.href} href={service.href} onClick={closeMenus} className="block px-5 py-3 text-sm font-semibold hover:bg-[#adff5f] hover:text-black">{service.name}</Link>)}
                    </div>
                  )}
                </div>
              ) : (

                <Link key={item.href} href={item.href} onClick={closeMenus} aria-current={isActive ? 'page' : undefined} className={`border-b-2 py-3 text-sm font-bold uppercase tracking-wide ${isActive ? 'border-[#adff5f] text-[#adff5f]' : 'border-transparent hover:border-[#adff5f]/50'}`}>{item.name}</Link>
              );
            })}
            <Link href="/#daftar" className="inline-flex items-center gap-4 rounded-3xl bg-[#adff5f] px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-[#c3ff8a]">Bergabung</Link>
          </nav>
          <button type="button" aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#adff5f]/40 text-[#adff5f] lg:hidden">
            <svg aria-hidden="true" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={mobileMenuOpen ? 'M6 6l12 12M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'} /></svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Navigasi seluler" className="absolute left-0 right-0 border-t border-white/20 bg-black px-6 py-6 text-white shadow-xl lg:hidden">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between">
                <Link href={item.href} onClick={closeMenus} aria-current={pathname === item.href ? 'page' : undefined} className="block py-3 font-semibold hover:text-[#adff5f]">{item.name}</Link>
                {item.href === '/layanan' && <button type="button" aria-label="Tampilkan submenu layanan" aria-expanded={dropdownOpen} aria-controls="mobile-services" onClick={() => setDropdownOpen(!dropdownOpen)} className="h-11 w-11 text-[#adff5f]">{dropdownOpen ? '−' : '+'}</button>}
              </div>
              {item.href === '/layanan' && dropdownOpen && <div id="mobile-services" className="mb-3 border-l border-[#adff5f] pl-5">{services.slice(1).map((service) => <Link key={service.href} href={service.href} onClick={closeMenus} className="block py-3 text-base text-[#f3ecd8] hover:text-[#adff5f]">{service.name}</Link>)}</div>}
            </div>
          ))}
          <Link href="/#daftar" onClick={closeMenus} className="mt-4 block rounded-3xl bg-[#adff5f] px-5 py-4 text-center text-sm font-bold text-black">Daftar Sekarang</Link>
        </nav>
      )}
    </header>
  );
}



