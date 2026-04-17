import { useState, useEffect } from "react";
import { Wine, Package, Cylinder, Info } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import productCola from "@/assets/product-cola.png";
import productOrange from "@/assets/product-orange.png";
import productApple from "@/assets/product-apple.png";
import productLemon from "@/assets/product-lemon.png";
import productCitro from "@/assets/product-citro.png";
import productColaGlass200 from "@/assets/product-cola.jpg";
import productOrangeGlass200 from "@/assets/product-orange.jpg";
import productLemonGlass200 from "@/assets/product-lemon.jpg";
import productCitroGlass200 from "@/assets/product-citro.jpg";

const glass200Images: Record<string, string> = {
  cola: productColaGlass200,
  orange: productOrangeGlass200,
  lemon: productLemonGlass200,
  citro: productCitroGlass200,
};

const flavors = [
  { id: "lemon", name: "ليمون", nameEn: "Lemon", image: productLemon },
  { id: "cola", name: "كولا", nameEn: "Cola", image: productCola },
  { id: "citro", name: "سيتو", nameEn: "Citro", image: productCitro },
  { id: "orange", name: "برتقال", nameEn: "Orange", image: productOrange },
  { id: "apple", name: "تفاح", nameEn: "Apple", image: productApple },
];

const categories = [
  { id: "glass", name: "قناني زجاجية", icon: Wine, sizes: ["200 مل", "300 مل"] },
  { id: "can", name: "علب معدنية", icon: Package, sizes: ["250 مل", "330 مل"] },
  { id: "plastic", name: "عبوات بلاستيكية", icon: Cylinder, sizes: ["330 مل", "750 مل", "2250 مل"] },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const highlight = searchParams.get("highlight");
  const search = searchParams.get("search");
  const sizeParam = searchParams.get("size");

  const [activeCategory, setActiveCategory] = useState("glass");
  const [activeSize, setActiveSize] = useState(categories[0].sizes[0]);
  const [detailsOpen, setDetailsOpen] = useState<string | null>(highlight);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const cat = categories.find((c) => c.id === catId)!;
    setActiveSize(cat.sizes[0]);
  };

  // Filter products based on search query (parse out size from search text too)
  const displayedFlavors = search
    ? (() => {
        const sizeMatch = search.match(/(\d+)\s*(مل|ml)?/i);
        const namePart = sizeMatch ? search.replace(sizeMatch[0], "").trim() : search;
        return flavors.filter(
          (f) =>
            !namePart ||
            f.name.includes(namePart) ||
            f.nameEn.toLowerCase().includes(namePart.toLowerCase())
        );
      })()
    : flavors;

  // Auto-select size from URL param or search query
  useEffect(() => {
    const sizeFromSearch = search?.match(/(\d+)\s*(مل|ml)?/i);
    const targetSize = sizeParam || (sizeFromSearch ? `${sizeFromSearch[1]} مل` : null);
    if (targetSize) {
      // Find which category has this size
      const matchingCat = categories.find((c) => c.sizes.some((s) => s.includes(targetSize.replace(" مل", ""))));
      if (matchingCat) {
        setActiveCategory(matchingCat.id);
        const matchedSize = matchingCat.sizes.find((s) => s.includes(targetSize.replace(" مل", "")));
        if (matchedSize) setActiveSize(matchedSize);
      }
    }
  }, [search, sizeParam]);

  // Auto-open highlighted product
  useEffect(() => {
    if (highlight) {
      setDetailsOpen(highlight);
      setTimeout(() => {
        document.getElementById(`product-${highlight}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [highlight]);

  return (
    <div className="min-h-screen w-full font-cairo" dir="rtl">
      <TopNavBar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h1 className="section-title text-center mb-8">منتجاتنا</h1>

        {search && (
          <p className="text-center text-card-foreground/70 mb-4 text-sm">
            نتائج البحث عن: <span className="font-bold text-white">"{search}"</span>
            {displayedFlavors.length === 0 && " — لا توجد نتائج"}
          </p>
        )}

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 px-4 mb-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`glass-card rounded-2xl px-5 py-3 flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id ? "ring-2 ring-golden scale-105" : "opacity-80 hover:opacity-100"
              }`}
            >
              <cat.icon className="w-5 h-5 golden-icon" />
              <span className="text-sm font-bold text-card-foreground">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Size Tabs */}
        <div className="flex justify-center gap-2 px-4 mb-8 flex-wrap">
          {currentCategory.sizes.map((size) => {
            const isActive = activeSize === size;

            return (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`rounded-xl px-4 py-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "glass-panel-strong text-card-foreground font-black"
                    : "glass-panel text-card-foreground/85 hover:text-card-foreground"
                }`}
              >
                <span className="text-sm">{size}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {displayedFlavors.map((flavor) => {
            const isOpen = detailsOpen === flavor.id;
            const isHighlighted = highlight === flavor.id;
            return (
              <div
                key={flavor.id}
                id={`product-${flavor.id}`}
                className={`glass-card rounded-2xl p-4 flex flex-col items-center group hover:scale-[1.03] transition-all duration-300 ${
                  isHighlighted ? "ring-2 ring-primary scale-[1.03]" : "hover:border-golden/30"
                }`}
              >
                <div className="w-full aspect-[2/3] flex items-center justify-center rounded-xl mb-3 overflow-hidden">
                  <img
                    src={activeCategory === "glass" && activeSize === "200 مل" && glass200Images[flavor.id] ? glass200Images[flavor.id] : flavor.image}
                    alt={flavor.name}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base font-bold golden-glow mb-1">{flavor.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="glass-panel-strong rounded-lg px-2 py-1 text-[10px] font-semibold text-card-foreground/95">
                    {currentCategory.name}
                  </span>
                  <span className="glass-panel-strong rounded-lg px-2 py-1 text-[10px] font-semibold text-card-foreground/95">
                    {activeSize}
                  </span>
                </div>
                <button
                  onClick={() => setDetailsOpen(isOpen ? null : flavor.id)}
                  className="glass-panel rounded-xl px-4 py-2 hover:bg-primary/20 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Info className="w-3.5 h-3.5 golden-icon" />
                  <span className="text-xs font-bold golden-glow">تفاصيل</span>
                </button>
                {isOpen && (
                  <div className="w-full mt-3 glass-panel rounded-xl p-3 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-white/70 text-center">
                      التفاصيل سنملأها لاحقاً
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Products;
