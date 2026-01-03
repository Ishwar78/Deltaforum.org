import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    title: "Education Program",
    category: "Education",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    title: "Tree Plantation Drive",
    category: "Environment",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    title: "Women Empowerment Workshop",
    category: "Women",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    title: "Community Gathering",
    category: "Events",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    title: "School Supplies Distribution",
    category: "Education",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
    title: "Forest Conservation",
    category: "Environment",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80",
    title: "Skills Training",
    category: "Women",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    title: "Volunteer Team",
    category: "Events",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    title: "Classroom Session",
    category: "Education",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    title: "Saplings Ready",
    category: "Environment",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    title: "Women Leaders",
    category: "Women",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    title: "Annual Function",
    category: "Events",
  },
];

const categories = ["All", "Education", "Environment", "Women", "Events"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-hero pt-32">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Journey in Pictures
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Photo Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore moments from our initiatives — education programs, tree plantation drives, 
              women empowerment workshops, and community events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-accent text-accent-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold">{image.title}</p>
                      <p className="text-white/70 text-sm">{image.category}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <ZoomIn className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-white font-display text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default GalleryPage;
