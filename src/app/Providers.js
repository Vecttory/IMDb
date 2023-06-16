'use client';

import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="bg-gray-300 dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Providers;
