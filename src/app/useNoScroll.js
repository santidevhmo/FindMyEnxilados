
// A custom hook to handle adding and removing the overflow: hidden style.

"use client"; // Add this directive

import { useEffect } from 'react';

function useNoScroll() {
  useEffect(() => {
    // Apply overflow: hidden to html and body
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Clean up by removing the style when the component unmounts
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);
}

export default useNoScroll;
