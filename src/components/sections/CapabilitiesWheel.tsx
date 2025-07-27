"use client";

import { useState, useEffect } from "react";
import { Tv, Target, Globe, MapPin, Camera, BarChart3 } from "lucide-react";

const capabilities = [
  {
    id: "atl",
    icon: Tv,
    title: "ATL",
    description: "Traditional Media",
    details:
      "TV commercials, radio campaigns, print advertisements, and outdoor advertising for brand awareness.",
  },
  {
    id: "btl",
    icon: Target,
    title: "BTL",
    description: "Below The Line",
    details:
      "Direct marketing, events, promotions, and targeted campaigns for specific audience engagement.",
  },
  {
    id: "digital",
    icon: Globe,
    title: "Digital",
    description: "Online Presence",
    details:
      "SEO, social media, PPC advertising, email marketing, and comprehensive digital strategies.",
  },
  {
    id: "onsite",
    icon: MapPin,
    title: "Onsite",
    description: "Ground Activations",
    details:
      "Mobile campaigns, product demonstrations, field marketing, and on-location brand activations.",
  },
  {
    id: "reels",
    icon: Camera,
    title: "Reels",
    description: "Content Creation",
    details:
      "Video production, social media content, reels creation, and visual storytelling for maximum engagement.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    description: "Data Insights",
    details:
      "Performance tracking, ROI analysis, customer insights, and data-driven optimization strategies.",
  },
];

export default function CapabilitiesWheel() {
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark"); // Default theme

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getNodePosition = (index: number, total: number, radius = 220) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  // Determine if current theme requires black icons
  const isLightTheme = ["light", "professional", "minimal"].includes(
    currentTheme.toLowerCase()
  );

  const iconClasses = "text-foreground group-hover:text-primary";
  const iconBackgroundClasses = isLightTheme
    ? "bg-gray-100 border border-gray-300"
    : "bg-gradient";

  return (
    <div className="min-h-screen p-8 transition-colors duration-300 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Theme Selector
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-2 bg-muted rounded-lg">
            {["Dark", "Light", "Professional", "Minimal"].map((theme) => (
              <button
                key={theme}
                onClick={() => setCurrentTheme(theme)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentTheme === theme.toLowerCase()
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted-foreground/10"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div> */}

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Interactive Capabilities</span>
            <br />
            <span className="text-gradient">Explorer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive marketing solutions. Hover on any
            capability to explore detailed strategies and implementation
            approaches.
          </p>
          {/* <p className="text-sm text-muted-foreground mt-4">
            Current theme:{" "}
            <span className="font-semibold capitalize">{currentTheme}</span>
          </p> */}
        </div>

        {/* Wheel */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ width: "700px", height: "700px" }}
        >
          {/* Center Hub */}
          <div
            className={`absolute w-48 h-48 glass rounded-full flex items-center justify-center z-20 transition-all duration-1000 delay-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gradient mb-2">360°</h3>
              <p className="text-sm text-muted-foreground font-medium leading-snug">
                Marketing
                <br />
                Solutions
              </p>
            </div>
          </div>

          {/* Nodes */}
          {capabilities.map((cap, index) => {
            const { x, y } = getNodePosition(index, capabilities.length);
            const delay = 800 + index * 100;
            const IconComponent = cap.icon;

            return (
              <div key={cap.id}>
                {/* Node */}
                <div
                  className={`absolute cursor-pointer group transition-all duration-700 z-30 ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  } ${
                    activeCapability === cap.id
                      ? "scale-110"
                      : "hover:scale-105"
                  }`}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    transitionDelay: `${delay}ms`,
                  }}
                  onMouseEnter={() => setActiveCapability(cap.id)}
                  onMouseLeave={() => setActiveCapability(null)}
                >
                  <div
                    className={`w-32 h-32 glass rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-glow ${
                      activeCapability === cap.id
                        ? "border border-accent"
                        : "border border-muted"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full p-3 mb-2 shadow-md ${iconClasses} ${iconBackgroundClasses}`}
                    >
                      <IconComponent className="w-full h-full" />
                    </div>
                    <h4 className="text-sm font-bold text-gradient">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-muted-foreground text-center px-2 leading-tight">
                      {cap.description}
                    </p>
                  </div>

                  {/* Tooltip */}
                  {activeCapability === cap.id && (
                    <div
                      className="absolute w-64 glass p-4 rounded-xl shadow-xl border border-muted z-50"
                      style={{
                        top: "50%",
                        left: x >= 0 ? "calc(100% + 20px)" : "auto",
                        right: x < 0 ? "calc(100% + 20px)" : "auto",
                        transform: "translateY(-50%)",
                        whiteSpace: "normal",
                      }}
                    >
                      <h4 className="text-lg font-semibold text-gradient mb-1">
                        {cap.title} Services
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cap.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
