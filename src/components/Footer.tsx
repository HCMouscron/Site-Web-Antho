
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-hc-green flex items-center justify-center">
                <span className="text-white font-bold text-lg">HC</span>
              </div>
              <span className="text-xl font-bold text-hc-green">HC Mouscron</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Club de handball passionné de Mouscron. Rejoignez-nous pour vivre 
              l'esprit d'équipe et la passion du handball dans une ambiance conviviale.
            </p>
            <div className="flex gap-x-4 mt-6">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hc-green hover:text-hc-orange"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hc-green hover:text-hc-orange"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-hc-green transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/equipe" className="text-muted-foreground hover:text-hc-green transition-colors">
                  Équipe
                </a>
              </li>
              <li>
                <a href="/infos" className="text-muted-foreground hover:text-hc-green transition-colors">
                  Infos pratiques
                </a>
              </li>
              <li>
                <a href="/planning" className="text-muted-foreground hover:text-hc-green transition-colors">
                  Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Salle Omnisports, Rue du Sport 1, 7700 Mouscron</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+32 56 123 456</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@hcmouscron.be</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 HC Mouscron. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
