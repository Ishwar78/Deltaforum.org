import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    title: "Education Program",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    title: "Tree Plantation",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    title: "Women Empowerment",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    title: "Community Gathering",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    title: "School Supplies",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
    title: "Forest Conservation",
  },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-accent/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Moments
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our initiatives — education programs, tree plantation drives, and community events.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{image.title}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
