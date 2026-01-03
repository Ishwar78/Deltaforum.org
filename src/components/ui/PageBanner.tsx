import { motion } from "framer-motion";

interface PageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const PageBanner = ({ image, title, subtitle, description }: PageBannerProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[500px] pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {subtitle && (
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {subtitle}
              </span>
            )}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
