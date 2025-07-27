"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ProposalSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    message: "",
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

    setIsOtpSent(true);
    toast({
      title: "OTP Sent",
      description: `Verification code sent to ${formData.phone}`,
    });
  };

  const handleVerifyOtp = () => {
    if (otp === "123456" || otp.length === 6) {
      setIsVerified(true);
      setStep(2);
      toast({
        title: "Phone Verified",
        description: "Your number is successfully verified.",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "Enter a valid 6-digit OTP",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Proposal Submitted",
      description: "Thank you! We'll contact you shortly.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      industry: "",
      message: "",
    });
    setOtp("");
    setIsOtpSent(false);
    setIsVerified(false);
    setStep(1);
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Request A Free Proposal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your brand? Let’s start with verifying your
            phone.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass p-8 rounded-3xl">
            {step === 1 && (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-background/50 border-white/20 h-14 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Phone No*"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="bg-background/50 border-white/20 h-14 text-lg"
                      maxLength={10}
                    />
                    <Button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={isOtpSent}
                      className="mt-2 bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      {isOtpSent ? "Sent" : "Send OTP"}
                    </Button>
                  </div>
                </div>

                {isOtpSent && (
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Enter the OTP sent to your phone
                    </p>
                    <div className="flex justify-center">
                      <InputOTP value={otp} onChange={setOtp} maxLength={6}>
                        <InputOTPGroup>
                          {[0, 1, 2, 3, 4, 5].map((i) => (
                            <InputOTPSlot key={i} index={i} />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <div className="text-center">
                      <Button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={otp.length !== 6}
                        className="bg-gradient-to-r from-primary to-secondary text-white"
                      >
                        Verify OTP
                      </Button>
                      <p className="text-xs mt-2 text-muted-foreground">
                        Use OTP: 123456
                      </p>
                    </div>
                  </div>
                )}
              </form>
            )}

            {step === 2 && (
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-background/50 border-white/20 h-14 text-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      handleInputChange("industry", e.target.value)
                    }
                    className="w-full bg-background/50 border border-white/20 h-14 text-lg rounded-md px-3 text-foreground"
                    required
                  >
                    <option value="" disabled>
                      Select Industry
                    </option>
                    <option value="automotive">Automotive Business</option>
                    <option value="distribution">Distribution</option>
                    <option value="dealership">Dealership</option>
                    <option value="workshops">Workshops</option>
                    <option value="retail">Retail & FMCG</option>
                    <option value="realestate">Real Estate</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Textarea
                    placeholder="Type Your Message*"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="bg-background/50 border-white/20 min-h-[120px] text-lg resize-none"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Your information is protected and secure</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="magnetic-hover pulse-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none text-lg px-12 py-6 rounded-xl"
                  >
                    GET FREE PROPOSAL
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
