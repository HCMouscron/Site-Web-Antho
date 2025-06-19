import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const partners = [
    {
      name: 'Acta Security',
      logo: '/lovable-uploads/919c9f3d-5770-47d1-8dcf-445e17bb9d18.png',
      website: 'https://www.acta-security.be/',
      description: 'Solutions de sécurité innovantes'
    },
    {
      name: 'Fred Elec',
      logo: '/lovable-uploads/f847fff1-a2e3-4717-b1d4-85fe3bebe9f7.png',
      website: 'https://www.fred-electrique.com/fr/accueil',
      description: 'Solutions électriques professionnelles'
    },
    {
      name: 'Holebecque',
      logo: '/lovable-uploads/3e0d607f-5f42-442c-927b-96d9671ee3cf.png',
      website: 'https://pneus-hollebeke.be/index.html',
      description: 'Pneus Hollebeke - Votre spécialiste pneumatiques'
    },
    {
      name: 'Crack',
      logo: '/lovable-uploads/d1b8c78d-2adc-4f0c-a684-d108bed1d3c5.png',
      website: 'https://www.crack.be/fr/',
      description: 'Meubles & Cuisines - Votre partenaire de confiance'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hc-green via-hc-green to-hc-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-hc-orange bg-clip-text text-transparent drop-shadow-2xl">
                NOS
              </span>
              <span className="block bg-gradient-to-r from-hc-orange via-yellow-300 to-white bg-clip-text text-transparent drop-shadow-2xl">
                PARTENAIRES
              </span>
            </h1>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 mx-auto max-w-4xl border-2 border-white/30 shadow-2xl">
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
              Ils nous font confiance et participent à la réussite du club !
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 hover:border-hc-orange">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-40 h-32 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 group-hover:border-hc-green transition-colors p-2">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {partner.description}
                  </p>
                  <Button 
                    asChild 
                    className="bg-hc-green hover:bg-hc-orange text-white w-full group-hover:scale-105 transition-transform"
                  >
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visiter le site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-hc-green/10 to-hc-orange/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vous souhaitez devenir partenaire ?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Rejoignez nos partenaires et soutenez le handball à Mouscron. 
            Contactez-nous pour découvrir nos offres de partenariat.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-hc-orange hover:bg-hc-green text-white"
          >
            <a href="/contact">
              Nous contacter
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
