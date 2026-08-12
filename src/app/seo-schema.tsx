export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Willyan Genaro",
    url: "https://labswill.com",
    image: "https://labswill.com/image/labswill.png",
    jobTitle: "Desenvolvedor Web",
    description:
      "Desenvolvedor web há 4 anos, especializado em criação de sites, landing pages, e-commerces e sistemas de gestão empresarial.",
    knowsAbout: [
      "Desenvolvimento Web",
      "Criação de Sites",
      "Landing Pages",
      "E-commerce",
      "Sistemas de Gestão",
      "Web Design",
    ],
    sameAs: [
      "https://www.linkedin.com/in/willyanlz/",
      "https://github.com/Willyanlz",
      "https://t.me/willyanlz",
    ],
    offers: {
      "@type": "Offer",
      description:
        "Serviços de criação de sites, landing pages, e-commerces e sistemas empresariais.",
      price: "Sob consulta",
      priceCurrency: "BRL",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Franca",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    telephone: "+5516997760515",
    email: "willyangenaro4321@gmail.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
