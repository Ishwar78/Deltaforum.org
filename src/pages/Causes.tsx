import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/ui/PageBanner";
import { TreePine, GraduationCap, Users2, Leaf, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const causes = [
  {
    icon: TreePine,
    title: "Tree Plantation",
    description: "Our tree plantation initiative aims to combat climate change and create green spaces across rural India. We organize regular plantation drives, involving local communities in nurturing these saplings into thriving trees.",
    impact: ["50,000+ trees planted", "100+ villages covered", "Carbon footprint reduction"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
  {
    icon: GraduationCap,
    title: "Girls' Education",
    description: "Education is the foundation of empowerment. We provide scholarships, school supplies, and mentorship programs to ensure every girl has access to quality education, regardless of her family's financial situation.",
    impact: ["5,000+ girls educated", "Scholarship programs", "Career counseling"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    description: "We believe in empowering women through skill development, financial literacy, and entrepreneurship training. Our programs help women become self-reliant and contribute to their family's economic well-being.",
    impact: ["1,000+ women trained", "Self-help groups", "Micro-enterprise support"],
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    description: "Beyond tree plantation, we work on comprehensive environmental conservation including water harvesting, waste management, and promoting sustainable agricultural practices in farming communities.",
    impact: ["Clean water projects", "Sustainable farming", "Waste reduction"],
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
];

const CausesPage = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <PageBanner
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80"
        title="Our Causes"
        subtitle="Our Mission"
        description="We focus on sustainable initiatives that create lasting impact in education, women empowerment, and environmental conservation."
      />

      {/* Causes Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {causes.map((cause, index) => (
              <motion.div
                key={cause.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`inline-flex p-4 rounded-xl ${cause.bgColor} ${cause.color} mb-6`}>
                    <cause.icon className="h-10 w-10" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {cause.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {cause.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {cause.impact.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${cause.color}`} />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/donate">
                      Support This Cause <Heart className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`rounded-3xl overflow-hidden aspect-video ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <img 
                    src={cause.image} 
                    alt={cause.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Your contribution, no matter how small, creates a lasting impact on lives and our planet.
            </p>
            <Button 
              size="xl" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link to="/donate">
                Donate Now <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CausesPage;
