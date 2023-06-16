'use client';

import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (mounted && currentTheme === 'dark') {
    return (
      <MdLightMode
        className="text-xl cursor-pointer hover:text-amber-500"
        onClick={() => setTheme('light')}
      />
    );
  } if (mounted) {
    return (
      <BsFillMoonFill
        className="text-xl cursor-pointer hover:text-amber-500"
        onClick={() => setTheme('dark')}
      />
    );
  }

  return null;
}

export default DarkModeSwitch;
