import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms & Conditions
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Welcome to Delta Forum Society. By accessing and using our website and services, 
                you agree to be bound by these Terms and Conditions.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, you accept these terms and conditions in full. 
                If you disagree with any part of these terms, you must not use our website.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                2. Donations
              </h2>
              <p>
                All donations made to Delta Forum Society are voluntary and non-refundable 
                unless made due to a technical error. Donations are used solely for our 
                charitable programs including education, women empowerment, and environmental conservation.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                3. Use of Content
              </h2>
              <p>
                All content on this website, including text, images, and logos, is the property 
                of Delta Forum Society. You may not reproduce, distribute, or use any content 
                without our prior written permission.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                4. Volunteer Agreement
              </h2>
              <p>
                Volunteers who join our programs agree to follow our code of conduct and work 
                in alignment with our mission and values. We reserve the right to terminate 
                volunteer participation if terms are violated.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                5. Limitation of Liability
              </h2>
              <p>
                Delta Forum Society shall not be liable for any direct, indirect, or consequential 
                damages arising from the use of this website or participation in our programs.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                6. Contact
              </h2>
              <p>
                For any questions regarding these terms, please contact us at:<br />
                Email: Jaiparkash2011@gmail.com<br />
                Phone: +91 98133 29319
              </p>
              
              <p className="text-sm mt-8">
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
