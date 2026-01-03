import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const RefundPage = () => {
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
              Return & Refund Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Thank you for your generous contributions to Delta Forum Society. 
                Please read our refund policy carefully.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                1. Non-Refundable Donations
              </h2>
              <p>
                All donations made to Delta Forum Society are considered final and are 
                <strong className="text-foreground"> non-refundable</strong>. Once a donation is processed, 
                the funds are allocated to our charitable programs and cannot be returned.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                2. Technical Error Exception
              </h2>
              <p>
                In case of a technical error during the payment process (such as duplicate charges 
                or incorrect amount deducted), please contact us within <strong className="text-foreground">7 days</strong> of 
                the transaction. We will review your case and process a refund if the error is confirmed.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                3. How to Request a Refund
              </h2>
              <p>
                If you believe you are eligible for a refund due to a technical error, please contact us with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name as provided during donation</li>
                <li>Transaction ID or payment reference number</li>
                <li>Date and amount of the transaction</li>
                <li>Description of the technical error</li>
              </ul>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                4. Refund Processing Time
              </h2>
              <p>
                If a refund is approved, it will be processed within 7-10 business days. 
                The refund will be credited to the original payment method used for the donation.
              </p>
              
              <h2 className="font-display text-2xl font-bold text-foreground mt-8">
                5. Contact for Refund Requests
              </h2>
              <p>
                For refund inquiries, please contact us at:<br />
                <strong className="text-foreground">Email:</strong> jaiparkashdeltaforum@gmail.com<br />
                <strong className="text-foreground">Phone:</strong> +91 98133 29319<br />
                <strong className="text-foreground">Address:</strong> VPO Kharkara, Meham, Rohtak, Haryana 124001
              </p>
              
              <div className="bg-accent rounded-2xl p-6 mt-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Important Note
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your donations directly support our mission to educate children, empower women, 
                  and protect the environment. We deeply appreciate your generosity and commitment 
                  to making a difference.
                </p>
              </div>
              
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

export default RefundPage;
