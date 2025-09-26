// Variables de base pour éviter la répétition
const firstName = "Quentin";
const lastName = "Veys";
const baseName = `${firstName} ${lastName}`;
const baseNameCapitalized = `${firstName} ${lastName.toUpperCase()}`;
const designation = "Software Developer";
const location = "Brussels, Belgium";
const devUsername = "qveys";
const emailDomain = "quentinveys.be";
const siteUrl = "https://" + emailDomain;

export const personalData = {
  // Informations de base
  title: `${baseName} - ${designation} Portfolio | ${emailDomain}`,
  siteURL: siteUrl,
  fullnameCapitalized: baseNameCapitalized,
  fullname: baseName,
  firstname: firstName,
  lastname: lastName,
  profile: '/profile.jpg',
  resume: '/resume.pdf',
  designation: designation,
  
  // Description
  description: {
    part1: "Discover my career path, skills and achievements",
    part2: "through my CV and these interactive portfolio.",
  },
  
  // SEO optimisé (utilise les variables de base)
  seoDescription: `${baseName} - ${designation} based in ${location}. Discover my career path, skills and achievements through my CV and these interactive portfolio.`,
  seoSubject: `${baseName} ${designation} Portfolio`,
  seoCopyright: baseName,
  seoClassification: "Portfolio",
  seoRevisitAfter: "7 days",
  
  // Géolocalisation
  geoRegion: "BE-BRU",
  geoPlaceName: location,
  geoPosition: "50.8348;4.3962",
  geoICBM: "50.8348, 4.3962",
  nationality: "Belgian",
  
  // Images SEO
  profileImage: '/profile.jpg',
  previewImage: '/preview.jpg',
  
  // Réseaux sociaux
  twitterHandle: `@${devUsername}`,
  
  // Mots-clés SEO (utilise les variables de base)
  keywords: [
    baseName, 
    emailDomain.replace('.be', ''), 
    `${baseName} developer`, 
    `${baseName} portfolio`, 
    `${baseName} software developer`, 
    `${baseName} ${location.split(',')[0]}`, 
    `${baseName} Belgium`,
    "fullstack developer", 
    "web development", 
    "frontend developer", 
    "backend developer", 
    "JavaScript", 
    "HTML5", 
    "CSS3", 
    "React.js", 
    "Node.js", 
    "web applications", 
    "REST API", 
    "database management", 
    "SQL", 
    "NoSQL", 
    "MongoDB", 
    "responsive design", 
    "Git", 
    "software architecture", 
    "agile development", 
    "DevOps", 
    "tech portfolio", 
    "software engineering", 
    "web developer portfolio", 
    "UI/UX", 
    "TypeScript", 
    "cloud computing", 
    "AWS"
  ],
  
  // Contact
  email: `contact@${emailDomain}`,
  phone: '',
  address: `Etterbeek, ${location}`,
  
  // Réseaux sociaux (utilise les variables de base)
  github: `https://github.com/${devUsername}`,
  facebook: `https://www.facebook.com/${devUsername}`,
  instagram: `https://www.instagram.com/${devUsername}`,
  linkedIn: `https://www.linkedin.com/in/${devUsername}`,
  twitter: '',
  stackOverflow: '',
  leetcode: "",
  devUsername: devUsername,
}