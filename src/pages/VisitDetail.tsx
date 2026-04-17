import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import { visitsData } from "@/components/VisitsCarousel";

const VisitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const visit = visitsData.find((v) => v.id === id);

  if (!visit) {
    return (
      <div className="min-h-screen w-full font-cairo" dir="rtl">
        <TopNavBar />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-card-foreground">الزيارة غير موجودة</h1>
          <Link to="/" className="text-primary mt-4 inline-block">العودة للرئيسية</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full font-cairo" dir="rtl">
      <TopNavBar />
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-card-foreground/70 hover:text-card-foreground mb-6 transition-colors">
          <ArrowRight className="w-4 h-4" />
          العودة للرئيسية
        </Link>

        <div className="section-dark p-4 md:p-8">
          <img
            src={visit.image}
            alt={visit.title}
            className="w-full rounded-xl mb-6 max-h-[500px] object-cover"
          />
          <h1 className="text-2xl md:text-3xl font-black text-white mb-3">{visit.title}</h1>
          <p className="text-base text-card-foreground/80 leading-relaxed">{visit.caption}</p>
        </div>

        {/* Other visits */}
        <h3 className="section-title mt-10 mb-4">زيارات أخرى</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visitsData.filter((v) => v.id !== id).map((v) => (
            <Link key={v.id} to={`/visits/${v.id}`} className="glass-card overflow-hidden group hover:scale-[1.02] transition-all">
              <img src={v.image} alt={v.title} className="w-full h-36 object-cover" loading="lazy" />
              <div className="p-3">
                <h4 className="text-sm font-bold text-card-foreground">{v.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default VisitDetail;
