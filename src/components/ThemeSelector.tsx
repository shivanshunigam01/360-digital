import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import {
  Palette,
  Sun,
  Moon,
  Sparkles,
  Briefcase,
  Zap,
  Minimize,
  Monitor,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const themeOptions = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
    description: "Clean and bright",
    color: "bg-gradient-to-r from-green-500 to-white-500",
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
    description: "Easy on the eyes",
    color: "bg-gray-900 border-gray-700",
  },
  {
    value: "creative",
    label: "Creative",
    icon: Sparkles,
    description: "Vibrant and artistic",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    value: "professional",
    label: "Professional",
    icon: Briefcase,
    description: "Clean and corporate",
    color: "bg-gradient-to-r from-blue-600 to-blue-800",
  },
  {
    value: "vibrant",
    label: "Vibrant",
    icon: Zap,
    description: "Energetic and bold",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    value: "minimal",
    label: "Minimal",
    icon: Minimize,
    description: "Ultra clean",
    color: "bg-gradient-to-r from-blue-500 to-white-500",
  },
  {
    value: "system",
    label: "System",
    icon: Monitor,
    description: "Follow device preference",
    color: "bg-gradient-to-r from-gray-400 to-gray-600",
  },
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentTheme = themeOptions.find((option) => option.value === theme);
  const CurrentIcon = currentTheme?.icon || Palette;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="glass-interactive border-white/20 hover:border-white/40 transition-all duration-300 gap-2"
        >
          <CurrentIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{currentTheme?.label}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-64 glass-strong border-white/20 backdrop-blur-xl"
        sideOffset={8}
      >
        <DropdownMenuLabel className="text-xs uppercase tracking-wider opacity-70">
          Choose Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />

        {themeOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = theme === option.value;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value as any)}
              className={`
    cursor-pointer px-3 py-3 transition-all duration-200
    ${
      isSelected
        ? "bg-white/10 border-l-2 border-l-primary text-white"
        : "hover:bg-white/5 text-white"
    }
  `}
            >
              <div className="flex items-center gap-3 w-full">
                <div
                  className={`
                  w-8 h-8 rounded-lg flex items-center justify-center
                  ${option.color}
                  ${
                    isSelected
                      ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                      : ""
                  }
                `}
                >
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div
                    className={`font-medium ${
                      isSelected
                        ? "text-primary"
                        : ["dark", "creative", "vibrant", "system"].includes(
                            theme
                          )
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {option.label}
                  </div>
                  <div
                    className={`text-xs opacity-70 ${
                      ["dark", "creative", "vibrant", "system"].includes(theme)
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {option.description}
                  </div>
                </div>

                {isSelected && (
                  <div className="w-2 h-2 bg-primary rounded-full" />
                )}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
