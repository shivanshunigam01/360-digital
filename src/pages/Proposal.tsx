import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Building,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Proposal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }

    // Simulate OTP sending
    setIsOtpSent(true);
    toast({
      title: "OTP Sent!",
      description: `Verification code sent to ${formData.phone}`,
    });
  };

  const handleVerifyOtp = () => {
    // Simulate OTP verification (in real app, this would be backend verification)
    if (otp === "123456" || otp.length === 6) {
      setIsVerified(true);
      setStep(2);
      toast({
        title: "Phone Verified!",
        description: "Your phone number has been successfully verified",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      toast({
        title: "Phone Verification Required",
        description: "Please verify your phone number first",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Proposal Submitted!",
      description:
        "Thank you! We'll contact you within 24 hours with your customized proposal.",
    });

    setStep(3);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Get Your Free</span>
              <br />
              <span className="text-gradient">Proposal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Get a customized 360° marketing
              strategy designed specifically for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-white/10">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-gradient mb-4">
                    Phone Verification Required
                  </CardTitle>
                  <p className="text-muted-foreground">
                    To ensure we provide you with the best service and avoid
                    spam, please verify your phone number.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name *</label>
                        <Input
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="bg-background/50 border-white/20 h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Phone Number *
                        </label>
                        <div className="flex gap-2">
                          <Input
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="bg-background/50 border-white/20 h-12"
                            maxLength={10}
                          />
                          <Button
                            onClick={handleSendOtp}
                            disabled={isOtpSent}
                            className="bg-gradient-to-r from-primary to-secondary text-white"
                          >
                            {isOtpSent ? "Sent" : "Send OTP"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {isOtpSent && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4"
                      >
                        <div className="text-center space-y-4">
                          <p className="text-sm text-muted-foreground">
                            Enter the 6-digit OTP sent to your phone
                          </p>
                          <div className="flex justify-center">
                            <InputOTP
                              value={otp}
                              onChange={setOtp}
                              maxLength={6}
                            >
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </div>
                          <Button
                            onClick={handleVerifyOtp}
                            disabled={otp.length !== 6}
                            className="bg-gradient-to-r from-primary to-secondary text-white"
                          >
                            Verify OTP
                          </Button>
                          <p className="text-xs text-muted-foreground">
                            For demo purposes, use OTP: 123456
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass border-white/10">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-green-500 font-medium">
                      Phone Verified
                    </span>
                  </div>
                  <CardTitle className="text-3xl text-gradient mb-4">
                    Tell Us About Your Project
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Help us understand your business needs so we can create a
                    perfect strategy for you.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Mail className="w-4 h-4" /> Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="bg-background/50 border-white/20 h-12"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Building className="w-4 h-4" /> Company Name
                        </label>
                        <Input
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="bg-background/50 border-white/20 h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Industry/Business Type *
                      </label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          handleInputChange("industry", value)
                        }
                      >
                        <SelectTrigger className="bg-background/50 border-white/20 h-12">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent className="glass border-white/10">
                          <SelectItem value="automotive">
                            Automotive Business
                          </SelectItem>
                          <SelectItem value="distribution">
                            Distribution
                          </SelectItem>
                          <SelectItem value="dealership">Dealership</SelectItem>
                          <SelectItem value="workshops">Workshops</SelectItem>
                          <SelectItem value="retail">Retail & FMCG</SelectItem>
                          <SelectItem value="realestate">
                            Real Estate
                          </SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="hospitality">
                            Hospitality
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Project Details *
                      </label>
                      <Textarea
                        placeholder="Tell us about your business goals, target audience, current challenges, and what you'd like to achieve with our marketing services..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="bg-background/50 border-white/20 min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Shield className="w-5 h-5 text-primary" />
                        <span>Your information is protected and secure</span>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-6 rounded-xl"
                      >
                        SUBMIT PROPOSAL REQUEST
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Card className="glass border-white/10">
                <CardContent className="p-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gradient mb-4">
                    Thank You!
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your proposal request has been submitted successfully. Our
                    team will analyze your requirements and contact you within
                    24 hours with a customized marketing strategy.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      What happens next?
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="p-4 bg-background/30 rounded-lg">
                        <div className="font-semibold text-gradient">
                          1. Analysis
                        </div>
                        <div className="text-muted-foreground">
                          We study your business
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg">
                        <div className="font-semibold text-gradient">
                          2. Strategy
                        </div>
                        <div className="text-muted-foreground">
                          Custom plan creation
                        </div>
                      </div>
                      <div className="p-4 bg-background/30 rounded-lg">
                        <div className="font-semibold text-gradient">
                          3. Proposal
                        </div>
                        <div className="text-muted-foreground">
                          Detailed presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Proposal;
