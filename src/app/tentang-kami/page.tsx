import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Kursus Renang',
    description: 'Program belajar renang untuk membantu peserta mengenal teknik, meningkatkan keterampilan, dan mengembangkan potensi sesuai tahap kemampuannya.',
    label: 'Kenali program renang',
    href: '/layanan/program',
  },
  {
    number: '02',
    title: 'Event Management',
    description: 'Perencanaan dan penyelenggaraan kompetisi renang dengan pengalaman kegiatan yang tertata, sportif, dan berkesan bagi seluruh peserta.',
    label: 'Lihat kegiatan KESIT',
    href: '/prestasi',
  },
];

const values = [
  'Pembinaan yang terarah',
  'Sportivitas di setiap kegiatan',
  'Kerja sama yang kuat',
  'Pelayanan yang profesional',
];

export default function TentangKamiPage() {
  return (
    <main id="main-content" className="min-h-screen bg-transparent text-[#f3ecd8]">
      <section className="site-container py-14 sm:py-20 lg:pt-24" aria-labelledby="about-title">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label text-sm text-[#adff5f]">Kenali KESIT</p>
            <h1 id="about-title" className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Tumbuh bersama olahraga, bergerak menuju <span className="text-[#adff5f]">prestasi.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#e6e8df] sm:text-lg">Kami mendukung perjalanan perenang melalui pembinaan renang dan menghadirkan kompetisi yang tertata, sportif, serta berkesan.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href="#layanan-kesit" className="inline-flex items-center gap-5 bg-[#adff5f] px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-[#c4ff8d]">Jelajahi layanan <span aria-hidden="true">↘</span></Link>
              <Link href="#cerita-kesit" className="border-b border-[#f3ecd8]/60 pb-2 text-sm font-semibold">Cerita kami <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-3xl border border-[#adff5f]/25 bg-[#171916]">
            <img src="/images/Dokumentasi1.jpg" alt="Kebersamaan peserta dan tim Kesit Management dalam kegiatan renang" width={1482} height={988} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="border-t border-[#adff5f]/25 bg-[#171916] p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#adff5f]">Pembinaan · Kompetisi · Prestasi</p>
              <p className="mt-3 text-xl font-semibold sm:text-2xl">Bergerak untuk masa depan olahraga.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="cerita-kesit" className="site-container py-12 sm:py-16" aria-labelledby="story-title">
        <div className="grid gap-8 border-t border-[#f3ecd8]/20 pt-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label text-sm text-[#adff5f]">Siapa kami</p>
            <h2 id="story-title" className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Ruang untuk belajar, berkembang, dan berprestasi.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#e6e8df]">
            <p><strong className="font-semibold text-[#f3ecd8]">KESIT BEYOND bergerak di bidang kursus renang dan event management olahraga.</strong> Kami mendampingi peserta dalam mengembangkan kemampuan renang, sekaligus menyelenggarakan kegiatan dan kompetisi yang mempertemukan atlet, klub, pelatih, serta masyarakat.</p>
            <p>Dalam setiap program, kami mengutamakan proses pembinaan, kerja sama, dan semangat sportivitas. Kami ingin setiap orang mendapat ruang untuk mencoba, belajar, dan melangkah lebih jauh melalui olahraga.</p>
          </div>
        </div>
      </section>

      <section id="layanan-kesit" className="site-container py-12 sm:py-16" aria-labelledby="services-title">
        <div className="mb-9 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="section-label text-sm text-[#adff5f]">Yang kami lakukan</p>
            <h2 id="services-title" className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Dua layanan, satu semangat.</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[#e6e8df]">Dari proses belajar di kolam hingga pengalaman bertanding, KESIT BEYOND mendukung perjalanan olahraga renang.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="flex flex-col items-start border border-[#adff5f]/30 p-6 sm:p-9">
              <span className="text-sm font-bold tracking-widest text-[#adff5f]">{service.number}</span>
              <h3 className="mt-6 text-2xl font-bold sm:text-3xl">{service.title}</h3>
              <p className="mb-7 mt-4 flex-1 text-base leading-relaxed text-[#e6e8df]">{service.description}</p>
              <Link href={service.href} className="inline-flex items-center gap-5 border-b border-[#adff5f]/60 pb-2 text-sm font-bold text-[#adff5f]">{service.label} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container py-12 sm:py-16" aria-labelledby="values-title">
        <div className="grid gap-8 border-y border-[#f3ecd8]/20 py-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label text-sm text-[#adff5f]">Prinsip kami</p>
            <h2 id="values-title" className="mt-5 max-w-lg text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Nilai yang menyertai setiap langkah.</h2>
          </div>
          <ul className="divide-y divide-[#f3ecd8]/15">
            {values.map((value) => <li key={value} className="flex items-center gap-4 py-5 text-base font-semibold sm:text-lg"><span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#adff5f]" />{value}</li>)}
          </ul>
        </div>
      </section>

      <section className="site-container pb-16 pt-8 sm:pb-24" aria-labelledby="contact-title">
        <div className="flex flex-col justify-between gap-8 border border-[#adff5f]/40 p-7 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 id="contact-title" className="text-3xl font-bold tracking-tight sm:text-4xl">Siap tumbuh bersama KESIT?</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#e6e8df]">Tanyakan program renang atau rencana kegiatan kompetisi kepada tim kami.</p>
          </div>
          <Link href="#kontak" className="inline-flex w-fit shrink-0 items-center gap-5 bg-[#adff5f] px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-[#c4ff8d]">Hubungi tim KESIT <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
