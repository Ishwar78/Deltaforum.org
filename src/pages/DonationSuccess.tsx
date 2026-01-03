import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Home, Heart, Calendar, Hash, User, Mail, Phone, Tag } from "lucide-react";

interface DonationData {
  paymentId: string;
  amount: number;
  cause: string;
  name: string;
  email: string;
  phone: string;
  pan?: string;
  date: string;
}

const DonationSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const donationData = location.state as DonationData | null;

  useEffect(() => {
    if (!donationData) {
      navigate("/donate");
    }
  }, [donationData, navigate]);

  if (!donationData) {
    return null;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      <section className="section-padding pt-32 min-h-screen bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {/* Success Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6"
              >
                <CheckCircle className="h-10 w-10 text-secondary" />
              </motion.div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Thank You for Your Generosity!
              </h1>
              <p className="text-muted-foreground text-lg">
                Your donation has been received successfully. Together, we're making a difference.
              </p>
            </div>

            {/* Receipt Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border print:shadow-none"
            >
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">Donation Receipt</h2>
                  <p className="text-sm text-muted-foreground">Delta Forum Society</p>
                </div>
                <img src="/logo.png" alt="Delta Forum" className="h-12 w-auto" />
              </div>

              {/* Amount Highlight */}
              <div className="bg-primary/10 rounded-2xl p-6 text-center mb-6">
                <p className="text-sm text-muted-foreground mb-1">Donation Amount</p>
                <p className="font-display text-4xl font-bold text-primary">
                  ₹{donationData.amount.toLocaleString()}
                </p>
              </div>

              {/* Details Grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                  <Hash className="h-5 w-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Transaction ID</p>
                    <p className="text-sm font-medium text-foreground truncate">{donationData.paymentId}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                  <Calendar className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Date & Time</p>
                    <p className="text-sm font-medium text-foreground">{donationData.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                  <Tag className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Cause</p>
                    <p className="text-sm font-medium text-foreground">{donationData.cause}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                  <User className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Donor Name</p>
                    <p className="text-sm font-medium text-foreground">{donationData.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{donationData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">{donationData.phone}</p>
                  </div>
                </div>

                {donationData.pan && (
                  <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-xl">
                    <Hash className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">PAN (for 80G)</p>
                      <p className="text-sm font-medium text-foreground">{donationData.pan}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Note */}
              <div className="mt-6 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> A confirmation email has been sent to your registered email address. 
                  For 80G certificate queries, please contact us at jaiparkashdeltaforum@gmail.com
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 print:hidden">
                <Button onClick={handlePrint} variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                <Button asChild variant="hero" className="flex-1">
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Additional CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center mt-8 print:hidden"
            >
              <p className="text-muted-foreground mb-4">Want to make an even bigger impact?</p>
              <Button asChild variant="gradient">
                <Link to="/donate">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Again
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DonationSuccess;
