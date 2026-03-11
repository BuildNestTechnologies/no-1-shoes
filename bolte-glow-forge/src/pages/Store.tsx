import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreLocation from "@/components/StoreLocation";
import FAQ from "@/components/FAQ";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

const Store = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <ScrollToTop />
        <Navbar />
        
        <div className="pt-24 pb-12">
          <StoreLocation />
          
          <div className="mt-20">
            <FAQ />
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Store;
