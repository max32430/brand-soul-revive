import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import bottleTimeline from "@/assets/bottle-timeline.png";

const timelineEvents = [
  { year: "1954", title: "البداية من البصرة", text: "تأسست الشركة العربية للمياه الغازية بامتياز من شركة سينالكو العالمية، وتم افتتاح أول مصنع لها في محافظة البصرة." },
  { year: "1956", title: "التوسع إلى بغداد", text: "تم إنشاء المصنع الثاني في العاصمة بغداد والذي اعتبر المقر الرئيسي للشركة." },
  { year: "2000", title: "شركة النبع للمشروبات", text: "تأسيس شركة النبع للمشروبات الغازية المحدودة لزيادة الإنتاج وتغطية السوق المحلي." },
  { year: "2005", title: "خط العلب المعدنية", text: "تم تجديد مصنع النبع بتركيب خط إنتاج جديد من العلب المعدنية بطاقة 30,000 علبة/ساعة." },
  { year: "2017", title: "خط العبوات الزجاجية", text: "تم توسيع مصنع النبع بتركيب خط إنتاج جديد للعبوات الزجاجية بسعة 27,000 قارورة/ساعة." },
  { year: "اليوم", title: "نمو مستمر", text: "يصل عدد الموظفين إلى حوالي 120 موظفًا، ويستمر المصنع في النمو والتطور." },
];

const Story = () => {
  return (
    <div className="min-h-screen w-full font-cairo" dir="rtl">
      <TopNavBar />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <h1 className="section-title text-center mb-4">قصتنا</h1>

        {/* Intro */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 text-center">
          <img src={bottleTimeline} alt="تطور سينالكو" className="w-full max-w-md mx-auto h-24 object-contain mb-4" />
          <p className="text-card-foreground font-medium text-sm md:text-base">
            رحلة تمتد لأكثر من 70 عامًا في العراق — من البصرة إلى بغداد ومنها إلى كل بيت عراقي
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-golden via-golden/50 to-transparent" />
          <div className="flex flex-col gap-6">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pr-16">
                <div className="absolute right-4 top-2 w-5 h-5 rounded-full bg-golden/20 border-2 border-golden flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-golden" />
                </div>
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-black golden-glow">{event.year}</span>
                    <span className="text-base font-bold text-card-foreground">{event.title}</span>
                  </div>
                  <p className="text-sm text-card-foreground/85">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Story;
