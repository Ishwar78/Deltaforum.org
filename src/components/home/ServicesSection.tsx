import { motion } from "framer-motion";
import { Utensils, Droplets, GraduationCap, Users } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Food for Citizens",
    description: "Providing nutritious meals to those in need"
  },
  {
    icon: Droplets,
    title: "Clean Water Initiative",
    description: "Access to safe drinking water for communities"
  },
  {
    icon: GraduationCap,
    title: "Child Education",
    description: "Quality education for underprivileged children"
  },
  {
    icon: Users,
    title: "Join Our Volunteers",
    description: "Be part of the change in your community"
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Grayscale Effect */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
          alt="Services Background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            OUR SERVICES
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Making a difference in the lives of people through our dedicated initiatives
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -6 : 6 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="group"
            >
              <div className="bg-foreground p-8 rounded-2xl text-center transform transition-all duration-300 cursor-pointer hover:shadow-2xl">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-background/10 flex items-center justify-center">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-background uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-background/60 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
