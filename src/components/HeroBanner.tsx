import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vintageFactory from "@/assets/vintage-factory.jpg";
import visit1 from "@/assets/visit-1.jpg";
import visit2 from "@/assets/visit-2.jpg";
import visit3 from "@/assets/visit-3.jpg";
import visit4 from "@/assets/visit-4.jpg";

export const visitsData = [
  { id: "1", image: visit1, title: "زيارة وفد المصنع", caption: "استقبال وفد رسمي في خط الإنتاج — ٢٠٢٥" },
  { id: "2", image: visit2, title: "جولة في المصنع", caption: "وفد دولي يتفقد أحدث خطوط التعبئة — ٢٠٢٥" },
  { id: "3", image: visit3, title: "حفل الافتتاح", caption: "حفل قص الشريط لافتتاح فرع سينالكو الجديد — ٢٠٢٤" },
  { id: "4", image: visit4, title: "اجتماع الشراكة", caption: "اجتماع مع شركاء دوليين لبحث التوسع — ٢٠٢٤" },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % visitsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + visitsData.length) % visitsData.length);
  const next = () => setCurrent((c) => (c + 1) % visitsData.length);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 relative">
      {/* News badge */}
      <div className="flex justify-end mb-4">
        <span className="red-badge text-lg md:text-xl">اخر الاخبار :</span>
      </div>

      {/* Hero cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4 relative z-10">
        {/* Vintage factory card */}
        <Link to="/story" className="relative overflow-hidden rounded-2xl border-2 border-card-foreground/20 bg-card-foreground/10 block">
          <img
            src={vintageFactory}
            alt="قصتنا منذ ١٩٥٤"
            className="w-full h-[250px] md:h-[320px] object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, hsl(var(--card) / 0.9), hsl(var(--card) / 0.48), transparent)",
            }}
          />
          <div className="absolute bottom-4 right-4 left-4 md:left-auto md:max-w-[70%] text-right">
            <h2 className="text-2xl md:text-3xl font-black golden-glow mb-1">قصتنا منذ ١٩٥٤</h2>
            <p className="text-sm text-white/90">رحلة أكثر من ٧ عقود من التميز</p>
          </div>
        </Link>

        {/* Visits carousel card */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-card-foreground/20 bg-card/90 flex flex-col">
          <div className="bg-card px-4 py-3 text-center border-b border-white/10">
            <h3 className="text-lg md:text-xl font-black text-card-foreground">
              صور من زيارات الوفود
            </h3>
          </div>

          {/* Carousel */}
          <div className="relative flex-1 min-h-[200px] md:min-h-[270px]">
            {visitsData.map((visit, i) => (
              <Link
                key={visit.id}
                to={`/visits/${visit.id}`}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === current ? "opacity-100 translate-x-0" : i < current ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                }`}
              >
                <img
                  src={visit.image}
                  alt={visit.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 right-3 text-right">
                  <h4 className="text-base font-bold text-white mb-0.5">{visit.title}</h4>
                  <p className="text-xs text-white/80">{visit.caption}</p>
                </div>
              </Link>
            ))}

            {/* Controls */}
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors z-10">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors z-10">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 py-2 bg-card/80">
            {visitsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
