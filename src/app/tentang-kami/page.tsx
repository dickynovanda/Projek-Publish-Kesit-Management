import Link from 'next/link';

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#222222]">
      <section className="relative bg-[#000000] h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#FFFFFF]">
        <div className="absolute inset-0 z-0">
          <img src="/images/Dokumentasi1.jpg" alt="Kegiatan Kesit Management" className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-[center_35%] filter brightness-[1.25] contrast-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/78 to-[#000000]/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16">
          <p className="mb-4 text-xs font-bold tracking-widest text-[#1DCD9F]">TENTANG KESIT MANAGEMENT</p>
          <h1 className="max-w-3xl text-4xl font-extrabold sm:text-6xl">Lebih dari latihan, kami membangun keberanian.</h1>
          <p className="mt-5 max-w-xl text-[#FFFFFF]">Ruang belajar renang yang aman, terarah, dan menyenangkan untuk setiap tahap perkembangan.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-none">
          <svg className="h-16 w-full text-[#FFFFFF] fill-current sm:h-24 lg:h-32" preserveAspectRatio="none" viewBox="0 0 1440 120"><path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z"></path></svg>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div><p className="text-xs font-bold tracking-widest text-[#222222]">SIAPA KAMI</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Tumbuh percaya diri, satu kayuhan setiap hari.</h2><p className="mt-5 leading-relaxed text-[#222222]">Kesit Management mempertemukan latihan teknik, kebiasaan disiplin, dan semangat kebersamaan. Kami mendampingi siswa dari langkah pertama di air hingga berani mengejar prestasi.</p><Link href="/layanan" className="mt-7 inline-block rounded-full bg-[#1DCD9F] px-6 py-3 font-bold text-[#000000]">Jelajahi Layanan</Link></div>
        <img src="/images/Dokumentasi1.jpg" alt="Pendampingan latihan renang" className="h-80 w-full rounded-3xl object-cover" />
      </section>
      <section className="bg-[#000000] px-6 py-16 text-[#FFFFFF]"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3"><div><strong className="text-4xl text-[#1DCD9F]">120+</strong><p className="mt-2 text-[#222222]">Siswa aktif</p></div><div><strong className="text-4xl text-[#1DCD9F]">4</strong><p className="mt-2 text-[#222222]">Pelatih</p></div><div><strong className="text-4xl text-[#1DCD9F]">18</strong><p className="mt-2 text-[#222222]">Medali</p></div></div></section>
    </main>
  );
}
