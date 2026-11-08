"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "lo" | "en";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("lo");

  useEffect(() => {
    let frame: number | undefined;

    try {
      const savedLanguage = window.localStorage.getItem("site-language");
      if (savedLanguage === "lo" || savedLanguage === "en") {
        frame = window.requestAnimationFrame(() => setLanguageState(savedLanguage));
      }
    } catch (error) {
      console.error("Could not read the saved language preference.", error);
    }

    return () => {
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;

  }, [language]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);

    try {
      window.localStorage.setItem("site-language", nextLanguage);
    } catch (error) {
      console.error("Could not save the language preference.", error);
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}
