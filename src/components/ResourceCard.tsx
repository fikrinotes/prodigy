import Link from "next/link";
import styles from "./ResourceCard.module.css";

interface Resource {
  id: string;
  title: string;
  type: "video" | "course" | "article" | "book";
  url: string;
  source: string;
  level: "Pemula" | "Menengah" | "Lanjut";
  language: string;
  tags: string[];
  description: string;
}

const typeIcon: Record<string, string> = {
  video: "▶",
  course: "🎓",
  article: "📄",
  book: "📚",
};

const typeLabel: Record<string, string> = {
  video: "Video",
  course: "Course",
  article: "Artikel",
  book: "Buku",
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card ${styles.card}`}
    >
      <div className={styles.header}>
        <span className={`badge badge-${resource.type}`}>
          {typeIcon[resource.type]} {typeLabel[resource.type]}
        </span>
        <span className={`badge badge-${resource.level.toLowerCase()}`}>
          {resource.level}
        </span>
      </div>

      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.description}>{resource.description}</p>

      <div className={styles.footer}>
        <span className={styles.source}>
          <span className={styles.sourceDot} />
          {resource.source}
        </span>
        <span className={styles.lang}>{resource.language}</span>
      </div>

      <div className={styles.tags}>
        {resource.tags.slice(0, 3).map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.arrow}>
        Kunjungi →
      </div>
    </a>
  );
}
