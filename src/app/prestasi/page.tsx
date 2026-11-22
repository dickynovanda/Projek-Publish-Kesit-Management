'use client';
import Link from 'next/link';

export default function PrestasiPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#f3ecd8]">
      <section className="relative bg-transparent h-[640px] sm:h-[640px] flex items-center pt-24 pb-28 overflow-hidden text-[#f3ecd8]">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-16">
          <p className="mb-4 text-sm font-bold tracking-widest text-[#adff5f]">HASIL DARI SEBUAH PROSES</p>
          <h1 className="max-w-3xl text-4xl font-extrabold sm:text-6xl">Prestasi Siswa</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#e6e8df]">Di balik setiap medali, ada ketekunan, keberanian, dan dukungan satu tim.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-bold tracking-widest text-[#adff5f]">GALERI PENCAPAIAN</p>
        <h2 className="mt-2 text-3xl font-extrabold">Setiap perjuangan layak dirayakan.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {['Dokumentasi2.JPG', 'Dokumentasi3.jpg', 'Dokumentasi4.jpg'].map((image, index) => (
            <article key={image} className="overflow-hidden rounded-2xl border border-[#3b4432] bg-transparent shadow-sm">
              <img src={`/images/${image}`} alt={`Pencapaian siswa ${index + 1}`} className="aspect-[4/3] w-full bg-[#20241c] object-cover" />
              <div className="p-5"><p className="font-bold">Pencapaian siswa Kesit</p><p className="mt-1 text-base leading-relaxed text-[#e6e8df]">Ketekunan dalam setiap latihan.</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-transparent px-6 py-16 text-center text-[#f3ecd8]"><h2 className="text-3xl font-extrabold">Siap menulis cerita renangmu?</h2><Link href="/layanan" className="mt-6 inline-block rounded-full bg-[#adff5f] hover:bg-[#c4ff8d] px-6 py-3 font-bold text-[#000000] transition-colors">Lihat Layanan</Link></section>
    </main>
  );
}
