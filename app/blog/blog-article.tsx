"use client";

import Link from "next/link";
import { useLanguage } from "../language-context";

type BlogPost = {
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  slug: string;
};

export function BlogArticle({ post }: { post: BlogPost }) {
  const { language } = useLanguage();
  const isLao = language === "lo";

  return (
    <article className="article-panel">
      <p className="eyebrow">{isLao ? "ບັນທຶກ / ບົດຄວາມ" : "JOURNAL / BLOG"}</p>
      <h1 className="page-title">{isLao ? post.title : post.titleEn}</h1>
      <p className="article-copy">{isLao ? post.content : post.contentEn}</p>
      <div className="article-divider" />
      <Link className="text-link" href="/blog">
        <span aria-hidden="true">←</span> {isLao ? "ກັບໄປບົດຄວາມ" : "Back to Blog"}
      </Link>
    </article>
  );
}
