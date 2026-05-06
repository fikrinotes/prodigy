import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <Image src="/Logo.png" alt="Prodigy" width={32} height={32} />
            <span className={styles.brandName}>Prodigy</span>
          </div>
          <p className={styles.tagline}>
            Kurasikan perjalanan belajarmu di bidang STEM. <br />
            Dari pemula hingga prodigy.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.group}>
            <h4 className={styles.groupTitle}>Navigasi</h4>
            <Link href="/" className={styles.link}>Beranda</Link>
            <Link href="/belajar" className={styles.link}>Sumber Belajar</Link>
            <Link href="/tentang" className={styles.link}>Tentang</Link>
          </div>
          <div className={styles.group}>
            <h4 className={styles.groupTitle}>Kategori</h4>
            <Link href="/belajar/mathematics-statistics" className={styles.link}>Matematika</Link>
            <Link href="/belajar/science" className={styles.link}>Sains</Link>
            <Link href="/belajar/data-science" className={styles.link}>Data Science</Link>
            <Link href="/belajar/ai-ml" className={styles.link}>AI & ML</Link>
            <Link href="/belajar/programming" className={styles.link}>Programming</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Prodigy. Dibuat dengan ❤️ untuk para pelajar STEM.</p>
      </div>
    </footer>
  );
}
