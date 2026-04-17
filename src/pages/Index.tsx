import TopNavBar from "@/components/TopNavBar";
import HeroBanner from "@/components/HeroBanner";
import ProductsSection from "@/components/ProductsSection";
import BrandShowcase from "@/components/BrandShowcase";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen w-full font-cairo page-overlay" dir="rtl">
      <TopNavBar />
      <HeroBanner />
      <ProductsSection title="منتجاتنا" />
      <BrandShowcase />
      <SiteFooter />
    </div>
  );
};

export default Index;
