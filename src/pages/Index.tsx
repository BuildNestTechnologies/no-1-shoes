import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import ScrollChapterDots from "@/components/ScrollChapterDots";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import FeaturedCollection from "@/components/FeaturedCollection";
import EnhancedParallaxSection from "@/components/EnhancedParallaxSection";
import SneakerExplosion from "@/components/SneakerExplosion";
import ProductShowcase from "@/components/ProductShowcase";
import ScrollRevealStats from "@/components/ScrollRevealStats";
import AboutBrand from "@/components/AboutBrand";
import StoreLocation from "@/components/StoreLocation";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorFollower />
      <ScrollChapterDots />
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <FeaturedCollection />
      <EnhancedParallaxSection />
      <SneakerExplosion />
      <ProductShowcase />
      <ScrollRevealStats />
      <AboutBrand />
      <StoreLocation />
      <InstagramGallery />
      <Footer />
    </div>
  );
};

export default Index;
