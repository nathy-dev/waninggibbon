import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "@/providers/theme-provider";
import { useCallback, useMemo } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const defaultTheme = useMemo<"dark" | "light">(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const handleThemeToggle = useCallback(() => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      default:
        if (defaultTheme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
    }
  }, [defaultTheme, setTheme, theme]);

  return (
    <Button onClick={() => handleThemeToggle()}>
      {theme === "dark" ? (
        <Moon color="#eeefe9" />
      ) : theme === "light" ? (
        <Sun color="#eeefe9" />
      ) : defaultTheme === "dark" ? (
        <Moon color="#eeefe9" />
      ) : (
        <Sun color="#eeefe9" />
      )}
    </Button>
  );
};
