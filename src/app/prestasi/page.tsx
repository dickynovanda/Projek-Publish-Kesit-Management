'use client';
import Link from 'next/link';

export default function PrestasiPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#222222]">
      <section className="relative bg-[#000000] h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#FFFFFF]">
        <div className="absolute inset-0 z-0">
          <img src="/images/Dokumentasi1.jpg" alt="Latihan renang Kesit" className="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-[center_35%] filter brightness-[1.25] contrast-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/78 to-[#000000]/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16">
          <p className="mb-4 text-xs font-bold tracking-widest text-[#1DCD9F]">HASIL DARI SEBUAH PROSES</p>
          <h1 className="max-w-3xl text-4xl font-extrabold sm:text-6xl">Prestasi Siswa Kesit Management</h1>
          <p className="mt-5 max-w-xl text-[#FFFFFF]">Di balik setiap medali, ada ketekunan, keberanian, dan dukungan satu tim.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-none">
          <svg className="h-16 w-full text-[#FFFFFF] fill-current sm:h-24 lg:h-32" preserveAspectRatio="none" viewBox="0 0 1440 120"><path d="M0,0 C480,110 960,110 1440,0 L1440,120 L0,120 Z"></path></svg>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xs font-bold tracking-widest">GALERI PENCAPAIAN</p>
        <h2 className="mt-2 text-3xl font-extrabold">Setiap perjuangan layak dirayakan.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {['Dokumentasi2.JPG', 'Dokumentasi3.jpg', 'Dokumentasi4.jpg'].map((image, index) => (
            <article key={image} className="overflow-hidden rounded-2xl border border-[#222222] bg-[#FFFFFF] shadow-sm">
              <img src={`/images/${image}`} alt={`Pencapaian siswa ${index + 1}`} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5"><p className="font-bold">Pencapaian siswa Kesit</p><p className="mt-1 text-sm text-[#222222]">Ketekunan dalam setiap latihan.</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#000000] px-6 py-16 text-center text-[#FFFFFF]"><h2 className="text-3xl font-extrabold">Siap menulis cerita renangmu?</h2><Link href="/layanan" className="mt-6 inline-block rounded-full bg-[#1DCD9F] px-6 py-3 font-bold text-[#000000]">Lihat Layanan</Link></section>
    </main>
  );
}
