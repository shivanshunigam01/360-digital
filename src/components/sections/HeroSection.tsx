import { motion } from "framer-motion";
import { ArrowRight, Play, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 gradient-animated rounded-full blur-2xl opacity-60"
          animate={{
            x: [0, 150, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 gradient-secondary rounded-full blur-xl opacity-50"
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 0.7, 1],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 gradient-accent rounded-full blur-xl opacity-40"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            rotate: [0, 270, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Additional Interactive Elements */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-brand-accent/40 to-brand-green/40 rounded-full blur-lg"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-r from-brand-blue/30 to-brand-accent/30 rounded-full blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Digital.</span>
              <br />
              <span className="text-gradient">Local.</span>
              <br />
              <span className="text-gradient">Impactful.</span>
            </h1>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Crafting a dynamic digital ecosystem that seamlessly integrates all
            marketing channels to transform visitors into loyal clients,
            ensuring a
            <span className="text-gradient font-semibold">
              {" "}
              holistic and impactful digital presence
            </span>{" "}
            across all industries.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="btn-enhanced magnetic-hover pulse-glow gradient-primary text-white border-none text-lg px-10 py-7 rounded-2xl shadow-lg hover:shadow-2xl group"
          >
            <Link to="/contact" className="flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Let's Build Your Brand
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Link to="/showcase">
            <Button
              variant="outline"
              size="lg"
              className="magnetic-hover glass border-white/20 hover:border-white/40 text-lg px-8 py-6 rounded-xl"
            >
              <Play className="w-5 h-5 mr-2" />
              See Live Results
            </Button>
          </Link>
        </motion.div>

        {/* Enhanced Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="interactive-card glass-strong p-8 rounded-3xl group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">
              200+
            </div>
            <div className="text-muted-foreground font-medium">
              Brands Transformed
            </div>
            <div className="w-12 h-1 bg-gradient-primary rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <motion.div
            className="interactive-card glass-strong p-8 rounded-3xl group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">
              ₹100Cr+
            </div>
            <div className="text-muted-foreground font-medium">
              Revenue Generated
            </div>
            <div className="w-12 h-1 bg-gradient-primary rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>

          <motion.div
            className="interactive-card glass-strong p-8 rounded-3xl group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform">
              360°
            </div>
            <div className="text-muted-foreground font-medium">
              Marketing Solutions
            </div>
            <div className="w-12 h-1 bg-gradient-primary rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
