import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/ui/PageBanner";
import { Calendar, Tag, ArrowLeft, ArrowRight, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Tree Plantation Drive in Rohtak Village",
    excerpt: "Our team successfully planted over 500 trees in the rural areas of Rohtak, bringing hope for a greener future. The event saw participation from over 200 volunteers including school children and local farmers.",
    content: `Our team successfully planted over 500 trees in the rural areas of Rohtak, bringing hope for a greener future. The event saw participation from over 200 volunteers including school children and local farmers.

The tree plantation drive was organized as part of our ongoing commitment to environmental sustainability and combating climate change. We partnered with local schools, panchayats, and farmer groups to make this initiative a grand success.

## Key Highlights

- **500+ Trees Planted**: Including neem, peepal, mango, and amla varieties
- **200+ Volunteers**: School children, farmers, and community members participated
- **5 Villages Covered**: Kharkara, Sanghi, Lakhan Majra, Dighal, and Asthal Bohar
- **Educational Sessions**: Awareness programs on tree care and environmental protection

## Community Participation

The local community showed tremendous enthusiasm for this initiative. Village elders shared their knowledge about traditional tree care methods, while young students learned about the importance of trees in maintaining ecological balance.

We also distributed saplings to families who committed to planting and nurturing them in their homes. Each family received guidance on proper planting techniques and care instructions.

## Future Plans

We aim to plant 2,000 more trees by the end of this year and establish a community nursery in Kharkara village. This nursery will serve as a sustainable source of saplings for future plantation drives.

We thank all volunteers, donors, and community members who made this initiative possible. Together, we can create a greener, healthier future for our villages.`,
    date: "May 2, 2025",
    category: "Environment",
    author: "Krishan Kumar",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80",
  },
  {
    id: 2,
    title: "Scholarship Program Launched for 100 Girls",
    excerpt: "We launched a new scholarship program supporting 100 underprivileged girls in their educational journey. This initiative covers school fees, books, uniforms, and monthly mentorship sessions.",
    content: `We launched a new scholarship program supporting 100 underprivileged girls in their educational journey. This initiative covers school fees, books, uniforms, and monthly mentorship sessions.

Education is the most powerful tool for empowerment, especially for girls from marginalized communities. Our scholarship program aims to remove financial barriers and provide holistic support for their academic success.

## Program Details

- **100 Girls Selected**: From classes 6th to 12th across 10 villages
- **Full Financial Support**: School fees, books, uniforms, and stationery covered
- **Monthly Mentorship**: One-on-one guidance sessions with female mentors
- **Career Counseling**: Workshops on career options and higher education

## Selection Criteria

We carefully selected beneficiaries based on:
- Family income below poverty line
- Academic performance and eagerness to learn
- First-generation learners given priority
- Girls from single-parent households

## Success Stories

Several of our previous scholarship recipients have gone on to pursue higher education in fields like nursing, teaching, and computer science. Their success inspires us to expand this program further.

## How You Can Help

You can sponsor a girl's education for just ₹12,000 per year. Your contribution can change a life and break the cycle of poverty through education.

Join us in empowering the next generation of women leaders from our villages.`,
    date: "April 15, 2025",
    category: "Education",
    author: "Sunita Devi",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80",
  },
  {
    id: 3,
    title: "Women Empowerment Workshop Success",
    excerpt: "Over 200 women participated in our skill development workshop, gaining new abilities for financial independence. The workshop focused on tailoring, handicrafts, and digital literacy.",
    content: `Over 200 women participated in our skill development workshop, gaining new abilities for financial independence. The workshop focused on tailoring, handicrafts, and digital literacy.

Women's economic empowerment is central to our mission. This three-month intensive workshop program has equipped rural women with marketable skills and the confidence to become entrepreneurs.

## Workshop Modules

### Tailoring & Stitching
- Basic and advanced stitching techniques
- Garment making and alterations
- Machine maintenance and operation

### Handicrafts
- Traditional embroidery and phulkari work
- Bag and accessory making
- Product finishing and packaging

### Digital Literacy
- Basic smartphone usage
- WhatsApp for business communication
- Online payment systems (UPI, Paytm)

## Achievements

- 200+ women trained over 3 months
- 50 sewing machines distributed
- 15 women's self-help groups formed
- Average monthly income increase of ₹3,000-5,000

## Market Linkages

We have connected our trained women with local markets and online platforms to sell their products. Several women are now supplying to boutiques in Rohtak city.

## Participant Testimonials

"I never thought I could earn money on my own. Now I contribute to my family's income and my children's education." - Geeta Devi, Kharkara

The program continues with new batches starting every quarter. We aim to train 1,000 women by the end of next year.`,
    date: "March 28, 2025",
    category: "Women Empowerment",
    author: "Kavita Sharma",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
  },
  {
    id: 4,
    title: "Annual Environment Day Celebration",
    excerpt: "We celebrated World Environment Day with a series of awareness programs and cleanup drives across multiple villages. Students created eco-friendly crafts and planted saplings.",
    content: `We celebrated World Environment Day with a series of awareness programs and cleanup drives across multiple villages. Students created eco-friendly crafts and planted saplings.

World Environment Day is a special occasion for us to renew our commitment to environmental protection. This year's celebration was bigger and more impactful than ever before.

## Day-long Activities

### Morning Session
- Rally with environmental slogans
- Street play on pollution awareness
- Distribution of cloth bags to shopkeepers

### Afternoon Activities
- Tree plantation in school compounds
- Eco-friendly craft workshop for children
- Documentary screening on climate change

### Evening Program
- Cultural performances on environmental themes
- Award ceremony for eco-champions
- Pledge taking ceremony

## Participation

- 500+ students from 8 schools
- 100+ teachers and parents
- 50+ volunteers
- 10+ government officials

## Impact

We distributed 1,000 cloth bags to reduce plastic usage and planted 200 saplings across participating schools. The eco-craft workshop produced beautiful items from recycled materials.

## Continuing the Mission

Environmental awareness is not a one-day activity. We conduct regular sessions in schools and villages throughout the year to keep the momentum going.

Join us in making every day Environment Day!`,
    date: "June 5, 2024",
    category: "Events",
    author: "Rahul Verma",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80",
  },
  {
    id: 5,
    title: "New Computer Lab for Village School",
    excerpt: "We inaugurated a new computer lab equipped with 20 computers at the Government Primary School in Kharkara. This will provide digital education to over 300 students.",
    content: `We inaugurated a new computer lab equipped with 20 computers at the Government Primary School in Kharkara. This will provide digital education to over 300 students.

Digital literacy is no longer a luxury but a necessity. Our new computer lab bridges the digital divide between urban and rural students, giving village children access to the same opportunities as their city counterparts.

## Lab Specifications

- **20 Desktop Computers**: Latest configuration with educational software
- **High-Speed Internet**: Fiber connection for seamless learning
- **Projector & Smart Board**: For interactive teaching
- **Air Conditioning**: Comfortable learning environment
- **UPS Backup**: Uninterrupted power supply

## Training Program

We have arranged for a full-time computer instructor who will:
- Conduct daily classes for all students
- Teach basic computer operations
- Introduce educational websites and resources
- Prepare students for digital India

## Curriculum Highlights

- Computer basics and typing
- MS Office applications
- Internet safety and usage
- Coding basics for senior students
- Educational games and activities

## Inauguration Event

The lab was inaugurated by the District Collector along with village sarpanch and school management committee members. Students demonstrated their newly acquired computer skills to the guests.

## Donor Acknowledgment

We thank our corporate donors and individual contributors who made this project possible. Your generosity is shaping the future of 300+ young minds.`,
    date: "February 10, 2024",
    category: "Education",
    author: "Krishan Kumar",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&q=80",
  },
  {
    id: 6,
    title: "Self-Help Group Formation in 5 Villages",
    excerpt: "We helped establish women's self-help groups in five villages, enabling collective savings and micro-enterprise opportunities. Over 150 women are now part of these groups.",
    content: `We helped establish women's self-help groups in five villages, enabling collective savings and micro-enterprise opportunities. Over 150 women are now part of these groups.

Self-Help Groups (SHGs) are powerful vehicles for women's empowerment and financial inclusion. Our initiative has brought together women from marginalized communities to support each other economically and socially.

## Villages Covered

1. Kharkara - 3 SHGs with 36 members
2. Sanghi - 2 SHGs with 24 members
3. Lakhan Majra - 3 SHGs with 30 members
4. Dighal - 2 SHGs with 28 members
5. Asthal Bohar - 2 SHGs with 32 members

## SHG Activities

### Savings & Credit
- Weekly savings of ₹100-200 per member
- Internal lending at low interest
- Emergency loan facility

### Enterprise Development
- Group businesses like dairy, tailoring, food processing
- Marketing support and training
- Quality improvement programs

### Social Initiatives
- Health awareness camps
- Education promotion activities
- Anti-alcohol campaigns

## Bank Linkages

All 12 SHGs have been linked with nationalized banks for:
- Savings accounts
- Credit linkage loans
- Government scheme benefits

## Success Metrics

- Total savings mobilized: ₹8.5 lakhs
- Loans disbursed internally: ₹15 lakhs
- Average income increase: 40% per household
- 100% loan recovery rate

## Future Plans

We aim to form 20 more SHGs and federate them into a village-level organization for greater impact and sustainability.

Women supporting women - that's the power of self-help groups!`,
    date: "January 20, 2024",
    category: "Women Empowerment",
    author: "Sunita Devi",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "1");
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== postId && p.category === post.category)
    .slice(0, 3);

  // If not enough related posts in same category, add from other categories
  const additionalPosts = blogPosts
    .filter((p) => p.id !== postId && p.category !== post.category)
    .slice(0, 3 - relatedPosts.length);

  const allRelatedPosts = [...relatedPosts, ...additionalPosts];

  return (
    <Layout>
      {/* Hero Banner */}
      <PageBanner
        image={post.image}
        title={post.title}
        subtitle={post.category}
        description={post.excerpt}
      />

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-display font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-display font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.includes('\n1. ') || paragraph.startsWith('1. ')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item.replace(/^\d+\.\s/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Share Section */}
            <div className="border-t border-border mt-12 pt-8">
              <p className="text-muted-foreground mb-4">Share this article:</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {allRelatedPosts.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Related Posts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore more stories and updates from our work
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRelatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${relatedPost.id}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl mb-5">
                      <img
                        src={relatedPost.image.replace('w=1920', 'w=600').replace('q=80', 'q=80')}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          <Tag className="h-3 w-3" />
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {relatedPost.date}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
