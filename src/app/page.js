import dynamic from "next/dynamic";
import Footer from "@/components/common/Footer";
import Header1 from "@/components/common/Header1";
import Banner1 from "@/components/home/Banner1";

// Dynamically import components for lazy loading
const Home1AboutSection = dynamic(() => import("@/components/home/Home1AboutSection"));
const Home1ArtisticSection = dynamic(() => import("@/components/home/Home1ArtisticSection"));
const Home1AuctionSliderSection = dynamic(() => import("@/components/home/Home1AuctionSliderSection"));
const Home1ArtistSection = dynamic(() => import("@/components/home/Home1ArtistSection"));
const Home1GeneralArtSliderSection = dynamic(() => import("@/components/home/Home1GeneralArtSliderSection"));
const Home1FeatureSection = dynamic(() => import("@/components/home/Home1FeatureSection"));
const Home1UpcomingAuctionSliderSection = dynamic(() => import("@/components/home/Home1UpcomingAuctionSliderSection"));
const Home1TestimonialSection = dynamic(() => import("@/components/home/Home1TestimonialSection"));
const Home1ArticleSection = dynamic(() => import("@/components/home/Home1ArticleSection"));
const Home1FaqSection = dynamic(() => import("@/components/home/Home1FaqSection"));

export default function Home() {
  return (
    <>
      <Header1 />
      <Banner1 />
      <Home1AboutSection />
      <Home1ArtisticSection />
      <Home1AuctionSliderSection />
      <Home1ArtistSection />
      <Home1GeneralArtSliderSection />
      <Home1FeatureSection />
      <Home1UpcomingAuctionSliderSection />
      <Home1TestimonialSection />
      <Home1ArticleSection />
      <Home1FaqSection />
      <Footer />
    </>
  );
}
