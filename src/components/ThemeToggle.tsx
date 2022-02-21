import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@/Icons/SunIcon';
import { MoonIcon } from '@/Icons/MoonIcon';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can use resolvedTheme
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
      }}
      aria-label="toggle dark-mode"
    >
      {resolvedTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
