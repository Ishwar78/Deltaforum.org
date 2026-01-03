import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const PrivacyPage = () => {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Delta Forum Society is committed to protecting your privacy. This policy explains 
                how we collect, use, and safeguard your personal information.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                1. Information We Collect
              </h2>
              <p>We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number when you contact us or donate</li>
                <li>Payment information when processing donations (handled securely by our payment partner)</li>
                <li>Address and PAN details for issuing tax receipts</li>
                <li>Any information you voluntarily provide through forms</li>
              </ul>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                2. How We Use Your Information
              </h2>
              <p>Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your donations and issue receipts</li>
                <li>Communicate updates about our programs and impact</li>
                <li>Respond to your inquiries</li>
                <li>Improve our website and services</li>
              </ul>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                3. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information. 
                Payment processing is handled through secure, encrypted channels by our payment partners.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                4. Third-Party Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. 
                We may share information with service providers who assist in our operations, 
                subject to confidentiality agreements.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                To exercise these rights, please contact us at the information provided below.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                6. Contact
              </h2>
              <p>
                For privacy-related inquiries, please contact:<br />
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

export default PrivacyPage;
