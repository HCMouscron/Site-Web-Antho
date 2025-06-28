import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import PartnersCarousel from '@/components/PartnersCarousel';

const Home = () => {
  const handleLinkClick = () => {
    // Scroll to top will be handled by ScrollToTop component
  };

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
              <Link to="/contact" onClick={handleLinkClick}>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg w-full sm:w-auto border-2 border-white/20">
                  Nous rejoindre
                </Button>
              </Link>
              <Link to="/equipe" onClick={handleLinkClick}>
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

      {/* Section Terrain de Handball Horizontal - Style spectaculaire */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-900">
        {/* Terrain de handball horizontal en arrière-plan */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/Terrain_de_hand_vert.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.7,
            transform: "rotate(90deg) scale(1.4)",
            transformOrigin: "center center"
          }}
        ></div>
        
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-green-800/30 to-amber-900/40"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
          
          {/* Zone supérieure gauche - Sport dynamique */}
          <div className="absolute top-20 left-8 max-w-sm">
            <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border-4 border-white/80 animate-fade-in">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Un sport dynamique et spectaculaire
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Le handball est un sport rythmé et captivant, tant pour les joueurs que pour les spectateurs. 
                Il repose sur des enchaînements rapides et une participation active de tous les joueurs en attaque comme en défense, 
                dans un esprit de respect et de fair-play.
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/33033b5b-5d7a-464e-9eb2-7894f00e2b26.png" 
                  alt="Mini handball en action" 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Zone supérieure droite - Esprit d'équipe */}
          <div className="absolute top-20 right-8 max-w-sm">
            <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border-4 border-white/80 animate-fade-in delay-200">
              <h3 className="text-xl font-bold text-amber-700 mb-3">
                Un esprit d'équipe fort et soudé
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Chaque joueur a un rôle essentiel, sans poste "mineur". 
                Les rotations fréquentes renforcent la coopération et valorisent tous les profils physiques. 
                La réussite repose sur le collectif.
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/a4551830-cf39-4d58-bf31-7325e3117da5.png" 
                  alt="Équipe seniors unie" 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Logo central avec effet spectaculaire */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              {/* Cercles animés en arrière-plan */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-80 h-80 border-4 border-dashed border-yellow-400/60 rounded-full"></div>
              </div>
              <div className="absolute inset-4 animate-spin-reverse">
                <div className="w-72 h-72 border-2 border-orange-500/40 rounded-full"></div>
              </div>
              
              {/* Logo principal avec design spectaculaire */}
              <div className="relative w-64 h-64 bg-gradient-to-br from-green-600 via-green-700 to-amber-600 rounded-full flex items-center justify-center shadow-2xl border-8 border-white/90 transform group-hover:scale-110 transition-all duration-500 animate-glow">
                {/* Texte HANDBALL CLUB en cercle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                    <defs>
                      <path id="circle" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                    </defs>
                    <text className="text-lg font-black fill-white" style={{ fontSize: '16px' }}>
                      <textPath href="#circle" startOffset="0%">
                        HANDBALL CLUB • HANDBALL CLUB • 
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                {/* Logo central */}
                <img 
                  src="/lovable-uploads/7f5485a2-eaa0-4a73-8e50-8de5813ec2f3.png" 
                  alt="HC Mouscron Logo" 
                  className="w-32 h-32 object-contain drop-shadow-2xl z-10 relative animate-float"
                />
                
                {/* Texte MOUSCRON en bas */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="text-white font-black text-2xl drop-shadow-2xl">MOUSCRON</span>
                </div>
              </div>
              
              {/* Badges flottants */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-bounce">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-black shadow-xl border-4 border-white">
                  HANDBALL
                </span>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce delay-300">
                <span className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-3 rounded-full text-lg font-black shadow-xl border-4 border-white">
                  CLUB
                </span>
              </div>
            </div>
          </div>

          {/* Zone inférieure gauche - Convivialité */}
          <div className="absolute bottom-32 left-8 max-w-sm">
            <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border-4 border-white/80 animate-fade-in delay-400">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Convivialité et respect
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Le HC Mouscron accueille filles et garçons dans une ambiance familiale. 
                Débutants ou confirmés s'y entraînent sans pression, dans un climat de respect et de convivialité.
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/faeb26b4-5b82-49e1-8fb0-69a10700de49.png" 
                  alt="U16 conviviale" 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Zone inférieure droite - Sport accessible */}
          <div className="absolute bottom-32 right-8 max-w-sm">
            <div className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border-4 border-white/80 animate-fade-in delay-600">
              <h3 className="text-xl font-bold text-amber-700 mb-3">
                En été comme en hiver...
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Le handball se pratique toute l'année, quelle que soit la météo. 
                Les entraînements ont lieu en intérieur au Hall Max Lessines, 
                équipé d'une cafétéria conviviale avec wifi pour les parents.
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/2c5565cf-f45d-4d43-b901-68086906cbad.png" 
                  alt="U18 unie" 
                  className="w-full h-24 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Zone sport accessible en bas à gauche */}
          <div className="absolute bottom-8 left-8 max-w-xs">
            <div className="bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-2xl border-4 border-white/80 animate-fade-in delay-800">
              <h3 className="text-lg font-bold text-green-800 mb-2">
                Un sport accessible à tous
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                Le club, en tant qu'ASBL, vise à rendre le handball abordable : 
                cotisation annuelle modérée (max. 150 € pour les jeunes), 
                aides financières possibles (Chèque Sport, mutualités, employeurs), 
                et paiements échelonnés jusqu'à trois mois.
              </p>
            </div>
          </div>

          {/* Call to action final en bas */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 p-1 rounded-3xl shadow-2xl animate-fade-in delay-1000">
              <div className="bg-white/95 backdrop-blur-lg p-6 rounded-3xl text-center">
                <h2 className="text-2xl font-black mb-2">
                  <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                    Pratiquer le handball au HC Mouscron,
                  </span>
                  <br />
                  <span className="text-gray-800">
                    c'est plus qu'un sport !
                  </span>
                </h2>
                <p className="text-sm italic text-gray-700 mb-4 font-medium">
                  Possibilité de faire plusieurs séances d'essai sans engagement
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-3 rounded-xl shadow-lg">
                    <p className="font-bold">HALL MAX LESSINES</p>
                    <p className="text-green-100">RUE DES PRÉS 84B, MOUSCRON</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-3 rounded-xl shadow-lg">
                    <p className="font-bold">
                      <a 
                        href="mailto:handballmouscron@gmail.com"
                        className="hover:text-yellow-200 transition-colors"
                      >
                        HANDBALLMOUSCRON
                      </a>
                    </p>
                    <p className="text-orange-100">@GMAIL.COM</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <Link to="/contact" onClick={handleLinkClick}>
                    <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white shadow-xl border-2 border-white/50 px-6 py-2 rounded-xl">
                      🏐 Nous rejoindre
                    </Button>
                  </Link>
                  <Link to="/infos" onClick={handleLinkClick}>
                    <Button size="sm" variant="outline" className="bg-white border-2 border-amber-500 text-amber-700 hover:bg-amber-50 shadow-xl px-6 py-2 rounded-xl">
                      📋 Nos tarifs
                    </Button>
                  </Link>
                </div>
              </div>
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
                Bienvenue au <span className="text-green-800">HC Mouscron</span>
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
                <Link to="/contact" onClick={handleLinkClick}>
                  <Button size="lg" className="bg-green-800 hover:bg-green-700 text-white w-full sm:w-auto">
                    Nous contacter
                  </Button>
                </Link>
                <Link to="/infos" onClick={handleLinkClick}>
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white w-full sm:w-auto">
                    Voir nos tarifs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              <img src="/lovable-uploads/5842efea-481a-4242-9f84-4a04bd55c7f6.png" alt="Logo HC Mouscron" className="w-72 h-72 object-contain rounded-2xl shadow-xl bg-white" style={{
                border: '4px solid hsl(150 100% 30%)'
              }} />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">10 ans</div>
                <div className="text-sm">d'expérience</div>
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
              <Link to="/equipe" className="text-center p-6" onClick={handleLinkClick}>
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
              <Link to="/infos" onClick={handleLinkClick}>
                <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-gray-100 shadow-lg font-semibold w-full sm:w-auto border-2 border-white/20">
                  Découvrir nos tarifs
                </Button>
              </Link>
              <Link to="/contact" onClick={handleLinkClick}>
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