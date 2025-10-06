import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedMenu />
      <AboutPreview />
      <CTA />
    </div>
  );
}
