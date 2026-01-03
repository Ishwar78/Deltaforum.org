import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ImpactSection from "@/components/home/ImpactSection";
import CausesSection from "@/components/home/CausesSection";
import CTASection from "@/components/home/CTASection";
import BlogPreview from "@/components/home/BlogPreview";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ImpactSection />
      <CausesSection />
      <BlogPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
