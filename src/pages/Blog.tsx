import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/ui/PageBanner";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Tree Plantation Drive in Rohtak Village",
    excerpt: "Our team successfully planted over 500 trees in the rural areas of Rohtak, bringing hope for a greener future. The event saw participation from over 200 volunteers including school children and local farmers.",
    date: "May 2, 2025",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Scholarship Program Launched for 100 Girls",
    excerpt: "We launched a new scholarship program supporting 100 underprivileged girls in their educational journey. This initiative covers school fees, books, uniforms, and monthly mentorship sessions.",
    date: "April 15, 2025",
    category: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Women Empowerment Workshop Success",
    excerpt: "Over 200 women participated in our skill development workshop, gaining new abilities for financial independence. The workshop focused on tailoring, handicrafts, and digital literacy.",
    date: "March 28, 2025",
    category: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Annual Environment Day Celebration",
    excerpt: "We celebrated World Environment Day with a series of awareness programs and cleanup drives across multiple villages. Students created eco-friendly crafts and planted saplings.",
    date: "June 5, 2024",
    category: "Events",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "New Computer Lab for Village School",
    excerpt: "We inaugurated a new computer lab equipped with 20 computers at the Government Primary School in Kharkara. This will provide digital education to over 300 students.",
    date: "February 10, 2024",
    category: "Education",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Self-Help Group Formation in 5 Villages",
    excerpt: "We helped establish women's self-help groups in five villages, enabling collective savings and micro-enterprise opportunities. Over 150 women are now part of these groups.",
    date: "January 20, 2024",
    category: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
  },
];

const BlogPage = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <PageBanner
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
        title="Our Blog"
        subtitle="Latest Updates"
        description="Stay updated with our latest activities, events, success stories, and the impact we're creating together."
      />

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
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
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
