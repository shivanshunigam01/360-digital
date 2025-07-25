import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Car,
  ShoppingBag,
  Home,
  GraduationCap,
  Heart,
  Utensils,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: Car,
    title: "Automotive",
    description: "Automotive Business, Distribution, Dealership and Workshops",
    insights:
      "Lead generation strategies tailored for vehicle sales and service centers",
    color: "from-primary to-secondary",
  },
  {
    icon: ShoppingBag,
    title: "Retail & FMCG",
    description: "Consumer goods, retail chains, and e-commerce platforms",
    insights:
      "Omnichannel marketing approaches for maximum customer engagement",
    color: "from-secondary to-accent",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property development, sales, and real estate services",
    insights:
      "Location-based marketing and virtual property showcasing solutions",
    color: "from-accent to-primary",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Schools, colleges, training institutes, and ed-tech platforms",
    insights: "Student acquisition campaigns and educational content marketing",
    color: "from-primary to-accent",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Hospitals, clinics, pharma, and wellness centers",
    insights:
      "Trust-building campaigns and healthcare service promotion strategies",
    color: "from-secondary to-primary",
  },
  {
    icon: Utensils,
    title: "Hospitality",
    description: "Hotels, restaurants, travel, and entertainment venues",
    insights: "Experience-driven marketing and customer loyalty programs",
    color: "from-accent to-secondary",
  },
];

export function IndustryShowcase() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 via-accent/10 to-primary/5"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Industry</span>
            <br />
            <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the unique challenges and opportunities across
            different sectors. Explore our industry-specific marketing
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-4 mb-6`}
              >
                <industry.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gradient">
                {industry.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {industry.description}
              </p>

              <div className="bg-background/30 p-4 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-gradient mb-2">
                  Industry Insights:
                </h4>
                <p className="text-sm text-muted-foreground">
                  {industry.insights}
                </p>
              </div>

              {/* <div className="flex items-center text-sm font-semibold text-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
