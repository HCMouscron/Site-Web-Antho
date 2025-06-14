
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-hc-green via-hc-green-light to-hc-orange/70 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" alt="HC Mouscron logo" className="h-14 w-14 rounded-full bg-white p-1 shadow" />
              <span className="text-xl font-bold text-white drop-shadow">HC Mouscron</span>
            </div>
            <p className="text-white max-w-md">
              Club de handball passionné basé à Mouscron. Venez partager votre passion du handball dans une ambiance chaleureuse, dynamique et sportive !
            </p>
            <div className="flex gap-x-4 mt-6">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.facebook.com/HCMouscron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-hc-orange"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.instagram.com/hcmouscron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-hc-orange"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-white/80 hover:text-hc-orange transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/equipe" className="text-white/80 hover:text-hc-orange transition-colors">
                  Équipe
                </a>
              </li>
              <li>
                <a href="/infos" className="text-white/80 hover:text-hc-orange transition-colors">
                  Infos pratiques
                </a>
              </li>
              <li>
                <a href="/planning" className="text-white/80 hover:text-hc-orange transition-colors">
                  Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Salle Omnisports, Rue du Stade, 7700 Mouscron</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+32 476 83 29 12</span>
              </li>
              <li className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@hcmouscron.be</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-center text-sm text-white">
            © 2024 HC Mouscron. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
