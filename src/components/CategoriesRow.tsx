import { Wine, Package, Cylinder, Leaf, Recycle, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Wine, label: "قناني زجاجية", href: "/products" },
  { icon: Package, label: "علب معدنية", href: "/products" },
  { icon: Cylinder, label: "عبوات بلاستيكية", href: "/products" },
  { icon: Leaf, label: "البيئة", href: "/sustainability" },
  { icon: Recycle, label: "الاستدامة", href: "/sustainability" },
  { icon: Droplets, label: "قصتنا", href: "/story" },
];

const CategoriesRow = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
      <h3 className="section-title text-center mb-6">الأقسام</h3>
      <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2 justify-start md:justify-center">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={cat.href}
            className="flex flex-col items-center gap-3 flex-shrink-0 group"
          >
            <div className="glass-card w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:border-golden/40">
              <cat.icon className="w-8 h-8 md:w-10 md:h-10 golden-icon group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs md:text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesRow;
