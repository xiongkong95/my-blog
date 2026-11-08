"use client";

import Link from "next/link";
import { useLanguage } from "./language-context";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const isLao = language === "lo";
  const navigation = [
    { label: isLao ? "ໜ້າຫຼັກ" : "Home", href: "/" },
    { label: isLao ? "ກ່ຽວກັບ" : "About", href: "/about" },
    { label: isLao ? "ບົດຄວາມ" : "Blog", href: "/blog" },
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label={isLao ? "ໜ້າຫຼັກ" : "Home"}>
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-copy">
            <span className="brand-name">Kongmengxiong YN</span>
          </span>
        </Link>
        <nav className="top-navigation" aria-label={isLao ? "ເມນູສ່ວນເທິງ" : "Main navigation"}>
          {navigation.map((item) => (
            <Link className="top-navigation-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={isLao ? "ເລືອກພາສາ" : "Choose language"}>
            <button
              aria-pressed={isLao}
              className={isLao ? "language-option is-active" : "language-option"}
              onClick={() => setLanguage("lo")}
              type="button"
            >
              ລາວ
            </button>
            <span className="language-divider" aria-hidden="true">/</span>
            <button
              aria-pressed={!isLao}
              className={!isLao ? "language-option is-active" : "language-option"}
              onClick={() => setLanguage("en")}
              type="button"
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <div className="site-frame">
        <aside className="sidebar">
          <nav className="side-navigation" aria-label={isLao ? "ເມນູດ້ານຂ້າງ" : "Sidebar navigation"}>
            {navigation.map((item) => (
              <Link className="side-navigation-link" href={item.href} key={item.href}>
                <span>{item.label}</span>
                <span className="side-nav-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="page-content">{children}</main>
      </div>

      <footer className="site-footer">
        <span>© Kongmengxiong YN</span>
      </footer>
    </div>
  );
}
