"use client";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import AOS from 'aos';

// Make sure to install AOS:
// npm install aos
// npm install @types/aos --save-dev
// 
// Also include the CSS in your _app.tsx or layout.tsx:
// import 'aos/dist/aos.css';

export const useAOS = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: false,
        offset: 50,
        easing: 'ease',
      });
    }
  }, []); // Empty dependency array to run only once on mount

  useEffect(() => {
    // Refresh AOS on route change
    if (typeof window !== "undefined") {
      AOS.refresh();
    }
  }, [pathname]); // Run when pathname changes
};