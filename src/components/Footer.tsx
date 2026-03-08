import { Phone, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-12 w-12" />
              <span className="font-display text-lg font-bold text-foreground">
                NO.1 SHOES <span className="text-primary">BOLTE</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium footwear for the streets. Quality. Style. Affordability.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3">
              {["Collection", "About", "Store", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:7558764648" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone size={14} /> +91 7558764648
              </a>
              <a href="https://instagram.com/No_1_shoes_bolte" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Instagram size={14} /> @No_1_shoes_bolte
              </a>
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" /> Bhiwandi, Thane 421302
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 No.01 Shoes Bolte. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
