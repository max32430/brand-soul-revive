import { Phone, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import sinalcoLogo from "@/assets/sinalco-logo.png";

const SiteFooter = () => {
  return (
    <footer className="w-full mt-8">
      <div style={{ background: 'hsl(220, 15%, 12%)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src={sinalcoLogo} alt="سينالكو" className="h-16 w-auto" />
              <p className="text-sm text-card-foreground/70 text-center md:text-right max-w-xs">
                منذ عام ١٩٠٥ — مذاق أصيل وجودة لا تُضاهى في العراق
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-base font-bold golden-glow mb-2">روابط سريعة</h4>
              <Link to="/products" className="text-sm text-card-foreground/70 hover:text-card-foreground transition-colors">المنتجات</Link>
              <Link to="/story" className="text-sm text-card-foreground/70 hover:text-card-foreground transition-colors">قصتنا</Link>
              <Link to="/sustainability" className="text-sm text-card-foreground/70 hover:text-card-foreground transition-colors">البيئة</Link>
              <Link to="/locations" className="text-sm text-card-foreground/70 hover:text-card-foreground transition-colors">أين تجدنا</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h4 className="text-base font-bold golden-glow mb-2">تواصل معنا</h4>
              <Link to="/contact" className="flex items-center gap-2 text-sm text-card-foreground/70 hover:text-card-foreground transition-colors">
                <Phone className="w-4 h-4 golden-icon" />
                <span>اتصل بنا</span>
              </Link>
              <Link to="/locations" className="flex items-center gap-2 text-sm text-card-foreground/70 hover:text-card-foreground transition-colors">
                <MapPin className="w-4 h-4 golden-icon" />
                <span>أين تجدنا</span>
              </Link>
              <a
                href="https://www.instagram.com/sinalco.iraq1905/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-card-foreground/70 hover:text-card-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 golden-icon" />
                <span>@sinalco.iraq1905</span>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-card-foreground/20 text-center">
            <p className="text-xs text-card-foreground/50">
              © {new Date().getFullYear()} سينالكو العراق — جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
