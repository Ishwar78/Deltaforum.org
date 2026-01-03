import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Target, Eye, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const team = [
  { name: "Jai Parkash", role: "Founder & President", initials: "JP" },
  { name: "Community Leaders", role: "Village Coordinators", initials: "CL" },
  { name: "Volunteers", role: "100+ Active Members", initials: "V" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
                Our Story
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Delta Forum Society was established with a vision to transform lives through education 
                and environmental conservation. Based in Rohtak, Haryana, we work tirelessly to 
                create opportunities for underprivileged children and protect our natural resources.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/donate">
                  <Heart className="h-5 w-5 mr-2" />
                  Support Our Mission
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src={logo} alt="Delta Forum Society" className="w-72 h-72 object-contain animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

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
