import Home1About from "@/components/about/Home1About";
import Footer from "@/components/common/Footer";
import Header1 from "@/components/common/Header1";
import Banner1 from "@/components/home/Banner1";
import Home1AboutSection from "@/components/home/Home1AboutSection";
import Home1ArticleSection from "@/components/home/Home1ArticleSection";
import Home1ArtisticSection from "@/components/home/Home1ArtisticSection";
import Home1ArtistSection from "@/components/home/Home1ArtistSection";
import Home1AuctionSliderSection from "@/components/home/Home1AuctionSliderSection";
import Home1FaqSection from "@/components/home/Home1FaqSection";
import Home1FeatureSection from "@/components/home/Home1FeatureSection";
import Home1GeneralArtSliderSection from "@/components/home/Home1GeneralArtSliderSection";
import Home1TestimonialSection from "@/components/home/Home1TestimonialSection";
import Home1UpcomingAuctionSliderSection from "@/components/home/Home1UpcomingAuctionSliderSection";

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
