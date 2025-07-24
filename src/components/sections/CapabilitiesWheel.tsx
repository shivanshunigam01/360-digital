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
      "TV commercials, radio campaigns, print advertisements, and outdoor advertising for maximum reach and brand awareness.",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "btl",
    icon: Target,
    title: "BTL",
    description: "Below The Line",
    details:
      "Direct marketing, events, promotions, and targeted campaigns for specific audience engagement.",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: "digital",
    icon: Globe,
    title: "Digital",
    description: "Online Presence",
    details:
      "SEO, social media, PPC advertising, email marketing, and comprehensive digital strategies.",
    color: "from-green-500 to-blue-500",
  },
  {
    id: "onsite",
    icon: MapPin,
    title: "Onsite",
    description: "Ground Activations",
    details:
      "Mobile campaigns, product demonstrations, field marketing, and on-location brand activations.",
    color: "from-green-400 to-teal-500",
  },
  {
    id: "reels",
    icon: Camera,
    title: "Reels",
    description: "Content Creation",
    details:
      "Video production, social media content, reels creation, and visual storytelling for maximum engagement.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    description: "Data Insights",
    details:
      "Performance tracking, ROI analysis, customer insights, and data-driven optimization strategies.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function CapabilitiesWheel() {
  const [activeCapability, setActiveCapability] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getNodePosition = (index, total, radius = 220) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#101B20] text-gray-900 dark:text-white p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
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
                    className={`w-32 h-32 glass rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-lg ${
                      activeCapability === cap.id
                        ? "shadow-2xl border border-cyan-400"
                        : "border border-muted"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full p-3 mb-2 shadow-md text-white bg-gradient-to-r ${cap.color}`}
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

                  {/* Floating Detail Tooltip */}
                  {activeCapability === cap.id && (
                    <div
                      className="absolute w-64 glass p-4 rounded-xl shadow-2xl border border-muted z-50"
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
