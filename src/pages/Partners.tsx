
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const partners = [
    {
      name: 'Crack',
      logo: '/lovable-uploads/placeholder-sponsor.png', // Placeholder - à remplacer par les vrais logos
      website: 'https://crack-example.com',
      description: 'Notre partenaire de confiance depuis plusieurs années'
    },
    {
      name: 'Fred Elec',
      logo: '/lovable-uploads/placeholder-sponsor.png', // Placeholder - à remplacer par les vrais logos
      website: 'https://fredelec-example.com',
      description: 'Solutions électriques professionnelles'
    },
    {
      name: 'Holebecque',
      logo: '/lovable-uploads/placeholder-sponsor.png', // Placeholder - à remplacer par les vrais logos
      website: 'https://holebecque-example.com',
      description: 'Partenaire local engagé'
    },
    {
      name: 'Acta Security',
      logo: '/lovable-uploads/placeholder-sponsor.png', // Placeholder - à remplacer par les vrais logos
      website: 'https://actasecurity-example.com',
      description: 'Solutions de sécurité innovantes'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-hc-green via-hc-green to-hc-orange">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 drop-shadow-lg">
            NOS PARTENAIRES
          </h1>
          <p className="text-xl sm:text-2xl text-white font-medium drop-shadow-md">
            Ils nous font confiance et participent à la réussite du club !
          </p>
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
                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200 group-hover:border-hc-green transition-colors">
                      <span className="text-gray-500 font-semibold text-lg">{partner.name}</span>
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
