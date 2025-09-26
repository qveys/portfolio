import Head from 'next/head';
import {personalData} from "@/utils/data/personal-data";

export default function HeadComponent() {
  const fullDescription = Object.values(personalData.description).join(" ");
  const keywordsString = personalData.keywords.join(", ");
  
  // Variables SEO utilisant un maximum de personalData
  const seoTitle = personalData.title;
  const seoDescription = personalData.seoDescription;
  const seoKeywords = keywordsString;
  const authorName = personalData.fullname;
  const siteUrl = personalData.siteURL;
  const profileImage = `${siteUrl}${personalData.profileImage}`;
  const previewImage = `${siteUrl}${personalData.previewImage}`;
  
  return (
    <Head>
      {/* Métadonnées de base */}
      <title>{seoTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={authorName} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="geo.region" content={personalData.geoRegion} />
      <meta name="geo.placename" content={personalData.geoPlaceName} />
      <meta name="geo.position" content={personalData.geoPosition} />
      <meta name="ICBM" content={personalData.geoICBM} />
      
      {/* Métadonnées pour les moteurs de recherche */}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#1a1443" />
      <meta name="msapplication-TileColor" content="#1a1443" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoTitle} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={previewImage} />
      <meta property="og:image:alt" content={`${authorName} - ${personalData.designation}`} />
      <meta property="og:image:width" content="1440" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={personalData.twitterHandle} />
      <meta name="twitter:creator" content={personalData.twitterHandle} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={previewImage} />
      <meta name="twitter:image:alt" content={`${authorName} - ${personalData.designation}`} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content={personalData.linkedIn} />
      
      {/* Métadonnées techniques */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Liens canoniques et favicon */}
      <link rel="canonical" href={siteUrl} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Métadonnées supplémentaires pour Quentin Veys */}
      <meta name="subject" content={personalData.seoSubject} />
      <meta name="copyright" content={personalData.seoCopyright} />
      <meta name="classification" content={personalData.seoClassification} />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content={personalData.seoRevisitAfter} />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": authorName,
            "givenName": personalData.firstname,
            "familyName": personalData.lastname,
            "alternateName": ["Quentin Veys", "quentinveys", "Q. Veys"],
            "jobTitle": personalData.designation,
            "description": seoDescription,
            "url": siteUrl,
            "image": profileImage,
            "email": personalData.email,
            "telephone": personalData.phone,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Brussels",
              "addressRegion": "Brussels",
              "addressCountry": "BE"
            },
            "nationality": personalData.nationality,
            "sameAs": [
              personalData.github,
              personalData.linkedIn,
              personalData.facebook,
              personalData.instagram
            ].filter(Boolean),
            "knowsAbout": personalData.keywords.slice(0, 15),
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Software Development"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance Developer"
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Brussels, Belgium"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": siteUrl
            }
          })
        }}
      />
    </Head>
  );
}