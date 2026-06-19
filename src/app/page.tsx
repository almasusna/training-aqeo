import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import AdvantagesSection from "@/components/AdvantagesSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <AdvantagesSection />
      <FeaturedCourses />
      <CTASection />
    </>
  );
}
