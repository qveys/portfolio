import Head from 'next/head';
import {personalData} from "@/utils/data/personal-data";

export default function HeadComponent() {
  const fullDescription = Object.values(personalData.description).join(" ");
  const keywordsString = personalData.keywords.join(", ");
  
  return (
    <Head>
      {/* Métadonnées de base */}
      <title>{personalData.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordsString} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={personalData.fullname} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="BE-BRU" />
      <meta name="geo.placename" content="Brussels, Belgium" />
      <meta name="geo.position" content="50.8348;4.3962" />
      <meta name="ICBM" content="50.8348, 4.3962" />
      
      {/* Métadonnées pour les moteurs de recherche */}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#1a1443" />
      <meta name="msapplication-TileColor" content="#1a1443" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={personalData.title} />
      <meta property="og:title" content={personalData.title} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={personalData.siteURL} />
      <meta property="og:image" content={`${personalData.siteURL}/preview.jpg`} />
      <meta property="og:image:alt" content={`${personalData.fullname} - ${personalData.designation}`} />
      <meta property="og:image:width" content="1440" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qveys" />
      <meta name="twitter:creator" content="@qveys" />
      <meta name="twitter:title" content={personalData.title} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${personalData.siteURL}/preview.jpg`} />
      <meta name="twitter:image:alt" content={`${personalData.fullname} - ${personalData.designation}`} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content={personalData.linkedIn} />
      
      {/* Métadonnées techniques */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Liens canoniques et favicon */}
      <link rel="canonical" href={personalData.siteURL} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": personalData.fullname,
            "givenName": personalData.firstname,
            "familyName": personalData.lastname,
            "jobTitle": personalData.designation,
            "description": fullDescription,
            "url": personalData.siteURL,
            "image": `${personalData.siteURL}/profile.jpg`,
            "email": personalData.email,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brussels",
              "addressRegion": "Brussels",
              "addressCountry": "BE"
            },
            "sameAs": [
              personalData.github,
              personalData.linkedIn,
              personalData.facebook,
              personalData.instagram
            ].filter(Boolean),
            "knowsAbout": personalData.keywords.slice(0, 10),
            "alumniOf": "Software Development",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance Developer"
            }
          })
        }}
      />
    </Head>
  );
}