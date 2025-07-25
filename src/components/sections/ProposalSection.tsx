import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield } from "lucide-react";

export function ProposalSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
            Ready to transform your brand? Let's discuss your vision and create
            a customized 360° marketing strategy that delivers results.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass p-8 rounded-3xl">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  placeholder="Name*"
                  className="bg-background/50 border-white/20 h-14 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Input
                  placeholder="Phone No*"
                  className="bg-background/50 border-white/20 h-14 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Input
                  placeholder="Email*"
                  className="bg-background/50 border-white/20 h-14 text-lg"
                />
              </div>

              <div className="space-y-2">
                <select className="w-full bg-background/50 border border-white/20 h-14 text-lg rounded-md px-3 text-foreground">
                  <option value="" disabled selected>
                    Company/Industry
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
                  className="bg-background/50 border-white/20 min-h-[120px] text-lg resize-none"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Your information is protected and secure</span>
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="magnetic-hover pulse-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none text-lg px-12 py-6 rounded-xl"
                  onClick={() => (window.location.href = "/proposal")}
                >
                  GET FREE PROPOSAL
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
