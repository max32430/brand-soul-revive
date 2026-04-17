import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import { Recycle, Leaf, Droplets, TreePine } from "lucide-react";

const initiatives = [
  { icon: Recycle, title: "إعادة التدوير", desc: "نعمل على إعادة تدوير 80% من مخلفات الإنتاج" },
  { icon: Leaf, title: "المواد الطبيعية", desc: "نستخدم مكونات طبيعية 100% في جميع منتجاتنا" },
  { icon: Droplets, title: "الحفاظ على المياه", desc: "تقنيات متطورة لتقليل استهلاك المياه في التصنيع" },
  { icon: TreePine, title: "التشجير", desc: "مبادرات لزراعة الأشجار في المناطق المحيطة بمصانعنا" },
];

const Sustainability = () => {
  return (
    <div className="min-h-screen w-full font-cairo" dir="rtl">
      <TopNavBar />

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <h1 className="section-title text-center mb-4">مسؤوليتنا نحو البيئة</h1>
         <p className="text-center text-card-foreground/80 mb-10 max-w-xl mx-auto">
           نؤمن بأن الاستدامة ليست خيارًا بل مسؤولية. نعمل يوميًا لتقليل أثرنا البيئي.
         </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform">
              <div className="glass-panel-strong w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 golden-icon" />
              </div>
              <div>
                <h3 className="text-lg font-bold golden-glow mb-2">{item.title}</h3>
                <p className="text-sm text-card-foreground/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Sustainability;
