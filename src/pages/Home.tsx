import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import PartnersCarousel from '@/components/PartnersCarousel';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-800 via-green-600 to-amber-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/lovable-uploads/1ea96fdc-8535-4f8b-a3f9-b4f3755f6633.png')"
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/60 via-green-600/50 to-amber-600/60"></div>
        
        <div className="relative flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-white drop-shadow-lg">
              HC Mouscron
            </h1>
            <p className="text-xl sm:text-2xl mb-8 font-medium text-white drop-shadow-md">
              Esprit d'équipe • Respect • Convivialité
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white drop-shadow-md">
              Rejoignez le club de sport le plus accueillant de Mouscron. 
              Découvrez l'esprit d'équipe et la passion du handball dans une ambiance conviviale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg w-full sm:w-auto border-2 border-white/20">
                  Nous rejoindre
                </Button>
              </Link>
              <Link to="/equipe">
                <Button size="lg" variant="outline" className="bg-white/90 text-green-800 hover:bg-white border-2 border-white shadow-lg font-semibold w-full sm:w-auto">
                  Découvrir l'équipe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel - Placé après le hero */}
      <PartnersCarousel />

      {/* Handball Field Section - Version horizontale */}
      <section className="py-20 relative overflow-hidden">
        {/* Background terrain de handball horizontal */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/Terrain_de_hand_vert.png')",
            transform: "rotate(90deg) scale(1.5)",
            transformOrigin: "center center"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/15"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Layout horizontal avec le terrain en arrière-plan */}
          <div className="grid lg:grid-cols-5 gap-6 items-stretch min-h-[500px]">
            
            {/* Colonne 1 - Gauche */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border-l-4 border-green-600 transform hover:scale-105 transition-transform h-full">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  Un sport dynamique
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Le handball est un sport rythmé et captivant, tant pour les joueurs que pour les spectateurs.
                </p>
                <div className="mt-3">
                  <img 
                    src="/lovable-uploads/33033b5b-5d7a-464e-9eb2-7894f00e2b26.png" 
                    alt="Mini handball" 
                    className="w-full h-16 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Colonne 2 */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border-l-4 border-amber-600 transform hover:scale-105 transition-transform h-full">
                <h3 className="text-lg font-bold text-amber-700 mb-2">
                  Convivialité
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Le HC Mouscron accueille dans une ambiance familiale, sans pression.
                </p>
                <div className="mt-3">
                  <img 
                    src="/lovable-uploads/faeb26b4-5b82-49e1-8fb0-69a10700de49.png" 
                    alt="U16" 
                    className="w-full h-16 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Colonne 3 - Centre avec logo */}
            <div className="lg:col-span-1 flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-green-600 via-green-500 to-amber-500 rounded-full flex items-center justify-center shadow-2xl border-6 border-white/70 transform hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" 
                    alt="HC Mouscron Logo" 
                    className="w-36 h-36 object-contain drop-shadow-2xl"
                  />
                </div>
                {/* Texte autour du logo */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white">
                    HANDBALL
                  </span>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl border-2 border-white">
                    MOUSCRON
                  </span>
                </div>
              </div>
            </div>

            {/* Colonne 4 */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border-r-4 border-green-600 transform hover:scale-105 transition-transform h-full">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  Esprit d'équipe
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Chaque joueur a un rôle essentiel. La réussite repose sur le collectif.
                </p>
                <div className="mt-3">
                  <img 
                    src="/lovable-uploads/a4551830-cf39-4d58-bf31-7325e3117da5.png" 
                    alt="Seniors" 
                    className="w-full h-16 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* Colonne 5 - Droite */}
            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border-r-4 border-amber-600 transform hover:scale-105 transition-transform h-full">
                <h3 className="text-lg font-bold text-amber-700 mb-2">
                  Toute l'année
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Le handball se pratique en intérieur, quelle que soit la météo.
                </p>
                <div className="mt-3">
                  <img 
                    src="/lovable-uploads/2c5565cf-f45d-4d43-b901-68086906cbad.png" 
                    alt="U18" 
                    className="w-full h-16 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section finale avec slogan - Version compacte */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-amber-600 text-white p-6 rounded-2xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">
                Pratiquer le handball au HC Mouscron, c'est plus qu'un sport !
              </h2>
              <p className="text-lg italic drop-shadow-md mb-4">
                Possibilité de faire plusieurs séances d'essai sans engagement
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold">
                <div>
                  <p>HALL MAX LESSINES - RUE DES PRÉS 84B, MOUSCRON</p>
                </div>
                <div>
                  <p>
                    <a 
                      href="mailto:handballmouscron@gmail.com"
                      className="hover:text-yellow-200 transition-colors"
                    >
                      HANDBALLMOUSCRON@GMAIL.COM
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-green-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 shadow-lg mx-auto">
                <Users className="h-8 w-8 text-green-800" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">65</div>
              <div className="text-white drop-shadow-md">Affiliés</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 shadow-lg mx-auto">
                <Calendar className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">10</div>
              <div className="text-white drop-shadow-md">Années</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-6 shadow-lg mx-auto">
                <MapPin className="h-8 w-8 text-green-800" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 drop-shadow-lg">1</div>
              <div className="text-white drop-shadow-md">Salle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
            Nos équipes en action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative group">
              <img src="/lovable-uploads/33033b5b-5d7a-464e-9eb2-7894f00e2b26.png" alt="Mini handball HC Mouscron" className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-green-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/faeb26b4-5b82-49e1-8fb0-69a10700de49.png" alt="U16 HC Mouscron" className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-green-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/2c5565cf-f45d-4d43-b901-68086906cbad.png" alt="U18 HC Mouscron" className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-green-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/a4551830-cf39-4d58-bf31-7325e3117da5.png" alt="Seniors HC Mouscron" className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-green-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group">
              <img src="/lovable-uploads/3f691e54-6444-4b56-966f-fab9bcea6968.png" alt="Vétérans HC Mouscron" className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-green-800/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative group flex items-center justify-center bg-gradient-to-br from-green-100 to-amber-100 rounded-lg shadow-lg">
              <Link to="/equipe" className="text-center p-6">
                <Button size="lg" className="bg-green-800 hover:bg-amber-600 text-white shadow-lg border-2 border-white/20">
                  Découvrir l'équipe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 via-green-600 to-amber-600">
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
              <Link to="/infos">
                <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-gray-100 shadow-lg font-semibold w-full sm:w-auto border-2 border-white/20">
                  Découvrir nos tarifs
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-green-800 shadow-lg font-semibold w-full sm:w-auto border-2 border-white">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;