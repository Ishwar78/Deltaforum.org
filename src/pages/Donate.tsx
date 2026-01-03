import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/ui/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Shield, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RAZORPAY_KEY_ID = "rzp_test_Rxk6vhcRylLMAB";

const presetAmounts = [500, 1000, 2500, 5000, 10000];

const causeLabels: Record<string, string> = {
  tree: "Tree Plantation",
  girls: "Girls' Education",
  women: "Women Empowerment",
  environment: "Environmental Protection",
  general: "General Fund",
};

const DonatePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [amount, setAmount] = useState<number | string>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setAmount(value ? parseInt(value) : "");
  };

  const getFinalAmount = () => {
    return typeof amount === "number" ? amount : parseInt(customAmount) || 0;
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalAmount = getFinalAmount();
    
    if (finalAmount < 1) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Details",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!cause) {
      toast({
        title: "Select a Cause",
        description: "Please select a cause for your donation.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: finalAmount * 100, // Razorpay expects amount in paise
      currency: "INR",
      name: "Delta Forum",
      description: `Donation for ${causeLabels[cause] || "General Fund"}`,
      image: "/logo.png",
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        cause: cause,
        pan: formData.pan || "Not provided",
      },
      theme: {
        color: "#E97F2C",
      },
      handler: function (response: any) {
        setIsProcessing(false);
        // Navigate to success page with donation data
        navigate("/donation-success", {
          state: {
            paymentId: response.razorpay_payment_id,
            amount: finalAmount,
            cause: causeLabels[cause] || "General Fund",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            pan: formData.pan || undefined,
            date: new Date().toLocaleString("en-IN", {
              dateStyle: "full",
              timeStyle: "short",
            }),
          },
        });
      },
      modal: {
        ondismiss: function () {
          setIsProcessing(false);
        },
      },
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        setIsProcessing(false);
        toast({
          title: "Payment Failed",
          description: response.error.description || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      });
      razorpay.open();
    } catch (error) {
      setIsProcessing(false);
      toast({
        title: "Error",
        description: "Could not initialize payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <PageBanner
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80"
        title="Donate Today"
        subtitle="Make a Difference"
        description="Your contribution helps us educate children, empower women, and protect our environment. Every rupee counts towards building a better future."
      />

      {/* Donation Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Donation Details
                </h2>
                
                <form onSubmit={handlePayment} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Select Amount (₹)</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => handleAmountSelect(preset)}
                          className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                            amount === preset
                              ? "bg-primary text-primary-foreground shadow-glow"
                              : "bg-accent text-accent-foreground hover:bg-primary/10"
                          }`}
                        >
                          ₹{preset.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">₹</span>
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>

                  {/* Cause Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-2 block">Select Cause</Label>
                    <Select value={cause} onValueChange={setCause}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a cause" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tree">Tree Plantation</SelectItem>
                        <SelectItem value="girls">Girls' Education</SelectItem>
                        <SelectItem value="women">Women Empowerment</SelectItem>
                        <SelectItem value="environment">Environmental Protection</SelectItem>
                        <SelectItem value="general">General Fund</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="pan">PAN (for 80G certificate)</Label>
                      <Input
                        id="pan"
                        value={formData.pan}
                        onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="h-5 w-5 mr-2" />
                        Donate ₹{getFinalAmount().toLocaleString()}
                      </>
                    )}
                  </Button>
                </form>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary" />
                    Secure Payment
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    Tax Benefits
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Why Donate to Delta Forum?
                </h3>
                <ul className="space-y-4">
                  {[
                    "100% of donations go directly to our programs",
                    "Transparent reporting on how funds are used",
                    "Tax benefits under Section 80G",
                    "Regular updates on the impact of your donation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent rounded-2xl p-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-3">
                  Your Impact
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">₹500</span>
                    <span className="text-foreground">School supplies for 1 child</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">₹1,000</span>
                    <span className="text-foreground">Plant 10 trees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">₹5,000</span>
                    <span className="text-foreground">Month's education for 1 girl</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">₹10,000</span>
                    <span className="text-foreground">Skills training for 1 woman</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  Need Help?
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  For any questions about donations, contact us:
                </p>
                <p className="text-foreground text-sm">
                  📞 +91 98133 29319<br />
                  ✉️ Jaiparkash2011@gmail.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
