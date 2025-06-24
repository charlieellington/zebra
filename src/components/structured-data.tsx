export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Zebra Design",
    "alternateName": "Zebra Design Studio",
    "description": "AI-powered design and development services for startups and SMEs. Launch your digital product in weeks, not months.",
    "url": "https://zebradesign.studio",
    "logo": "https://zebradesign.studio/images/logo.png",
    "sameAs": [
      "https://twitter.com/charlieellington",
      "https://linkedin.com/in/charlieellington",
      "https://github.com/charlieellington"
    ],
    "founder": {
      "@type": "Person",
      "name": "Charlie Ellington",
      "jobTitle": "Founder & Lead Designer-Developer"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Design & Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Monthly Design & Development Subscription",
            "description": "Full-service design and development on a monthly subscription basis",
            "price": "5000",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "5000",
              "priceCurrency": "EUR",
              "unitText": "MONTH"
            }
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 