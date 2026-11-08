"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../language-context";

type BlogPost = {
  title: string;
  titleEn: string;
  image: string;
  imageAlt: string;
  imageAltEn: string;
  content: string;
  contentEn: string;
  slug: string;
};

export function BlogArticle({ post }: { post: BlogPost }) {
  const { language } = useLanguage();
  const isLao = language === "lo";

  return (
    <article className="article-panel">
      <div className="article-layout">
        <div className="article-image">
          <Image
            src={post.image}
            alt={isLao ? post.imageAlt : post.imageAltEn}
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
          />
        </div>
        <div className="article-content">
          <p className="eyebrow">{isLao ? "ບັນທຶກ / ບົດຄວາມ" : "JOURNAL / BLOG"}</p>
          <h1 className="page-title">{isLao ? post.title : post.titleEn}</h1>
          <p className="article-copy">{isLao ? post.content : post.contentEn}</p>
        </div>
      </div>
      <div className="article-divider" />
      <Link className="text-link" href="/blog">
        <span aria-hidden="true">←</span> {isLao ? "ກັບໄປບົດຄວາມ" : "Back to Blog"}
      </Link>
    </article>
  );
}
