
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { name: 'Crack', logo: '/lovable-uploads/placeholder-sponsor.png' },
    { name: 'Fred Elec', logo: '/lovable-uploads/placeholder-sponsor.png' },
    { name: 'Holebecque', logo: '/lovable-uploads/placeholder-sponsor.png' },
    { name: 'Acta Security', logo: '/lovable-uploads/placeholder-sponsor.png' }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-12 bg-white border-t border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Nos partenaires de confiance
          </h3>
        </div>
        
        <Link to="/partenaires" className="block group cursor-pointer">
          <div className="overflow-hidden bg-gradient-to-r from-gray-50 to-white rounded-lg border-2 border-gray-100 group-hover:border-hc-orange transition-colors p-8">
            <div className="flex justify-center items-center space-x-12 animate-fade-in">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    index === currentIndex 
                      ? 'scale-110 opacity-100' 
                      : 'scale-100 opacity-60'
                  }`}
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 group-hover:border-hc-green transition-colors">
                    <span className="text-gray-600 font-medium text-sm text-center px-2">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <span className="text-sm text-hc-green font-medium group-hover:text-hc-orange transition-colors">
                Cliquez pour découvrir tous nos partenaires →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PartnersCarousel;
