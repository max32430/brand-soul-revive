import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import productCola from "@/assets/product-cola.png";
import productOrange from "@/assets/product-orange.png";
import productApple from "@/assets/product-apple.png";
import productLemon from "@/assets/product-lemon.png";
import productCitro from "@/assets/product-citro.png";
import sinalcoCan from "@/assets/sinalco-can-3d.png";

const products = [
  { id: "cola", name: "سينالكو كولا", sub: "كولا", size: "300 مل", image: productCola },
  { id: "orange", name: "سينالكو برتقال", sub: "برتقال", size: "300 مل", image: productOrange },
  { id: "apple", name: "سينالكو تفاح", sub: "تفاح", size: "300 مل", image: productApple },
  { id: "lemon", name: "سينالكو ليمون", sub: "ليمون", size: "200 مل", image: productLemon },
  { id: "citro", name: "سينالكو سيترو", sub: "سيترو", size: "250 مل", image: productCitro },
];

interface ProductsSectionProps {
  title: string;
  showAll?: boolean;
}

const ProductsSection = ({ title, showAll = true }: ProductsSectionProps) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
      <div className="section-dark p-6 md:p-8 relative overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="section-title">{title}</h3>
          {showAll && (
            <Link
              to="/products"
              className="text-sm font-bold text-primary hover:underline"
            >
              مشاهدة الكل ❮
            </Link>
          )}
        </div>

        {/* Products row with can */}
        <div className="flex gap-4 md:gap-6 items-end">
          {/* 3D Can on far left */}
          <div className="hidden lg:flex flex-shrink-0 items-end">
            <img
              src={sinalcoCan}
              alt="سينالكو"
              className="h-52 w-auto drop-shadow-2xl float-animation"
            />
          </div>

          {/* Product Cards */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2 flex-1">
            {products.map((product) => (
              <Link
                key={product.id}
                to="/products"
                className="flex-shrink-0 w-40 md:w-48 glass-card overflow-hidden group hover:scale-[1.03] transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full aspect-[3/4] bg-gradient-to-b from-card/50 to-card flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-3 text-center">
                  <h4 className="text-sm font-bold text-card-foreground mb-0.5">{product.name}</h4>
                  <p className="text-xs text-card-foreground/80 mb-2">{product.sub}  {product.size}</p>
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold" style={{ color: 'hsl(40, 85%, 50%)' }}>
                    <span>التفاصيل</span>
                    <Info className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
