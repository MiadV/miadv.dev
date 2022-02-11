import { useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { SunIcon } from "@/Icons/SunIcon";
import { MoonIcon } from "@/Icons/MoonIcon";

function update() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark", "changing-theme");
  } else {
    document.documentElement.classList.remove("dark", "changing-theme");
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove("changing-theme");
  });
}

function useTheme() {
  let [setting, setSetting] = useState("system");
  let initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.theme;
    if (theme === "light" || theme === "dark") {
      setSetting(theme);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (setting === "system") {
      localStorage.removeItem("theme");
    } else if (setting === "light" || setting === "dark") {
      localStorage.theme = setting;
    }
    if (initial.current) {
      initial.current = false;
    } else {
      update();
    }
  }, [setting]);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", update);

    function onStorage() {
      update();
      let theme = localStorage.theme;
      if (theme === "light" || theme === "dark") {
        setSetting(theme);
      } else {
        setSetting("system");
      }
    }
    window.addEventListener("storage", onStorage);

    return () => {
      mediaQuery.removeEventListener("change", update);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function toggleTheme() {
    if (setting === "dark") {
      setSetting("light");
    } else {
      setSetting("dark");
    }
  }

  return { setting, setSetting, toggleTheme };
}

export function ThemeToggle() {
  let { setting, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="toggle dark-mode">
      {setting === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
