import { Helmet } from "react-helmet";

const SITE_URL = "https://homedecor.rs";
const SITE_NAME = "Home Decor";
const DEFAULT_DESCRIPTION =
  "Home Decor Beograd — zavese, draperije, tapete, venecijaneri, mebl štof i hotelski program. Tekstil i oprema za enterijer po meri, sa 20+ godina iskustva.";
const DEFAULT_KEYWORDS =
  "Home Decor Beograd, zavese, draperije, tapete, venecijaneri, plise, mebl štof, garnišne, posteljine, hotelski program, dekoracija enterijera";
const DEFAULT_OG_IMAGE = "/assets/hero/bg.jpg";

/**
 * Centralized SEO component. Renders title, meta description, keywords,
 * canonical, Open Graph, Twitter Card and (optional) JSON-LD structured data.
 */
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_OG_IMAGE,
  path = "",
  type = "website",
  locale = "sr_RS",
  jsonLd,
  noindex = false,
}) {
  const baseTitle = title || "Oplemenite svoj životni prostor";
  const fullTitle = baseTitle.toLowerCase().includes("home decor")
    ? baseTitle
    : `${baseTitle} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path || ""}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary */}
      <html lang={locale.startsWith("en") ? "en" : "sr"} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Theme & misc */}
      <meta name="theme-color" content="#1a1d20" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Structured data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

/* ────────── Shared JSON-LD helpers ────────── */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Home Decor",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: ["+381116435570", "+381116435568", "+381603456963"],
  email: "office@homedecor.rs",
  image: `${SITE_URL}/assets/hero/bg.jpg`,
  logo: `${SITE_URL}/assets/hdlogo.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Južni bulevar 130",
    addressLocality: "Beograd",
    addressRegion: "Vračar",
    postalCode: "11000",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.7932923,
    longitude: 20.484398,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/home_decor_beograd",
    "https://www.facebook.com/homedecortekstil/",
  ],
  priceRange: "€€",
};

export function productServiceSchema({ name, description, image, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: { "@id": `${SITE_URL}/#business` },
    name,
    description,
    image: `${SITE_URL}${image}`,
    url: `${SITE_URL}${path}`,
    areaServed: { "@type": "Country", name: "Serbia" },
  };
}

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});
