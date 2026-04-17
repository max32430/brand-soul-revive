import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const VisitsCarousel = () => {
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
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h2 className="section-title text-center mb-6">آخر الزيارات</h2>
      <div className="section-dark p-4 md:p-6 relative">
        <div className="relative overflow-hidden rounded-xl" style={{ height: "360px" }}>
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
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
                width={800}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl" />
              <div className="absolute bottom-4 right-4 text-right">
                <h3 className="text-xl font-bold text-white mb-1">{visit.title}</h3>
                <p className="text-sm text-white/80">{visit.caption}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Controls */}
        <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {visitsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitsCarousel;
