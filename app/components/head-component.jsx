import Head from 'next/head';
import {personalData} from "@/utils/data/personal-data";

export default function HeadComponent() {
  return (
    <Head>
      <title>{personalData.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={Object.values(personalData.description).join(" ")} />
      <meta name="keywords" content={personalData.keywords.join(", ")} />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content={personalData.fullname} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta property="og:site_name" content={personalData.title} />
      <meta property="og:title" content={personalData.title} />
      <meta property="og:description" content={Object.values(personalData.description).join(" ")} />
      <meta property="og:locale" content="fr_BE" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={personalData.siteURL} />
      <meta property="og:image" content="preview.jpg" />
      <meta property="og:image:alt" content={personalData.title} />
      <meta property="og:image:width" content="1440" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content={personalData.siteURL} />
      <link rel="canonical" href={personalData.siteURL} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
}