
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Infos', href: '/infos' },
    { name: 'Planning', href: '/planning' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-hc-green via-hc-green-light to-hc-orange/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Nouveau logo intégré */}
        <div className="flex lg:flex-1 items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" alt="HC Mouscron logo" className="h-12 w-12 rounded-full bg-white p-1 shadow" />
            <span className="hidden sm:block text-xl font-bold text-hc-green">HC Mouscron</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-bold transition-colors hover:text-hc-orange ${
                isActive(item.href) ? 'text-hc-orange' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Social Links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://www.facebook.com/HCMouscron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hc-green hover:text-hc-orange"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://www.instagram.com/hcmouscron/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hc-orange hover:text-hc-green"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </Button>
        </div>
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden animate-slide-in">
          <div className="space-y-1 px-4 pb-4 pt-2 bg-gradient-to-r from-hc-green via-hc-green-light to-hc-orange/90 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-hc-orange ${
                  isActive(item.href) ? 'text-hc-orange' : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-x-4 px-3 py-2">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.facebook.com/HCMouscron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hc-green hover:text-hc-orange"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.instagram.com/hcmouscron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hc-orange hover:text-hc-green"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
