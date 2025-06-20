
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Équipe', href: '/equipe' },
    { 
      name: 'Compétition', 
      href: '#',
      submenu: [
        { name: 'Classement', href: '/classement' },
        { name: 'Scorers', href: '/scorers' }
      ]
    },
    { name: 'Partenaires', href: '/partenaires' },
    { name: 'Infos', href: '/infos' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-amber-600 backdrop-blur shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1 items-center space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" 
              alt="HC Mouscron logo" 
              className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full bg-white p-1 shadow-xl" 
            />
            <span className="hidden sm:block text-2xl lg:text-3xl font-bold text-white drop-shadow-lg tracking-wide">
              HC Mouscron
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => (
            item.submenu ? (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => setIsCompetitionOpen(true)}
                onMouseLeave={() => setIsCompetitionOpen(false)}
              >
                <button className="flex items-center text-white font-bold text-lg hover:text-yellow-200 transition-colors drop-shadow-md px-2 py-1 rounded">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCompetitionOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-2 w-48">
                    {item.submenu.map(subItem => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className={`block px-4 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition-colors ${
                          isActive(subItem.href) ? 'bg-amber-50 text-amber-600' : ''
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-white font-bold text-lg hover:text-yellow-200 transition-colors drop-shadow-md px-2 py-1 rounded ${
                  isActive(item.href) ? 'text-yellow-200 bg-white/10' : ''
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="https://www.facebook.com/HCMouscron" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="text-white hover:bg-white/10 drop-shadow-md p-2 rounded-full"
            >
              <img src="/lovable-uploads/b2e8bfa2-ec84-4d63-8d58-503664da7229.png" alt="Facebook" className="h-6 w-6" />
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
              <img src="/lovable-uploads/e132c7e8-e206-404e-b6fb-60edb8e0d181.png" alt="Instagram" className="h-6 w-6" />
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
          <div className="space-y-1 px-4 pb-4 pt-2 bg-amber-600 border-t border-white/20">
            {navigation.map(item => (
              item.submenu ? (
                <div key={item.name}>
                  <div className="px-3 py-2 text-base font-bold text-white drop-shadow-md">
                    {item.name}
                  </div>
                  {item.submenu.map(subItem => (
                    <Link 
                      key={subItem.name} 
                      to={subItem.href} 
                      className={`block pl-6 pr-3 py-2 text-base font-medium transition-colors hover:text-yellow-200 drop-shadow-md ${
                        isActive(subItem.href) ? 'text-yellow-200 bg-white/10 rounded' : 'text-white'
                      }`} 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
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
              )
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
                  <img src="/lovable-uploads/b2e8bfa2-ec84-4d63-8d58-503664da7229.png" alt="Facebook" className="h-5 w-5" />
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
                  <img src="/lovable-uploads/e132c7e8-e206-404e-b6fb-60edb8e0d181.png" alt="Instagram" className="h-5 w-5" />
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
