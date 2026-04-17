import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import { Recycle, Leaf, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const EnvironmentShard = () => {
  return (
    <Link to="/sustainability" className="flex flex-col items-center gap-6 group no-underline">
      <div className="glass-panel rounded-2xl px-4 py-8 flex flex-col items-center gap-6 group-hover:scale-105 transition-all duration-300 group-hover:border-golden/40">
        <Recycle className="w-8 h-8 golden-icon group-hover:scale-125 transition-transform duration-300" />
        <Leaf className="w-8 h-8 golden-icon group-hover:scale-125 transition-transform duration-300 delay-75" />
        <Droplets className="w-8 h-8 golden-icon group-hover:scale-125 transition-transform duration-300 delay-150" />
      </div>
      <div className="glass-panel-strong rounded-xl px-5 py-3 group-hover:scale-105 transition-transform duration-300">
        <p className="text-sm font-bold golden-glow whitespace-nowrap">
          مسؤوليتنا نحو البيئة
        </p>
      </div>
    </Link>
  );
};

export default EnvironmentShard;
