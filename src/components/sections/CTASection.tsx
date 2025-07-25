import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 hero-bg"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Ready to 3X</span>
            <br />
            <span className="text-gradient">Your Dealership Revenue?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ successful dealerships across Bihar. Get your free
            strategy consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="magnetic-hover pulse-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none text-lg px-8 py-6 rounded-xl flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9876543210
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Link to="/proposal">
              <Button
                variant="outline"
                size="lg"
                className="magnetic-hover glass border-white/20 hover:border-white/40 text-lg px-8 py-6 rounded-xl flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
