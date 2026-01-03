import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Tree Plantation Drive in Rohtak Village",
    excerpt: "Our team successfully planted over 500 trees in the rural areas of Rohtak, bringing hope for a greener future.",
    date: "May 2, 2025",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Scholarship Program for 100 Girls",
    excerpt: "We launched a new scholarship program supporting 100 underprivileged girls in their educational journey.",
    date: "April 15, 2025",
    category: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Women Empowerment Workshop Success",
    excerpt: "Over 200 women participated in our skill development workshop, gaining new abilities for financial independence.",
    date: "March 28, 2025",
    category: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
  },
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Latest Updates
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              From Our Blog
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Stay updated with our latest activities, events, and success stories.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0" asChild>
            <Link to="/blog">
              View All Posts <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
