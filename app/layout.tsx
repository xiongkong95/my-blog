import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./language-context";
import { SiteShell } from "./site-shell";
import "./globals.css";

const phetsarath = localFont({
  src: "./fonts/Phetsarath OT.ttf",
  variable: "--font-phetsarath-ot",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ເລື່ອງລາວຂອງຂ້ອຍ | ກົ້ງເມັ່ງຊົ່ງ ຢົ້ວນູ",
  description: "ບັນທຶກເລື່ອງລາວ ແລະ ບົດຄວາມຂອງກົ້ງເມັ່ງຊົ່ງ, ເພື່ອເປັນເເຮງບັນດານໃຈ ເເລະ ເເນວທາງໃນການພັດທະນາຄວາມຄິດ ເເລະ ການດຳລົງຊີວິດປະຈຳວັນ.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="lo"
      data-scroll-behavior="smooth"
      className={`${phetsarath.variable} ${geistMono.variable}`}
    >
      <body>
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
