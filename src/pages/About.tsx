import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/ui/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Target, Eye, Award } from "lucide-react";

const team = [
  { name: "Jai Parkash", role: "Founder & President", initials: "JP" },
  { name: "Community Leaders", role: "Village Coordinators", initials: "CL" },
  { name: "Volunteers", role: "100+ Active Members", initials: "V" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <PageBanner
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
        title="About Us"
        subtitle="Our Story"
        description="Delta Forum Society was established with a vision to transform lives through education and environmental conservation in Rohtak, Haryana."
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-primary/5 border border-primary/20"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower underprivileged children through quality education, support women in 
                achieving self-reliance, and protect our environment through sustainable practices. 
                We believe that every child deserves a chance to learn, grow, and succeed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-secondary/5 border border-secondary/20"
            >
              <div className="inline-flex p-3 rounded-xl bg-secondary/10 text-secondary mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every child has access to education, women are economically 
                independent, and our environment thrives for future generations. We envision 
                sustainable communities that nurture both people and planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Believe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "We care deeply about the communities we serve and act with empathy." },
              { icon: Award, title: "Integrity", desc: "Transparency and honesty guide every action we take." },
              { icon: Users, title: "Community", desc: "We believe in the power of collective action and local participation." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex p-4 rounded-xl bg-accent text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              People Behind the Mission
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
