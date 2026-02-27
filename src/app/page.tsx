import HomeBanner from "@/components/HomeBanner";
import ServicesSection from "@/components/ServicesSection";
import ClientSection from "@/components/ClientSection";
import ClientStatsSection from "@/components/ClientStatsSection";
import AchievementSection from "@/components/AchievementSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import SpaceSection from "@/components/SpaceSection";
import StudioSection from "@/components/StudioSection";
import OurProgramSection from "@/components/OurProgramSection";
import BlogSection from "@/components/BlogSection";
import NewsBlogSection from "@/components/NewsBlogSection";
import KnowMoreSection from "@/components/KnowMoreSection";

export default function Home() {
  return (
    <main className="min-h-screen -mt-20">
      <HomeBanner />
      <ClientSection />
      <ClientStatsSection />
      <AchievementSection />
      <WhyUsSection />
      <ServicesSection />
      <SpaceSection />
      <StudioSection />
      <OurProgramSection />
      <BlogSection />
      <TestimonialSection />
      <NewsBlogSection />
      <KnowMoreSection />
    </main>
  );
}
