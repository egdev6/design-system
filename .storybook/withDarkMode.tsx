import type { Decorator } from '@storybook/react';
import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { useTheme } from '../src/infrastructure/hooks/use-theme';

export const withDarkMode: Decorator = (Story) => {
  const isDark = useDarkMode();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark, setTheme]);

  return (
    <div className='flex flex-row justify-start items-start flex-1 transition-colors duration-300 dark:bg-red'>
      <Story />
    </div>
  );
};
