import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import BannerCarousel from "@/components/home/BannerCarousel";
import ImpactSection from "@/components/home/ImpactSection";
import CausesSection from "@/components/home/CausesSection";
import CTASection from "@/components/home/CTASection";
import BlogPreview from "@/components/home/BlogPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <BannerCarousel />
      <ImpactSection />
      <CausesSection />
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
