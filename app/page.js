import {personalData} from "@/utils/data/personal-data";
import QuoteSection from "./components/homepage/quote";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
}

export default async function Home() {
  //const blogs = await getData();

  return (
    <div suppressHydrationWarning>
      <HeroSection/>
      <QuoteSection/>
      <Education/>
      <Skills/>
      <Projects/>
      {/**<Experience/>
       <Blog blogs={blogs}/>**/}
      <ContactSection/>
    </div>
  )
};