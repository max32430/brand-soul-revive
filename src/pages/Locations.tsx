import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import { MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const locations = [
  {
    name: "بغداد",
    subLocations: [
      { name: "الكرخ", mapUrl: "https://www.google.com/maps/place/Al-Nabi'+soft+drinks+(Sinalco)" },
      { name: "المدينة", mapUrl: null },
      { name: "الرصافة", mapUrl: "https://www.google.com/maps" },
    ],
  },
  { name: "الموصل", subLocations: [] },
  { name: "البصرة", subLocations: [] },
];

const Locations = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full font-cairo" dir="rtl">
      <TopNavBar />

      <div className="max-w-lg mx-auto px-4 md:px-8 py-16">
        <h1 className="section-title text-center mb-8">أين تجدنا</h1>

        <div className="glass-card rounded-3xl p-8 flex flex-col items-center gap-6">
          <MapPin className="w-12 h-12 golden-icon" />
          <h2 className="text-xl font-bold golden-glow">مواقعنا</h2>

          <div className="w-full flex flex-col gap-3">
            {locations.map((loc) => (
              <div key={loc.name}>
                <button
                  onClick={() => loc.subLocations.length > 0 && setExpanded(expanded === loc.name ? null : loc.name)}
                  className="w-full glass-panel rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-primary/10 transition-colors group"
                >
                  <div className="glass-panel-strong w-10 h-10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 golden-icon" />
                  </div>
                   <span className="text-base font-bold text-card-foreground group-hover:golden-glow flex-1 text-right">
                     {loc.name}
                  </span>
                  {loc.subLocations.length > 0 && (
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expanded === loc.name ? "rotate-180" : ""}`} />
                  )}
                </button>

                {expanded === loc.name && loc.subLocations.length > 0 && (
                  <div className="mt-2 mr-8 flex flex-col gap-2">
                    {loc.subLocations.map((sub) => (
                      <div key={sub.name} className="glass-panel rounded-xl px-5 py-3 flex items-center justify-between">
                        <span className="text-sm font-semibold text-card-foreground">{sub.name}</span>
                        {sub.mapUrl && (
                          <a href={sub.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs golden-glow hover:underline">
                            عرض الخريطة
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Locations;
