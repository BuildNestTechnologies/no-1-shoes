import ScrollProgress from "@/components/ScrollProgress";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import ParallaxSection from "@/components/ParallaxSection";
import ProductShowcase from "@/components/ProductShowcase";
import StoreLocation from "@/components/StoreLocation";
import InstagramGallery from "@/components/InstagramGallery";
import AboutBrand from "@/components/AboutBrand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorFollower />
      <Navbar />
      <HeroSection />
      <FeaturedCollection />
      <ParallaxSection />
      <ProductShowcase />
      <AboutBrand />
      <StoreLocation />
      <InstagramGallery />
      <Footer />
    </div>
  );
};

export default Index;
