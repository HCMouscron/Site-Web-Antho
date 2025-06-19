
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [{
    name: 'Accueil',
    href: '/'
  }, {
    name: 'Équipe',
    href: '/equipe'
  }, {
    name: 'Partenaires',
    href: '/partenaires'
  }, {
    name: 'Infos',
    href: '/infos'
  }, {
    name: 'Contact',
    href: '/contact'
  }];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-hc-green via-hc-green to-hc-orange backdrop-blur shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo - Encore plus visible */}
        <div className="flex lg:flex-1 items-center space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" 
              alt="HC Mouscron logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-white p-1 shadow-xl" 
            />
            <span className="hidden sm:block text-2xl lg:text-3xl font-bold text-white drop-shadow-lg tracking-wide">
              HC Mouscron
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Police plus grande et en gras */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={`text-white font-bold text-lg hover:text-yellow-200 transition-colors drop-shadow-md px-2 py-1 rounded ${
                isActive(item.href) ? 'text-yellow-200 bg-white/10' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links - Vrais logos officiels */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="https://www.facebook.com/HCMouscron" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="text-white hover:bg-white/10 drop-shadow-md p-2 rounded-full"
            >
              <img 
                src="/lovable-uploads/b2e8bfa2-ec84-4d63-8d58-503664da7229.png" 
                alt="Facebook" 
                className="h-6 w-6"
              />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="https://www.instagram.com/hcmouscron/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:bg-white/10 drop-shadow-md p-2 rounded-full" 
              aria-label="Instagram"
            >
              <img 
                src="/lovable-uploads/e132c7e8-e206-404e-b6fb-60edb8e0d181.png" 
                alt="Instagram" 
                className="h-6 w-6"
              />
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white hover:text-yellow-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden animate-slide-in">
          <div className="space-y-1 px-4 pb-4 pt-2 bg-gradient-to-r from-hc-green via-hc-green to-hc-orange border-t border-white/20">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`block px-3 py-2 text-base font-bold transition-colors hover:text-yellow-200 drop-shadow-md ${
                  isActive(item.href) ? 'text-yellow-200 bg-white/10 rounded' : 'text-white'
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
                  className="text-white hover:bg-white/10 drop-shadow-md p-2 rounded-full" 
                  aria-label="Facebook"
                >
                  <img 
                    src="/lovable-uploads/b2e8bfa2-ec84-4d63-8d58-503664da7229.png" 
                    alt="Facebook" 
                    className="h-5 w-5"
                  />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="https://www.instagram.com/hcmouscron/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:bg-white/10 drop-shadow-md p-2 rounded-full" 
                  aria-label="Instagram"
                >
                  <img 
                    src="/lovable-uploads/e132c7e8-e206-404e-b6fb-60edb8e0d181.png" 
                    alt="Instagram" 
                    className="h-5 w-5"
                  />
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
