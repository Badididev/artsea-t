"use client";
import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';

import useMagneticHover from "@/customHooks/useMagneticHover";
import { kanit, inter, playfair_dispaly, work_sans } from "@/fonts/font";
import { usePathname } from 'next/navigation'; // Import usePathname
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

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  useMagneticHover();
  useWow()
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
      <body id="body" className={` ${playfair_dispaly.variable} ${work_sans.variable}`}>
        <ThemeSwitch/>
        <ScrollProgress/>
        {/* <div className="circle-container">
          <svg className="circle-progress svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            >
            </path>
          </svg>
        </div> */}
        {children}
      </body>
    </html>
  );
}
