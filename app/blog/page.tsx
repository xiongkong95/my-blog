"use client";

import Link from "next/link";
import Image from "next/image";
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
          <article className="blog-card" key={post.slug}>
            <div className="blog-card-image">
              <Image
                src={post.image}
                alt={isLao ? post.imageAlt : post.imageAltEn}
                fill
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="blog-card-content">
              <div className="blog-card-topline">
                <span className="blog-card-label">{isLao ? `ບົດຄວາມ ${index + 1}` : `BLOG ${index + 1}`}</span>
              </div>
              <h2 className="blog-card-title">{isLao ? post.title : post.titleEn}</h2>
              <Link className="blog-read-more" href={`/blog/${post.slug}`}>
                {isLao ? "ອ່ານເພີ່ມ" : "Read more"}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
