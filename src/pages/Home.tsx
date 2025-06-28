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

      {/* Section Terrain de Handball Ultra Stylée */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-amber-700">
        {/* Terrain de handball en arrière-plan avec effet parallax */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/lovable-uploads/Terrain_de_hand_vert.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.1)",
            filter: "brightness(0.7) contrast(1.2)"
          }}
        ></div>
        
        {/* Overlay avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-amber-800/80"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Titre principal avec effet spectaculaire */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                HANDBALL
              </span>
              <br />
              <span className="text-white">
                CLUB MOUSCRON
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Grid principal avec cartes flottantes */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* Carte 1 - Sport dynamique */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-4 border-white/50 transform hover:scale-105 hover:rotate-1 transition-all duration-300 h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    Un sport dynamique et spectaculaire
                  </h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed mb-6">
                  Le handball est un sport rythmé et captivant, tant pour les joueurs que pour les spectateurs. 
                  Il repose sur des enchaînements rapides et une participation active de tous les joueurs.
                </p>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/lovable-uploads/33033b5b-5d7a-464e-9eb2-7894f00e2b26.png" 
                    alt="Mini handball en action" 
                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Carte 2 - Logo central avec effet spectaculaire */}
            <div className="flex justify-center items-center">
              <div className="relative group">
                {/* Cercles animés en arrière-plan */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="w-80 h-80 border-4 border-dashed border-yellow-400/50 rounded-full"></div>
                </div>
                <div className="absolute inset-4 animate-spin-reverse">
                  <div className="w-72 h-72 border-2 border-orange-500/30 rounded-full"></div>
                </div>
                
                {/* Logo principal */}
                <div className="relative w-64 h-64 bg-gradient-to-br from-green-400 via-green-600 to-amber-600 rounded-full flex items-center justify-center shadow-2xl border-8 border-white/80 transform group-hover:scale-110 transition-all duration-500">
                  <img 
                    src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" 
                    alt="HC Mouscron Logo" 
                    className="w-48 h-48 object-contain drop-shadow-2xl transform group-hover:rotate-12 transition-transform duration-500"
                  />
                </div>
                
                {/* Badges flottants */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-black shadow-xl border-4 border-white">
                    HANDBALL
                  </span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce delay-300">
                  <span className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-full text-lg font-black shadow-xl border-4 border-white">
                    MOUSCRON
                  </span>
                </div>
                
                {/* Étoiles décoratives */}
                <div className="absolute top-8 right-8 text-yellow-400 text-2xl animate-pulse">⭐</div>
                <div className="absolute bottom-8 left-8 text-orange-400 text-xl animate-pulse delay-500">✨</div>
              </div>
            </div>

            {/* Carte 3 - Esprit d'équipe */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-4 border-white/50 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-700 mb-3">
                    Un esprit d'équipe fort et soudé
                  </h3>
                </div>
                <p className="text-gray-700 text-center leading-relaxed mb-6">
                  Chaque joueur a un rôle essentiel, sans poste "mineur". 
                  Les rotations fréquentes renforcent la coopération et valorisent tous les profils physiques.
                </p>
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <img 
                    src="/lovable-uploads/a4551830-cf39-4d58-bf31-7325e3117da5.png" 
                    alt="Équipe seniors unie" 
                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section inférieure avec convivialité et accessibilité */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* Convivialité et respect */}
            <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">
                Convivialité et respect
              </h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6 text-lg">
                Le HC Mouscron accueille filles et garçons dans une ambiance familiale. 
                Débutants ou confirmés s'y entraînent sans pression, dans un climat de respect et de convivialité.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/faeb26b4-5b82-49e1-8fb0-69a10700de49.png" 
                  alt="U16 conviviale" 
                  className="w-full h-24 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                />
                <img 
                  src="/lovable-uploads/2c5565cf-f45d-4d43-b901-68086906cbad.png" 
                  alt="U18 unie" 
                  className="w-full h-24 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            </div>

            {/* Sport accessible */}
            <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-4 border-white/50 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl font-bold text-amber-700 mb-6 text-center">
                Un sport accessible à tous
              </h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6 text-lg">
                Le club, en tant qu'ASBL, vise à rendre le handball abordable : 
                cotisation annuelle modérée, aides financières possibles, et paiements échelonnés.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-2xl">
                  <Calendar className="h-8 w-8 text-amber-600" />
                  <span className="text-lg font-bold text-amber-800">En été comme en hiver...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action final spectaculaire */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl">
                <h2 className="text-4xl font-black mb-4">
                  <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                    Pratiquer le handball au HC Mouscron,
                  </span>
                  <br />
                  <span className="text-gray-800">
                    c'est plus qu'un sport !
                  </span>
                </h2>
                <p className="text-xl italic text-gray-700 mb-6 font-medium">
                  Possibilité de faire plusieurs séances d'essai sans engagement
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 rounded-2xl shadow-lg">
                    <MapPin className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-bold text-lg">HALL MAX LESSINES</p>
                    <p className="text-green-100">RUE DES PRÉS 84B, MOUSCRON</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-2xl shadow-lg">
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-bold text-lg">
                      <a 
                        href="mailto:handballmouscron@gmail.com"
                        className="hover:text-yellow-200 transition-colors"
                      >
                        HANDBALLMOUSCRON@GMAIL.COM
                      </a>
                    </p>
                    <p className="text-orange-100">Contact direct</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white shadow-xl border-4 border-white/50 text-lg px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300">
                      🏐 Nous rejoindre
                    </Button>
                  </Link>
                  <Link to="/infos">
                    <Button size="lg" variant="outline" className="bg-white border-4 border-amber-500 text-amber-700 hover:bg-amber-50 shadow-xl text-lg px-8 py-4 rounded-2xl transform hover:scale-105 transition-all duration-300">
                      📋 Voir nos tarifs
                    </Button>
                  </Link>
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