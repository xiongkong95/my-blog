"use client";

import Link from "next/link";
import { useLanguage } from "../language-context";
import { blogPosts } from "./blog-data";

export default function BlogPage() {
  const { language } = useLanguage();
  const isLao = language === "lo";

  return (
    <section>
      <div className="blog-heading">
        <h1 className="page-title">{isLao ? "ບົດຄວາມ" : "Blog"}</h1>
        <p className="article-copy">
          {isLao
            ? "ເລືອກອ່ານບົດຄວາມທີ່ສົນໃຈ ແລະ ສຳຫຼວດລາຍລະອຽດເພີ່ມເຕີມ."
            : "Choose a story that interests you and explore the details."}
        </p>
      </div>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug}>
            <div className="blog-card-topline">
              <span className="blog-card-label">{isLao ? `ບົດຄວາມ ${index + 1}` : `BLOG ${index + 1}`}</span>
              <span className="blog-card-arrow" aria-hidden="true">↗</span>
            </div>
            <h2 className="blog-card-title">{isLao ? post.title : post.titleEn}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}
