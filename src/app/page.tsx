import Link from "next/link";
import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import resourcesData from "@/data/resources.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Prodigy — Become a STEM Prodigy",
  description:
    "Platform kurasi sumber belajar STEM terbaik. Temukan resource untuk Sains, Matematika, Data Science, AI, Web Dev, Game Dev, dan lebih banyak lagi — semua gratis dan terstruktur.",
};

const features = [
  {
    icon: "🎯",
    title: "Dikurasi dengan Cermat",
    desc: "Setiap sumber belajar dipilih berdasarkan kualitas, relevansi, dan efektivitasnya — bukan sekadar kuantitas.",
  },
  {
    icon: "🆓",
    title: "Gratis & Terbuka",
    desc: "Semua resource yang ditampilkan dapat diakses secara gratis atau memiliki versi gratis yang substansial.",
  },
  {
    icon: "🗂️",
    title: "Terstruktur per Topik",
    desc: "Resource dikelompokkan berdasarkan bidang dan level agar kamu bisa menemukan jalur belajar yang tepat.",
  },
];

export default function HomePage() {
  const previewCategories = resourcesData.categories.slice(0, 6);

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.grid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroBadge} animate-fade-in-up`}>
            ✨ Platform Belajar STEM Terkurasi
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-in-up delay-1`}>
            Jadilah{" "}
            <span className={styles.gradientText}>Prodigy</span>
            <br />
            yang Sesungguhnya
          </h1>

          <p className={`${styles.heroDesc} animate-fade-in-up delay-2`}>
            Temukan ratusan sumber belajar terbaik — dari Sains, Matematika, Data Science, AI,
            hingga Programming. Semua dikurasi, terstruktur,
            dan siap memandu perjalanan belajarmu.
          </p>

          <div className={`${styles.heroCta} animate-fade-in-up delay-3`}>
            <Link href="/belajar" className="btn btn-primary" id="cta-belajar-sekarang">
              🚀 Belajar Sekarang!
            </Link>
            <Link href="/tentang" className="btn btn-outline">
              Tentang Prodigy
            </Link>
          </div>

          <div className={`${styles.heroStats} animate-fade-in-up delay-4`}>
            <div className={styles.stat}>
              <span className={styles.statNum}>8</span>
              <span className={styles.statLabel}>Kategori</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>40+</span>
              <span className={styles.statLabel}>Resource</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Kenapa Prodigy?</p>
            <h2 className={styles.sectionTitle}>Belajar yang Lebih Terarah</h2>
            <div className="section-divider" style={{ margin: "0 auto 0" }} />
          </div>

          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} className={`glass-card ${styles.featureCard}`}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Preview ── */}
      <section className={styles.preview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Eksplorasi Topik</p>
            <h2 className={styles.sectionTitle}>Temukan Bidang yang Kamu Suka</h2>
            <div className="section-divider" style={{ margin: "0 auto 24px" }} />
          </div>

          <div className={styles.categoryGrid}>
            {previewCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          <div className={styles.previewCta}>
            <Link href="/belajar" className="btn btn-outline">
              Lihat Semua Kategori →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <h2 className={styles.ctaTitle}>Siap Mulai Perjalananmu?</h2>
            <p className={styles.ctaDesc}>
              Ribuan pelajar sudah memulai. Sekarang giliran kamu — pilih topik yang
              kamu minati dan mulai belajar hari ini.
            </p>
            <Link href="/belajar" className="btn btn-primary" id="cta-banner-belajar">
              🚀 Mulai Belajar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
