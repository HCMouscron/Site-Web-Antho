
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Planning = () => {
  const matches = [
    {
      date: "2024-03-23",
      time: "20:00",
      team: "HC Mouscron",
      opponent: "HC Kortrijk",
      category: "Seniors Hommes",
      location: "Domicile",
      venue: "Salle Omnisports Mouscron",
      status: "upcoming"
    },
    {
      date: "2024-03-30",
      time: "15:00",
      team: "HC Ypres",
      opponent: "HC Mouscron",
      category: "Juniors -18",
      location: "Extérieur",
      venue: "Salle Sportive Ypres",
      status: "upcoming"
    },
    {
      date: "2024-04-06",
      time: "18:30",
      team: "HC Mouscron",
      opponent: "HC Ostende",
      category: "Seniors Hommes",
      location: "Domicile",
      venue: "Salle Omnisports Mouscron",
      status: "upcoming"
    },
    {
      date: "2024-04-13",
      time: "16:00",
      team: "HC Mouscron",
      opponent: "HC Bruges",
      category: "Seniors Dames",
      location: "Domicile",
      venue: "Salle Omnisports Mouscron",
      status: "upcoming"
    },
    {
      date: "2024-04-20",
      time: "19:00",
      team: "HC Liège",
      opponent: "HC Mouscron",
      category: "Seniors Hommes",
      location: "Extérieur",
      venue: "Centre Sportif Liège",
      status: "upcoming"
    },
    {
      date: "2024-03-16",
      time: "20:00",
      team: "HC Mouscron",
      opponent: "HC Tournai",
      category: "Seniors Hommes",
      location: "Domicile",
      venue: "Salle Omnisports Mouscron",
      status: "played",
      score: "28-22"
    }
  ];

  const trainingSessions = [
    {
      day: "Lundi",
      sessions: [
        { time: "19:00-21:00", category: "Seniors Dames", coach: "Marie Leroy" }
      ]
    },
    {
      day: "Mardi", 
      sessions: [
        { time: "20:00-22:00", category: "Seniors Hommes", coach: "Jean Dupont" }
      ]
    },
    {
      day: "Mercredi",
      sessions: [
        { time: "17:00-18:30", category: "Juniors -18 ans", coach: "Pierre Martin" },
        { time: "19:00-21:00", category: "Seniors Dames", coach: "Marie Leroy" }
      ]
    },
    {
      day: "Jeudi",
      sessions: [
        { time: "20:00-22:00", category: "Seniors Hommes", coach: "Jean Dupont" }
      ]
    },
    {
      day: "Vendredi",
      sessions: [
        { time: "17:00-18:30", category: "Juniors -18 ans", coach: "Pierre Martin" }
      ]
    },
    {
      day: "Samedi",
      sessions: [
        { time: "10:00-11:30", category: "École de Handball", coach: "Sophie Bernard" },
        { time: "14:00-15:30", category: "Cadets -15 ans", coach: "Pierre Martin" }
      ]
    },
    {
      day: "Dimanche",
      sessions: [
        { time: "Repos", category: "Jour de repos", coach: "" }
      ]
    }
  ];

  const events = [
    {
      date: "2024-04-15",
      title: "Tournoi de Pâques",
      description: "Tournoi jeunes organisé par le club",
      time: "09:00-18:00",
      location: "Salle Omnisports Mouscron"
    },
    {
      date: "2024-05-01",
      title: "Assemblée Générale",
      description: "AG annuelle du club",
      time: "19:30",
      location: "Salle de réunion du club"
    },
    {
      date: "2024-06-15",
      title: "Fête du Club",
      description: "Barbecue et remise des prix de fin de saison",
      time: "18:00",
      location: "Terrain extérieur du complexe"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const upcomingMatches = matches.filter(match => match.status === 'upcoming');
  const playedMatches = matches.filter(match => match.status === 'played');

  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Planning
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez tous les matchs, entraînements et événements du HC Mouscron. 
            Ne manquez aucun rendez-vous important !
          </p>
        </div>

        <Tabs defaultValue="matches" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="matches">Matchs</TabsTrigger>
            <TabsTrigger value="training">Entraînements</TabsTrigger>
            <TabsTrigger value="events">Événements</TabsTrigger>
          </TabsList>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-8">
            {/* Upcoming Matches */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-hc-green">
                Prochains matchs
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {upcomingMatches.map((match, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge className="bg-hc-orange text-white mb-2">
                            {match.category}
                          </Badge>
                          <CardTitle className="text-lg">
                            {match.team} vs {match.opponent}
                          </CardTitle>
                        </div>
                        <Badge 
                          variant={match.location === 'Domicile' ? 'default' : 'secondary'}
                          className={match.location === 'Domicile' ? 'bg-hc-green' : 'bg-hc-orange'}
                        >
                          {match.location}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(match.date)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {match.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {match.venue}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Results */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-hc-green">
                Derniers résultats
              </h2>
              <div className="space-y-4">
                {playedMatches.map((match, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-hc-orange text-white">
                            {match.category}
                          </Badge>
                          <div>
                            <div className="font-semibold">
                              {match.team} vs {match.opponent}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {formatDate(match.date)} • {match.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-hc-green">
                            {match.score}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {match.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Training Tab */}
          <TabsContent value="training">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-hc-green">
                Planning des entraînements
              </h2>
              <div className="grid gap-6">
                {trainingSessions.map((day, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-hc-orange">{day.day}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {day.sessions.map((session, sessionIndex) => (
                          <div key={sessionIndex} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-hc-green" />
                                <span className="font-medium">{session.time}</span>
                              </div>
                              <Badge className="bg-hc-green text-white">
                                {session.category}
                              </Badge>
                            </div>
                            {session.coach && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                {session.coach}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-hc-green">
                Événements du club
              </h2>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-hc-orange">
                            {event.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-2">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-hc-green" />
                          {formatDate(event.date)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-hc-green" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-hc-green" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Planning;
