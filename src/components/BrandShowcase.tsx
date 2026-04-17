import { Instagram } from "lucide-react";
import communityGrid from "@/assets/community-grid.jpg";
import sinalcoBottle from "@/assets/sinalco-bottle.jpg";
import { Link } from "react-router-dom";

const BrandShowcase = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Story Card */}
        <Link to="/story" className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
          <div className="p-5">
            <h4 className="text-lg font-bold golden-glow mb-3">اكتشف القصة</h4>
            <p className="text-sm text-card-foreground/90">رحلة سينالكو من ١٩٥٤ إلى اليوم</p>
          </div>
        </Link>

        {/* Community Card */}
        <a
          href="https://www.instagram.com/sinalco.iraq1905/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center justify-between p-5 pb-3">
            <Instagram className="w-5 h-5 golden-icon" />
            <h4 className="text-lg font-bold golden-glow">مجتمع سينالكو</h4>
          </div>
          <img
            src={communityGrid}
            alt="مجتمع سينالكو"
            className="w-full h-40 object-cover"
            loading="lazy"
          />
          <p className="text-xs text-card-foreground/90 text-center py-3 px-4">
            تابعنا على انستغرام @sinalco.iraq1905
          </p>
        </a>

        {/* Environment Card */}
        <Link to="/sustainability" className="glass-card overflow-hidden group hover:scale-[1.02] transition-all duration-300">
          <img
            src={sinalcoBottle}
            alt="سينالكو"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-5">
            <h4 className="text-lg font-bold golden-glow mb-2">مسؤوليتنا نحو البيئة</h4>
            <p className="text-sm text-card-foreground/90">نلتزم بالاستدامة والمسؤولية البيئية</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BrandShowcase;
