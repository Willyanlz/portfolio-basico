import type { Metadata } from "next";
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
        url: "/image/perfil.jpeg",
        width: 500,
        height: 500,
        alt: "Willyan Genaro - Desenvolvedor Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Willyan Genaro | Desenvolvedor Web",
    description:
      "Desenvolvedor web há 4 anos. Sites, landing pages, e-commerces e sistemas.",
    images: ["/image/perfil.jpeg"],
  },
  alternates: {
    canonical: "https://labswill.com",
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
        <link rel="icon" href="/image/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://labswill.com" />
        <meta name="theme-color" content="#14181c" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* A verificação do Google Search Console já foi concluída por outro método */}
      </head>
      <body>
        <SeoSchema />
        {children}
      </body>
    </html>
  );
}