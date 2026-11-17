'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainHeader() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Layanan', href: '/layanan', hasDropdown: true },
    { name: 'Prestasi', href: '/prestasi' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/85 backdrop-blur-md border-b border-[#FFFFFF]/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-purpose="site-logo">
          <img alt="Logo Kesit" className="h-14 w-14 object-contain" src="/images/Logo Kesit 1.png" />
          <img alt="Kesit Management" className="h-12 w-auto max-w-[210px] object-contain" src="/images/Logo Kesit 2.png" />
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative" data-purpose="primary-navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith('/layanan'));

            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className="relative py-1"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 transition-colors ${
                      isActive ? 'text-[#FFFFFF]' : 'text-[#ffffff] hover:text-[#1DCD9F]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <svg className={`w-4 h-4 text-[#222222] transition-transform ${dropdownOpen ? 'rotate-180 text-[#FFFFFF]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1DCD9F]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Submenu Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-[#222222] border border-[#222222] rounded-2xl shadow-2xl py-3 z-50 flex flex-col"
                      >
                        <Link
                          href="/layanan/pelatih"
                          className="px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] hover:text-[#000000] hover:bg-[#1DCD9F] transition-colors"
                        >
                          Pelatih
                        </Link>
                        <Link
                          href="/layanan/program"
                          className="px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] hover:text-[#000000] hover:bg-[#1DCD9F] transition-colors"
                        >
                          Program
                        </Link>
                        <Link
                          href="/layanan/tempat"
                          className="px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] hover:text-[#000000] hover:bg-[#1DCD9F] transition-colors"
                        >
                          Tempat Latihan
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors ${
                  isActive ? 'text-[#FFFFFF]' : 'text-[#FFFFFF] hover:text-[#1DCD9F]'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1DCD9F]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Register Button Header (Desktop) & Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#daftar" className="inline-flex items-center gap-2 bg-[#1DCD9F] hover:bg-[#169976] text-[#FFFFFF] font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-[#1DCD9F]/20">
                <span>Daftar Sekarang</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden text-[#FFFFFF] p-2 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#000000] border-b border-[#FFFFFF]/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith('/layanan'));

              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="flex flex-col">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-semibold ${isActive ? 'text-[#1DCD9F]' : 'text-[#FFFFFF]'}`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
                        className="p-2 text-[#222222]"
                      >
                        <svg className={`w-4 h-4 transition-transform ${mobileLayananOpen ? 'rotate-180 text-[#FFFFFF]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Mobile Submenu */}
                    {mobileLayananOpen && (
                      <div className="pl-4 flex flex-col gap-2.5 pt-2 border-l border-[#FFFFFF]/10 my-1">
                        <Link
                          href="/layanan/pelatih"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-[#222222] hover:text-[#1DCD9F] py-1"
                        >
                          • Pelatih
                        </Link>
                        <Link
                          href="/layanan/program"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-[#222222] hover:text-[#1DCD9F] py-1"
                        >
                          • Program
                        </Link>
                        <Link
                          href="/layanan/tempat"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-[#222222] hover:text-[#1DCD9F] py-1"
                        >
                          • Tempat Latihan
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 ${isActive ? 'text-[#1DCD9F]' : 'text-[#FFFFFF]'}`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#FFFFFF]/10 flex flex-col">
              <Link
                href="/#daftar"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#1DCD9F] hover:bg-[#169976] text-[#000000] font-bold text-sm px-6 py-3 rounded-full shadow-lg"
              >
                <span>Daftar Sekarang</span>
                <span className="text-base font-extrabold">↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
