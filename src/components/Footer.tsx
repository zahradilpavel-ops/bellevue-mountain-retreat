import { Mountain, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo and tagline */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain className="w-8 h-8 text-primary-foreground/80" />
              <h3 className="font-serif text-2xl font-medium text-primary-foreground">
                Apartmán Bellevue Abertamy
              </h3>
            </div>
            <p className="text-primary-foreground/60">
              Komfortní ubytování v srdci Krušných hor
            </p>
          </div>

          {/* Quick info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Abertamy, Krušné hory</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@bellevue-abertamy.cz" className="text-sm hover:text-primary-foreground transition-colors">
                info@bellevue-abertamy.cz
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { label: "Apartmán", href: "#apartman" },
              { label: "Galerie", href: "#galerie" },
              { label: "Lokalita", href: "#lokalita" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/40">
              © {currentYear} Apartmán Bellevue Abertamy. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
