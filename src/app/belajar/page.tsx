"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
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

export default function BelajarPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLevel, setActiveLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = resourcesData.categories;

  const allResources = useMemo(
    () => categories.flatMap((c) => c.resources.map((r) => ({ ...r, categoryId: c.id, categoryName: c.name }))),
    [categories]
  );

  const filtered = useMemo(() => {
    return allResources.filter((r) => {
      const matchCat = activeCategory === "all" || r.categoryId === activeCategory;
      const matchLevel = activeLevel === "all" || r.level === activeLevel;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchLevel && matchSearch;
    });
  }, [allResources, activeCategory, activeLevel, searchQuery]);

  return (
    <div className={styles.page}>
      {/* ── Page Header ── */}
      <div className={styles.pageHeader}>
        <div className="container">
          <p className={styles.eyebrow}>📚 Sumber Belajar</p>
          <h1 className={styles.title}>Temukan Resource yang Tepat</h1>
          <p className={styles.subtitle}>
            Kurasi terbaik dari seluruh internet — video, course, artikel, dan buku,
            dikelompokkan agar mudah ditemukan.
          </p>
        </div>
      </div>

      <div className="container">
        {/* ── Search ── */}
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            id="search-resources"
            type="text"
            className={styles.searchInput}
            placeholder="Cari topik, bahasa, atau sumber..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => setSearchQuery("")}>✕</button>
          )}
        </div>

        {/* ── Category Filter ── */}
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Kategori</div>
          <div className={styles.pills}>
            <button
              id="filter-all-categories"
              className={`${styles.pill} ${activeCategory === "all" ? styles.pillActive : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-cat-${cat.id}`}
                className={`${styles.pill} ${activeCategory === cat.id ? styles.pillActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── Level Filter ── */}
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Level</div>
          <div className={styles.pills}>
            {["all", "Pemula", "Menengah", "Lanjut"].map((lv) => (
              <button
                key={lv}
                id={`filter-level-${lv}`}
                className={`${styles.pill} ${activeLevel === lv ? styles.pillActive : ""}`}
                onClick={() => setActiveLevel(lv)}
              >
                {lv === "all" ? "Semua Level" : lv}
              </button>
            ))}
          </div>
        </div>

        {/* ── Result Count ── */}
        <div className={styles.resultMeta}>
          <span>
            Menampilkan <strong>{filtered.length}</strong> dari {allResources.length} resource
          </span>
        </div>

        {/* ── Resource Grid ── */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((r) => (
              <ResourceCard key={r.id} resource={r as Resource} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🔎</span>
            <p>Tidak ada resource yang cocok.</p>
            <button className="btn btn-ghost" onClick={() => { setSearchQuery(""); setActiveCategory("all"); setActiveLevel("all"); }}>
              Reset filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
