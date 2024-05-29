import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChouseUs from "@/components/WhyChouseUs";
import TestmonialCards from "@/components/TestmonialCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChouseUs/>
      <TestmonialCards/>
    </main>
  );
}
