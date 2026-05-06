import Link from "next/link";
import styles from "./CategoryCard.module.css";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  resources: unknown[];
}

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/belajar/${category.id}`} className={`glass-card ${styles.card}`}>
      <div className={styles.iconWrap} style={{ "--cat-color": category.color } as React.CSSProperties}>
        <span className={styles.icon}>{category.icon}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{category.name}</h3>
        <p className={styles.desc}>{category.description}</p>
        <div className={styles.meta}>
          <span className={styles.count}>{category.resources.length} sumber</span>
          <span className={styles.arrow}>Lihat semua →</span>
        </div>
      </div>
    </Link>
  );
}
