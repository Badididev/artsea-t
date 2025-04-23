import Footer from '@/components/common/Footer';
import About from '@/components/home2/About';
import ArticleSection from '@/components/home2/ArticleSection';
import ArtisticSection from '@/components/home2/ArtisticSection';
import ArtistSection from '@/components/home2/ArtistSection';
import ArtSlider from '@/components/home2/ArtSlider';
import Banner from '@/components/home2/Banner';
import CategorySection from '@/components/home2/CategorySection';
import FeatureSection from '@/components/home2/FeatureSection';
import Header from '@/components/home2/Header';
import HomeAcutonSilder from '@/components/home2/HomeAcutonSilder';
import TestimonialSection from '@/components/home2/TestimonialSection';

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeAcutonSilder />
      <About />
      <ArtSlider />
      <ArtisticSection />
      <CategorySection />
      <FeatureSection />
      <ArtistSection />
      <TestimonialSection />
      <ArticleSection />
      <Footer />
    </>
  )
}

export default page