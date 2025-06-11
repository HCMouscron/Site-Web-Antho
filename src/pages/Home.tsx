
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const news = [
    {
      id: 1,
      title: "Victoire éclatante contre Tournai",
      date: "15 Mars 2024",
      excerpt: "Notre équipe première a remporté une belle victoire 28-22 contre HC Tournai lors du dernier match à domicile.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Tournoi jeunes ce weekend",
      date: "12 Mars 2024",
      excerpt: "Nos équipes -15 et -17 ans participent au tournoi régional ce weekend. Venez les encourager !",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Nouveaux équipements",
      date: "8 Mars 2024",
      excerpt: "Le club a reçu de nouveaux maillots et équipements grâce au soutien de nos sponsors locaux.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=200&fit=crop"
    }
  ];

  const nextMatches = [
    {
      date: "23 Mars 2024",
      time: "20:00",
      opponent: "HC Kortrijk",
      location: "Domicile",
      category: "Seniors"
    },
    {
      date: "30 Mars 2024", 
      time: "15:00",
      opponent: "HC Ypres",
      location: "Extérieur",
      category: "-18 ans"
    },
    {
      date: "6 Avril 2024",
      time: "18:30",
      opponent: "HC Ostende",
      location: "Domicile",
      category: "Seniors"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-hc-green via-hc-green-light to-hc-orange overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-hc-green/80 to-hc-orange/60"></div>
        
        <div className="relative flex h-full items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              HC Mouscron
            </h1>
            <p className="text-xl sm:text-2xl mb-8 font-medium">
              Passion • Équipe • Excellence
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Rejoignez le plus dynamique club de handball de Mouscron. 
              Découvrez l'esprit d'équipe et la passion du handball dans une ambiance conviviale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-hc-orange hover:bg-hc-orange-light text-white">
                Nous rejoindre
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hc-green">
                Découvrir l'équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-hc-green rounded-lg mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-hc-green mb-2">85</div>
              <div className="text-muted-foreground">Joueurs</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-hc-orange rounded-lg mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-hc-orange mb-2">12</div>
              <div className="text-muted-foreground">Trophées</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-hc-green rounded-lg mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-hc-green mb-2">25</div>
              <div className="text-muted-foreground">Années</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-hc-orange rounded-lg mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-hc-orange mb-2">1</div>
              <div className="text-muted-foreground">Salle</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Dernières actualités
            </h2>
            <p className="text-lg text-muted-foreground">
              Restez informés de la vie du club
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-hc-orange font-medium mb-2">
                    {article.date}
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Matches */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Prochains matchs
            </h2>
            <p className="text-lg text-muted-foreground">
              Venez nous encourager
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nextMatches.map((match, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium text-hc-green mb-1">
                        {match.category}
                      </div>
                      <CardTitle className="text-lg">
                        HC Mouscron vs {match.opponent}
                      </CardTitle>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      match.location === 'Domicile' 
                        ? 'bg-hc-green/10 text-hc-green' 
                        : 'bg-hc-orange/10 text-hc-orange'
                    }`}>
                      {match.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {match.date}
                    </div>
                    <div>{match.time}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-hc-green to-hc-orange">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Rejoignez-nous !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Que vous soyez débutant ou expérimenté, jeune ou moins jeune, 
              il y a une place pour vous au HC Mouscron.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-hc-green hover:bg-gray-100">
                Découvrir nos tarifs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-hc-green">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
