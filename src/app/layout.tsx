import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SeoSchema from "./seo-schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://labswill.com"),
  title: {
    default: "Willyan Genaro | Desenvolvedor Web - Sites, E-commerces e Sistemas",
    template: "%s | Willyan Genaro",
  },
  description:
    "Desenvolvedor web há 4 anos. Crio sites profissionais, landing pages, e-commerces e sistemas de gestão empresarial. Solicite seu orçamento gratuito.",
  keywords: [
    "desenvolvedor web",
    "criação de sites",
    "landing pages",
    "ecommerce",
    "sistemas empresariais",
    "ERP",
    "web designer",
    "Willyan Genaro",
    "desenvolvedor web Franca SP",
    "criação de site profissional",
    "loja virtual",
    "sistema de gestão",
    "Willyan Genaro desenvolvedor",
    "criar site profissional",
  ],
  authors: [{ name: "Willyan Genaro" }],
  creator: "Willyan Genaro",
  publisher: "Willyan Genaro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Willyan Genaro | Desenvolvedor Web",
    description:
      "Transformo ideias em soluções digitais: sites, landing pages, e-commerces e sistemas de gestão empresarial. Orçamento gratuito.",
    url: "https://labswill.com",
    type: "website",
    locale: "pt_BR",
    siteName: "Portfólio Willyan Genaro",
    images: [
      {
        url: "/image/labswill.png",
        width: 1200,
        height: 630,
        alt: "Labswill - Willyan Genaro Desenvolvedor Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Willyan Genaro | Desenvolvedor Web",
    description:
      "Desenvolvedor web há 4 anos. Sites, landing pages, e-commerces e sistemas.",
    images: ["/image/labswill.png"],
  },
  alternates: {
    canonical: "https://labswill.com",
  },
  icons: {
    icon: [
      { url: "/image/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#14181c" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preload" as="image" href="/image/labswill.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PW0374VXNY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PW0374VXNY');
          `}
        </Script>
      </head>
      <body>
        <SeoSchema />
        {children}
      </body>
    </html>
  );
}
