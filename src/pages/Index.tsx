import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import BannerCarousel from "@/components/home/BannerCarousel";
import ServicesSection from "@/components/home/ServicesSection";
import ImpactSection from "@/components/home/ImpactSection";
import CausesSection from "@/components/home/CausesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <BannerCarousel />
      <ServicesSection />
      <ImpactSection />
      <CausesSection />
      <GalleryPreview />
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
