import { motion } from "framer-motion";
import { ThemeSelector } from "@/components/ThemeSelector";
import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme } = useTheme();
  const lightLogo = "/favicon.ico";
  const darkLogo = "/dark-logo.ico";

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] glass border-b border-white/10 backdrop-blur-xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img
              src={theme === "dark" || "creative" ? darkLogo : lightLogo}
              alt="Elevate360 Logo"
              className="h-10 w-70 logo-image transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/"
                      className="text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/50 relative group"
                    >
                      Home
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="min-w-[400px] w-[400px] p-6 glass border border-white/10 bg-background/95 backdrop-blur-md z-[110]">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/about"
                          className="block p-3 hover:bg-accent/70 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Our Story</div>
                          <div className="text-sm text-muted-foreground">
                            Learn about our journey
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 hover:bg-accent/70 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20 cursor-pointer">
                        <div className="font-medium">Team</div>
                        <div className="text-sm text-muted-foreground">
                          Meet our experts
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 hover:bg-accent/70 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20 cursor-pointer">
                        <div className="font-medium">Careers</div>
                        <div className="text-sm text-muted-foreground">
                          Join our team
                        </div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block p-3 hover:bg-accent/70 rounded-lg transition-all duration-300 border border-transparent hover:border-white/20 cursor-pointer">
                        <div className="font-medium">Testimonials</div>
                        <div className="text-sm text-muted-foreground">
                          Join our team
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="min-w-[700px] w-[700px] p-6 glass border border-white/10 bg-background/95 backdrop-blur-md grid grid-cols-2 gap-6 z-[110]">
                      <div className="space-y-3">
                        <h4 className="font-semibold mb-4 text-gradient flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          ATL Services
                        </h4>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                          >
                            <div className="font-medium">
                              TV / Radio / Print
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Mass media campaigns
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                          >
                            <div className="font-medium">Outdoor Hoardings</div>
                            <div className="text-xs text-muted-foreground">
                              Billboard advertising
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                          >
                            <div className="font-medium">Transit Ads</div>
                            <div className="text-xs text-muted-foreground">
                              Bus & metro advertising
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold mb-4 text-gradient flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                          Digital Marketing
                        </h4>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                          >
                            <div className="font-medium">Meta & Google Ads</div>
                            <div className="text-xs text-muted-foreground">
                              Paid advertising campaigns
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                          >
                            <div className="font-medium">Local SEO & Maps</div>
                            <div className="text-xs text-muted-foreground">
                              Local search optimization
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                          >
                            <div className="font-medium">
                              Website & App Design
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Custom development
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="min-w-[550px] w-[550px] p-6 glass border border-white/10 bg-background/95 backdrop-blur-md grid grid-cols-2 gap-4 z-[110]">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/industries"
                          className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Automotive</div>
                          <div className="text-xs text-muted-foreground">
                            Dealerships & Manufacturers
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/industries"
                          className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Retail & FMCG</div>
                          <div className="text-xs text-muted-foreground">
                            Consumer goods & retail
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/industries"
                          className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Real Estate</div>
                          <div className="text-xs text-muted-foreground">
                            Property marketing
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/industries"
                          className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Education</div>
                          <div className="text-xs text-muted-foreground">
                            Schools & institutions
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/industries"
                          className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Healthcare</div>
                          <div className="text-xs text-muted-foreground">
                            Medical & wellness
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/industries"
                          className="block p-3 hover:bg-accent/70 rounded-lg text-sm transition-all duration-300 border border-transparent hover:border-white/20"
                        >
                          <div className="font-medium">Hospitality</div>
                          <div className="text-xs text-muted-foreground">
                            Hotels & restaurants
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/portfolio"
                      className="text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/50 relative group"
                    >
                      Portfolio
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/blog"
                      className="text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/50 relative group"
                    >
                      Blog
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/contact"
                      className="text-foreground hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/50 relative group"
                    >
                      Contact Us
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSelector />
            <Button
              size="sm"
              className="text-foreground hover:text-primary px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/50"
              asChild
            >
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Get Free Proposal
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
