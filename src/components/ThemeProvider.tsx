import { createContext, useContext, useEffect, useState } from "react";

type Theme =
  | "light"
  | "dark"
  | "creative"
  | "professional"
  | "vibrant"
  | "minimal"
  | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "creative",
  storageKey = "elevate360-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      "light",
      "dark",
      "theme-creative",
      "theme-professional",
      "theme-vibrant",
      "theme-minimal"
    );

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    // Handle themed variants
    if (theme === "creative") {
      root.classList.add("theme-creative");
    } else if (theme === "professional") {
      root.classList.add("theme-professional");
    } else if (theme === "vibrant") {
      root.classList.add("theme-vibrant");
    } else if (theme === "minimal") {
      root.classList.add("theme-minimal");
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
