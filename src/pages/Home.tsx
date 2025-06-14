import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-hc-green via-hc-green to-hc-orange overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/1ea96fdc-8535-4f8b-a3f9-b4f3755f6633.png')"
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-hc-green/60 via-hc-green/50 to-hc-orange/60"></div>
        
        <div className="relative flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-white drop-shadow-lg">
              HC Mouscron
            </h1>
            <p className="text-xl sm:text-2xl mb-8 font-medium text-white drop-shadow-md">
              Passion • Équipe • Excellence
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white drop-shadow-md">
              Rejoignez le plus dynamique club de handball de Mouscron. 
              Découvrez l'esprit d'équipe et la passion du handball dans une ambiance conviviale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-hc-orange hover:bg-hc-orange-light text-white shadow-lg">
                Nous rejoindre
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-hc-green shadow-lg">
                Découvrir l'équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-hc-green/10 via-white to-hc-orange/10 bg-green-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hc-green rounded-xl mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-hc-green mb-2">85</div>
              <div className="text-gray-700 font-medium">Joueurs</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hc-green rounded-xl mb-6 shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-hc-green mb-2">25</div>
              <div className="text-gray-700 font-medium">Années</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-hc-orange rounded-xl mb-6 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-hc-orange mb-2">1</div>
              <div className="text-gray-700 font-medium">Salle</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Bienvenue au <span className="text-hc-green">HC Mouscron</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre club de handball vous accueille dans une ambiance chaleureuse et dynamique. 
                Que vous soyez débutant ou confirmé, jeune ou adulte, nous avons une place pour vous !
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Venez découvrir la passion du handball avec nous et rejoignez une équipe qui partage 
                les valeurs de solidarité, de respect et de dépassement de soi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-hc-green hover:bg-hc-green/90 text-white">
                  Nous contacter
                </Button>
                <Button size="lg" variant="outline" className="border-hc-orange text-hc-orange hover:bg-hc-orange hover:text-white">
                  Voir nos tarifs
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" alt="Équipe de handball" className="rounded-2xl shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-hc-orange text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">25 ans</div>
                <div className="text-sm">d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-hc-green via-hc-green-light to-hc-orange bg-amber-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white drop-shadow-lg">
              Rejoignez-nous !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
              Que vous soyez débutant ou expérimenté, jeune ou adulte, 
              il y a une place pour vous au HC Mouscron.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-hc-green hover:bg-gray-100 shadow-lg font-semibold">
                Découvrir nos tarifs
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-hc-green hover:bg-gray-100 shadow-lg font-semibold ">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
