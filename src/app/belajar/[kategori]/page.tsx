import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ResourceCard from "@/components/ResourceCard";
import resourcesData from "@/data/resources.json";
import styles from "./page.module.css";

type Resource = {
  id: string;
  title: string;
  type: "video" | "course" | "article" | "book";
  url: string;
  source: string;
  level: "Pemula" | "Menengah" | "Lanjut";
  language: string;
  tags: string[];
  description: string;
};

interface Props {
  params: Promise<{ kategori: string }>;
}

export async function generateStaticParams() {
  return resourcesData.categories.map((cat) => ({ kategori: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const cat = resourcesData.categories.find((c) => c.id === kategori);
  if (!cat) return { title: "Kategori tidak ditemukan" };
  return {
    title: `${cat.name} — Sumber Belajar`,
    description: cat.description,
  };
}

const levelOrder = ["Pemula", "Menengah", "Lanjut"];

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  const cat = resourcesData.categories.find((c) => c.id === kategori);
  if (!cat) notFound();

  const sorted = [...cat.resources].sort(
    (a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level)
  );

  const counts = {
    Pemula:   sorted.filter((r) => r.level === "Pemula").length,
    Menengah: sorted.filter((r) => r.level === "Menengah").length,
    Lanjut:   sorted.filter((r) => r.level === "Lanjut").length,
  };

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <div className={styles.pageHeader} style={{ "--cat-color": cat.color } as React.CSSProperties}>
        <div className={`container ${styles.headerInner}`}>
          <Link href="/belajar" className={styles.breadcrumb}>← Semua Kategori</Link>

          <div className={styles.headerTop}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>{cat.icon}</span>
            </div>
            <div>
              <h1 className={styles.title}>{cat.name}</h1>
              <p className={styles.desc}>{cat.description}</p>
            </div>
          </div>

          <div className={styles.levelBadges}>
            {Object.entries(counts).map(([level, count]) => (
              <div key={level} className={`${styles.levelBadge} ${styles[`level${level}`]}`}>
                <span className={styles.levelCount}>{count}</span>
                <span className={styles.levelLabel}>{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Resource Grid ── */}
      <div className="container">
        <div className={styles.totalMeta}>
          <strong className={styles.totalNum}>{sorted.length}</strong> resource tersedia di kategori ini
        </div>

        {sorted.length > 0 ? (
          <div className={styles.grid}>
            {sorted.map((r) => (
              <ResourceCard key={r.id} resource={r as Resource} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>Belum ada resource di kategori ini.</div>
        )}

        <div className={styles.footer}>
          <Link href="/belajar" className="btn btn-outline">← Kembali ke Semua Kategori</Link>
        </div>
      </div>
    </div>
  );
}
