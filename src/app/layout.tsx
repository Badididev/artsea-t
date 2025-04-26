"use client";
import { useEffect } from "react";
// import { useWow } from '@/customHooks/useWow';
import useMagneticHover from "@/customHooks/useMagneticHover";
import './globals.css';
import {playfair_dispaly, work_sans } from "@/fonts/font";
import { usePathname } from 'next/navigation';
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";
import 'react-creative-cursor/dist/styles.css';
import ThemeSwitch from "@/components/common/Theme";
import ScrollProgress from "@/components/common/ScrollProgress";
// In app/layout.tsx or similar
import 'aos/dist/aos.css';
import { useAOS } from "@/customHooks/useAOS"
import { PrivyProvider } from '@/components/providers/PrivyProvider'
import { Toaster } from "sonner"
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from '@/components/providers/auth-provider'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  useMagneticHover();
  // useWow();
  useAOS();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Artmart - Art & Auction NextJS Template.</title>
      </head>
      <body id="body" className={`${playfair_dispaly.variable} ${work_sans.variable}`}>
        <ThemeSwitch />
        <ScrollProgress />
        <PrivyProvider>
          <AuthProvider>
            {children}
            <Toaster richColors closeButton position="top-right" />
          </AuthProvider>
        </PrivyProvider>
      </body>
    </html>
  );
}