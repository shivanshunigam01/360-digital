import { motion } from "framer-motion";
import { ArrowRight, Play, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg"></div>

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-xl floating-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full blur-xl floating-blob"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl floating-blob"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="magnetic-hover pulse-glow bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-none text-lg px-8 py-6 rounded-xl"
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

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">200+</div>
            <div className="text-muted-foreground">Brands Transformed</div>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">₹100Cr+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="text-3xl font-bold text-gradient mb-2">360°</div>
            <div className="text-muted-foreground">Marketing Solutions</div>
          </div>
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
