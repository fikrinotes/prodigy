import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Tentang Prodigy",
  description:
    "Pelajari lebih lanjut tentang Prodigy — platform kurasi sumber belajar STEM terbaik untuk para pelajar Indonesia.",
};

const values = [
  { icon: "🎯", title: "Kualitas di atas Kuantitas", desc: "Kami pilih resource yang benar-benar efektif, bukan sekadar mengumpulkan sebanyak mungkin link." },
  { icon: "🔓", title: "Akses Terbuka", desc: "Semua resource gratis atau memiliki versi gratis — karena ilmu seharusnya bisa diakses oleh siapa saja." },
  { icon: "🌱", title: "Berkembang Bersama", desc: "Platform ini terus diperbarui seiring perkembangan dunia STEM yang cepat berubah." },
];

const categories = [
  { icon: "📐", name: "Mathematics & Statistics", href: "/belajar/mathematics-statistics" },
  { icon: "🔬", name: "Science & Engineering", href: "/belajar/science" },
  { icon: "📊", name: "Data Science", href: "/belajar/data-science" },
  { icon: "🤖", name: "AI & Machine Learning", href: "/belajar/ai-ml" },
  { icon: "💻", name: "Programming & CS", href: "/belajar/programming" },
  { icon: "🌐", name: "Web & Mobile Dev", href: "/belajar/web-mobile" },
  { icon: "🎮", name: "Game Development", href: "/belajar/game-dev" },
  { icon: "🔒", name: "Cybersecurity & IT", href: "/belajar/cybersecurity" },
];

export default function TentangPage() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.blob} />
        </div>
        <div className="container">
          <p className={styles.eyebrow}>Tentang Kami</p>
          <h1 className={styles.title}>Apa itu Prodigy?</h1>
          <p className={styles.subtitle}>
            Prodigy adalah platform kurasi sumber belajar STEM (Science, Technology, Engineering, Mathematics) yang dirancang untuk membantu
            para pelajar Indonesia menemukan jalan belajar yang tepat — tanpa harus
            membuang waktu berjam-jam mencari resource yang berkualitas.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <p className={styles.eyebrow}>Latar Belakang</p>
              <h2 className={styles.sectionTitle}>Kenapa Prodigy Ada?</h2>
              <div className="section-divider" />
              <p className={styles.bodyText}>
                Di era digital ini, resource belajar sains, teknologi, dan pemrograman tersebar di mana-mana —
                YouTube, Coursera, Medium, GitHub, dan lainnya. Masalahnya,{" "}
                <strong>terlalu banyak pilihan justru membingungkan</strong>. Pemula
                sering tidak tahu harus mulai dari mana.
              </p>
              <p className={styles.bodyText}>
                Prodigy hadir untuk menjawab pertanyaan itu. Kami mengkurasi resource
                terbaik dari internet, mengelompokkannya berdasarkan topik dan level,
                sehingga kamu bisa langsung fokus belajar — bukan mencari.
              </p>
            </div>
            <div className={`glass-card ${styles.quoteCard}`}>
              <span className={styles.quoteIcon}>"</span>
              <p className={styles.quoteText}>
                Jadilah prodigy bukan karena bakat, tapi karena konsistensi dan
                sumber belajar yang tepat.
              </p>
              <span className={styles.quoteMark}>"</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centeredHeader}>
            <p className={styles.eyebrow}>Nilai Kami</p>
            <h2 className={styles.sectionTitle}>Yang Kami Pegang Teguh</h2>
            <div className="section-divider" style={{ margin: "0 auto 40px" }} />
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={`glass-card ${styles.valueCard}`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centeredHeader}>
            <p className={styles.eyebrow}>Yang Kami Kurasi</p>
            <h2 className={styles.sectionTitle}>Bidang yang Tersedia</h2>
            <div className="section-divider" style={{ margin: "0 auto 40px" }} />
          </div>
          <div className={styles.catList}>
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className={`glass-card ${styles.catItem}`}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catName}>{cat.name}</span>
                <span className={styles.catArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Siap Mulai Belajar?</h2>
            <p className={styles.ctaDesc}>Temukan resource yang tepat untuk perjalanan belajarmu.</p>
            <Link href="/belajar" className="btn btn-primary">
              🚀 Jelajahi Sumber Belajar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
