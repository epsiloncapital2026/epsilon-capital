import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Epsilon Capital — Conseil en transformation organisationnelle",
  description:
    "Cabinet de conseil spécialisé en études stratégiques, organisation, transformation et formation. Nous accompagnons les organisations dans leurs transformations.",
  metadataBase: new URL("https://www.epsiloncapital.ma"),
  openGraph: {
    title: "Epsilon Capital — Conseil en transformation organisationnelle",
    description:
      "Études stratégiques, organisation, transformation et formation pour les organisations publiques et privées.",
    type: "website",
    locale: "fr_FR",
    siteName: "Epsilon Capital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epsilon Capital",
    description:
      "Cabinet de conseil en transformation organisationnelle.",
  },
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
