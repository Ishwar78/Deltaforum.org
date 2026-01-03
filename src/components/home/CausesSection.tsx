import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TreePine, GraduationCap, Users2, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const causes = [
  {
    icon: TreePine,
    title: "Tree Plantation",
    description: "We plant trees across villages to combat climate change and create green spaces for future generations.",
    color: "bg-secondary/10 text-secondary",
    borderColor: "border-secondary/20 hover:border-secondary",
  },
  {
    icon: GraduationCap,
    title: "Girls' Education",
    description: "Empowering girls through quality education, breaking barriers and building confident leaders of tomorrow.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-primary/20 hover:border-primary",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    description: "Supporting women with skills training, financial literacy, and opportunities for self-reliance.",
    color: "bg-secondary/10 text-secondary",
    borderColor: "border-secondary/20 hover:border-secondary",
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    description: "Preserving natural resources, promoting sustainable practices, and protecting biodiversity.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-primary/20 hover:border-primary",
  },
];

const CausesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Causes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We focus on sustainable initiatives that create lasting impact in education, 
            women empowerment, and environmental conservation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`group h-full p-8 rounded-2xl bg-card border-2 ${cause.borderColor} card-hover`}>
                <div className={`inline-flex p-4 rounded-xl ${cause.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cause.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {cause.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cause.description}
                </p>
                <Link 
                  to="/causes" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/causes">
              View All Causes <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CausesSection;
