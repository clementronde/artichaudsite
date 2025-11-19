export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Peut aussi être "Organization"
    "name": "Artichaud",
    "url": "https://artichaud-studio.com",
    "logo": "https://artichaud-studio.com/icon.png", 
    "image": "https://artichaud-studio.com/opengraph-image.jpg",
    "description": "Agence web créative spécialisée en développement TSX et design.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
      // Ajoutez "addressLocality": "Paris" si vous voulez être localisé
    },
    "priceRange": "$$-$$$",
    "sameAs": [
      // Ajoutez vos vrais liens ici pour booster l'autorité
      "https://www.instagram.com/votre_compte",
      "https://www.linkedin.com/company/votre_page",
      "https://github.com/votre_repo"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
