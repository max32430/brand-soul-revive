import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import { Phone, Mail } from "lucide-react";

const contacts = [
  { icon: Phone, label: "077 123 456", href: "tel:077123456" },
  { icon: Phone, label: "0770 654 321", href: "tel:0770654321" },
  { icon: Mail, label: "EMAIL@EMAIL.COM", href: "mailto:EMAIL@EMAIL.COM" },
];

const Contact = () => {
  return (
    <div className="min-h-screen w-full font-cairo" dir="rtl">
      <TopNavBar />

      <div className="max-w-lg mx-auto px-4 md:px-8 py-16">
        <h1 className="section-title text-center mb-8">اتصل بنا</h1>

        <div className="glass-card rounded-3xl p-8 flex flex-col items-center gap-6">
          <Phone className="w-12 h-12 golden-icon" />
          <h2 className="text-xl font-bold golden-glow">تواصل معنا</h2>

          <div className="w-full flex flex-col gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass-panel rounded-2xl px-6 py-4 flex items-center gap-4 hover:bg-primary/10 transition-colors group"
              >
                <div className="glass-panel-strong w-10 h-10 rounded-full flex items-center justify-center">
                  <c.icon className="w-5 h-5 golden-icon" />
                </div>
                <span className="text-base font-bold text-card-foreground group-hover:golden-glow transition-all tracking-wide" dir="ltr">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Contact;
