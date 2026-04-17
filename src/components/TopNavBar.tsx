import { Search, User, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import sinalcoLogo from "@/assets/sinalco-logo.png";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المنتجات", href: "/products" },
  { label: "قصتنا", href: "/story" },
  { label: "البيئة", href: "/sustainability" },
];

const categories = [
  { id: "glass", name: "زجاجية", sizes: ["200 مل", "300 مل"] },
  { id: "can", name: "معدنية", sizes: ["250 مل", "330 مل"] },
  { id: "plastic", name: "بلاستيكية", sizes: ["330 مل", "750 مل", "2250 مل"] },
];

const allProducts = [
  { id: "lemon", name: "ليمون", nameEn: "Lemon" },
  { id: "cola", name: "كولا", nameEn: "Cola" },
  { id: "citro", name: "سيتو", nameEn: "Citro" },
  { id: "orange", name: "برتقال", nameEn: "Orange" },
  { id: "apple", name: "تفاح", nameEn: "Apple" },
];

interface SearchResult {
  productId: string;
  productName: string;
  productNameEn: string;
  categoryName: string;
  categoryId: string;
  size: string;
}

function buildSearchResults(query: string): SearchResult[] {
  const q = query.trim();
  if (!q) return [];

  const sizeMatch = q.match(/(\d+)\s*(مل|ml)?/i);
  const sizePart = sizeMatch ? sizeMatch[1] : "";
  const namePart = sizeMatch ? q.replace(sizeMatch[0], "").trim() : q;

  let matchedProducts = allProducts;
  if (namePart) {
    matchedProducts = allProducts.filter(
      (p) =>
        p.name.includes(namePart) ||
        p.nameEn.toLowerCase().includes(namePart.toLowerCase())
    );
  }

  const results: SearchResult[] = [];
  for (const product of matchedProducts) {
    for (const cat of categories) {
      for (const size of cat.sizes) {
        if (sizePart && !size.includes(sizePart)) continue;
        results.push({
          productId: product.id,
          productName: product.name,
          productNameEn: product.nameEn,
          categoryName: cat.name,
          categoryId: cat.id,
          size,
        });
      }
    }
  }
  return results;
}

const TopNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const searchResults = buildSearchResults(searchQuery);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length === 1) {
      const r = searchResults[0];
      navigate(`/products?highlight=${r.productId}&size=${encodeURIComponent(r.size)}`);
      setShowResults(false);
      setSearchQuery("");
    } else if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setSearchQuery("");
    }
  };

  const selectResult = (r: SearchResult) => {
    navigate(`/products?highlight=${r.productId}&size=${encodeURIComponent(r.size)}`);
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: "hsl(220, 15%, 12%)" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-2">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={sinalcoLogo} alt="سينالكو العراق" className="h-14 md:h-16 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-base font-bold text-white/90 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search + Contact */}
        <div className="hidden md:flex items-center gap-3">
          <div ref={searchRef} className="relative">
            <form onSubmit={handleSearch} className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2">
              <input
                type="text"
                placeholder="ابحث عن المنتج الذي تريده"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
                onFocus={() => setShowResults(true)}
                className="bg-transparent text-sm text-white placeholder:text-white/50 outline-none w-48 lg:w-64"
              />
              <button type="submit" className="bg-secondary rounded-full p-1.5">
                <Search className="w-4 h-4 text-secondary-foreground" />
              </button>
            </form>

            {showResults && searchQuery.trim() && (
              <div className="absolute top-full mt-2 right-0 w-[320px] bg-[hsl(220,15%,14%)] border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[360px] overflow-y-auto backdrop-blur-xl">
                {searchResults.length > 0 ? (
                  searchResults.map((r, i) => (
                    <button
                      key={`${r.productId}-${r.categoryId}-${r.size}-${i}`}
                      onClick={() => selectResult(r)}
                      className="w-full text-right px-4 py-2.5 text-sm text-white hover:bg-white/10 transition-colors flex items-center justify-between border-b border-white/5 last:border-b-0"
                    >
                      <div className="flex flex-col items-start gap-0.5">
                        <span className="font-bold">{r.productName} <span className="text-white/40 font-normal text-xs">{r.productNameEn}</span></span>
                        <span className="text-[11px] text-white/50">{r.categoryName} — {r.size}</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-white/50">لا توجد نتائج</div>
                )}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="flex items-center gap-2 border-2 border-white/40 rounded-full px-4 py-2 text-sm font-bold text-white hover:bg-white hover:text-sinalco-dark transition-all"
          >
            <User className="w-4 h-4" />
            <span>اتصل بنا</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-white/10 rounded-lg p-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/20 px-4 py-4 flex flex-col gap-3" style={{ background: "hsl(220, 15%, 15%)" }}>
          <form onSubmit={(e) => { handleSearch(e); setMobileMenuOpen(false); }} className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2 mb-2">
            <input
              type="text"
              placeholder="ابحث عن المنتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white placeholder:text-white/50 outline-none flex-1"
            />
            <button type="submit" className="bg-secondary rounded-full p-1.5">
              <Search className="w-4 h-4 text-secondary-foreground" />
            </button>
          </form>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-white py-2 px-4 rounded-xl hover:bg-white/10 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-bold text-white py-2 px-4 rounded-xl hover:bg-white/10"
          >
            اتصل بنا
          </Link>
        </nav>
      )}
    </header>
  );
};

export default TopNavBar;
