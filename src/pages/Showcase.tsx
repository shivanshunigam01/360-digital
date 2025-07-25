import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  TrendingUp,
  Users,
  Target,
  Car,
  ShoppingBag,
  Home,
  GraduationCap,
  Heart,
  Utensils,
} from "lucide-react";

const projectCategories = [
  {
    id: "automotive",
    title: "Automotive Industry",
    icon: Car,
    description: "Automotive Business, Distribution, Dealership and Workshops",
    color: "from-primary to-secondary",
    projects: [
      {
        id: 1,
        title: "Bihar Motors Digital Transformation",
        client: "Bihar Motors Pvt Ltd",
        image:
          "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop",
        description:
          "Complete digital marketing overhaul for a leading automotive dealership in Bihar",
        results: {
          leads: "450% increase",
          sales: "₹3.2Cr revenue",
          conversion: "12% conversion rate",
        },
        technologies: [
          "Google Ads",
          "Facebook Marketing",
          "SEO",
          "Landing Pages",
        ],
        testimonial:
          "Elevate360 transformed our business completely. We've never seen such growth!",
      },
      {
        id: 2,
        title: "Auto Workshop Chain Marketing",
        client: "Service Pro Workshops",
        image:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop",
        description:
          "Multi-location workshop chain digital presence and customer acquisition",
        results: {
          bookings: "300% increase",
          awareness: "75% brand recall",
          locations: "15 workshops",
        },
        technologies: [
          "Local SEO",
          "Google My Business",
          "Service Booking",
          "Customer Reviews",
        ],
        testimonial:
          "Our workshop bookings have tripled since working with Elevate360!",
      },
    ],
  },
  {
    id: "retail",
    title: "Retail & FMCG",
    icon: ShoppingBag,
    description: "Consumer goods, retail chains, and e-commerce platforms",
    color: "from-secondary to-accent",
    projects: [
      {
        id: 3,
        title: "RetailMax E-commerce Success",
        client: "RetailMax Industries",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        description:
          "Multi-channel marketing strategy for FMCG brand expansion across Eastern India",
        results: {
          reach: "2M+ people reached",
          engagement: "35% engagement rate",
          sales: "280% sales boost",
        },
        technologies: [
          "Social Media",
          "Influencer Marketing",
          "Performance Marketing",
          "Analytics",
        ],
        testimonial:
          "The ROI we achieved was beyond our expectations. Excellent work!",
      },
    ],
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: Home,
    description: "Property development, sales, and real estate services",
    color: "from-accent to-primary",
    projects: [
      {
        id: 4,
        title: "Premium Properties Launch",
        client: "Skyline Developers",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        description:
          "Luxury property launch campaign with virtual tours and targeted marketing",
        results: {
          sales: "85% pre-launch sales",
          leads: "500+ qualified leads",
          tours: "2000+ virtual tours",
        },
        technologies: [
          "Virtual Tours",
          "Facebook Ads",
          "Landing Pages",
          "Lead Nurturing",
        ],
        testimonial: "Best property launch campaign we've ever executed!",
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    description:
      "Schools, colleges, training institutes, and ed-tech platforms",
    color: "from-primary to-accent",
    projects: [
      {
        id: 5,
        title: "EduTech Platform Launch",
        client: "Bihar Learning Hub",
        image:
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
        description:
          "Complete brand launch and student acquisition campaign for online learning platform",
        results: {
          students: "10,000+ enrollments",
          awareness: "85% brand recall",
          growth: "500% user growth",
        },
        technologies: [
          "Content Marketing",
          "Video Campaigns",
          "Social Media",
          "Google Ads",
        ],
        testimonial:
          "They understood our vision perfectly and executed it flawlessly.",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Heart,
    description: "Hospitals, clinics, pharma, and wellness centers",
    color: "from-secondary to-primary",
    projects: [
      {
        id: 6,
        title: "Healthcare Digital Presence",
        client: "Wellness Central",
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        description:
          "Trust-building digital marketing campaign for healthcare services",
        results: {
          appointments: "300% increase",
          trust: "95% patient satisfaction",
          reach: "50k+ families reached",
        },
        technologies: [
          "Trust Campaigns",
          "Local SEO",
          "Patient Reviews",
          "Educational Content",
        ],
        testimonial:
          "Professional approach and excellent results. Highly recommended!",
      },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Utensils,
    description: "Hotels, restaurants, travel, and entertainment venues",
    color: "from-accent to-secondary",
    projects: [
      {
        id: 7,
        title: "Restaurant Chain Digital Marketing",
        client: "Taste of Bihar",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
        description:
          "Food delivery and dine-in promotion campaign for restaurant chain",
        results: {
          orders: "400% delivery orders",
          footfall: "60% dine-in increase",
          revenue: "₹2.5Cr revenue",
        },
        technologies: [
          "Food Photography",
          "Social Media",
          "Delivery Apps",
          "Loyalty Programs",
        ],
        testimonial: "Our restaurants are now the talk of the town!",
      },
    ],
  },
];

const Showcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">360° Work</span>
              <br />
              <span className="text-gradient">Showcase</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our diverse portfolio across multiple industries. Real
              projects, real results, real growth stories from Bihar and Eastern
              India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-12">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mr-6`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gradient mb-2">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + projectIndex * 0.1,
                    }}
                  >
                    <Card className="glass border-white/10 overflow-hidden h-full hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-white">
                            {category.title}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-2 text-gradient">
                          {project.title}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground mb-4">
                          {project.client}
                        </p>
                        <p className="text-muted-foreground mb-6">
                          {project.description}
                        </p>

                        {/* Results Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.results).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="text-center p-3 bg-background/30 rounded-lg"
                              >
                                <div className="text-lg font-bold text-gradient">
                                  {value as string}
                                </div>
                                <div className="text-xs text-muted-foreground capitalize">
                                  {key}
                                </div>
                              </div>
                            )
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Testimonial */}
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                          "{project.testimonial}"
                        </blockquote>

                        {/* Action Button */}
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Case Study
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/5 via-accent/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              360° Impact Across Industries
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "500%", label: "Average Growth" },
              { icon: Users, value: "200+", label: "Brands Transformed" },
              { icon: Target, value: "₹100Cr+", label: "Revenue Generated" },
              { icon: ExternalLink, value: "6", label: "Industry Verticals" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center glass p-8 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary p-4 mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
