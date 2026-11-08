"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./language-context";

export default function HomePage() {
  const { language } = useLanguage();
  const isLao = language === "lo";

  return (
    <div className="content-stack">
      <section className="hero-panel">
        <div className="hero-copy-block">
          <p className="eyebrow">
            {isLao ? "ຍິນດີຕ້ອນຮັບສູ່ເລື່ອງລາວຂອງຂ້ອຍ" : "WELCOME TO MY JOURNAL"}
          </p>
          <h1 className="hero-title">
            {isLao ? "ເລື່ອງລາວທີ່ມີຄວາມໝາຍ" : "Stories that matter"}
          </h1>
          <p className="hero-copy">
            {isLao
              ? "ພື້ນທີ່ສຳລັບແບ່ງປັນປະສົບການ, ແນວຄິດ ແລະ ເລື່ອງລາວໃນແຕ່ລະມື້."
              : "A space to share experiences, ideas, and the stories found in everyday life."}
          </p>
          <div className="hero-actions">
            <Link className="button-link" href="/about">
              {isLao ? "ກ່ຽວກັບຂ້ອຍ" : "About me"} <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button-link" href="/blog">
              {isLao ? "ສຳຫຼວດບົດຄວາມ" : "Explore the journal"} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-portrait">
          <Image
            src="/portrait.png"
            alt={isLao ? "ຮູບຂອງ ກົ້ງເມັ່ງຊົ່ງ" : "Kongmengxiong YN"}
            width={768}
            height={768}
            priority
          />
        </div>
        <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <span className="hero-orbit hero-orbit-two" aria-hidden="true" />
      </section>
    </div>
  );
}
