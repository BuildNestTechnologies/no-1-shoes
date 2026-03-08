import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import ScrollChapterDots from "@/components/ScrollChapterDots";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import BrandsStrip from "@/components/BrandsStrip";
import FeaturedCollection from "@/components/FeaturedCollection";
import NewArrivals from "@/components/NewArrivals";
import EnhancedParallaxSection from "@/components/EnhancedParallaxSection";
import DealsSection from "@/components/DealsSection";
import SneakerExplosion from "@/components/SneakerExplosion";
import ProductShowcase from "@/components/ProductShowcase";
import SizeGuide from "@/components/SizeGuide";
import ScrollRevealStats from "@/components/ScrollRevealStats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AboutBrand from "@/components/AboutBrand";
import StoreLocation from "@/components/StoreLocation";
import Newsletter from "@/components/Newsletter";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorFollower />
      <ScrollChapterDots />
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <BrandsStrip />
      <FeaturedCollection />
      <NewArrivals />
      <EnhancedParallaxSection />
      <DealsSection />
      <SneakerExplosion />
      <ProductShowcase />
      <SizeGuide />
      <ScrollRevealStats />
      <WhyChooseUs />
      <Testimonials />
      <AboutBrand />
      <StoreLocation />
      <Newsletter />
      <InstagramGallery />
      <Footer />
    </div>
  );
};

export default Index;
