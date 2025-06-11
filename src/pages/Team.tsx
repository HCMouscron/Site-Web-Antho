
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Team = () => {
  const staff = [
    {
      name: "Jean Dupont",
      role: "Entraîneur Principal",
      experience: "15 ans d'expérience",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Marie Leroy",
      role: "Entraîneur Adjoint",
      experience: "8 ans d'expérience",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Pierre Martin",
      role: "Entraîneur Jeunes",
      experience: "5 ans d'expérience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Sophie Bernard",
      role: "Préparateur Physique",
      experience: "10 ans d'expérience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const categories = [
    {
      name: "Seniors Hommes",
      description: "Équipe première évoluant en Division 2 Régionale",
      players: [
        { name: "Thomas Dubois", position: "Gardien", numero: 1 },
        { name: "Kevin Moreau", position: "Ailier Gauche", numero: 7 },
        { name: "Antoine Rousseau", position: "Arrière Central", numero: 10 },
        { name: "Lucas Petit", position: "Pivot", numero: 15 },
        { name: "Maxime Durand", position: "Ailier Droit", numero: 11 },
        { name: "Julien Lefevre", position: "Arrière Droit", numero: 9 }
      ]
    },
    {
      name: "Seniors Dames",
      description: "Équipe féminine en Division 3 Régionale",
      players: [
        { name: "Sarah Lemoine", position: "Gardien", numero: 1 },
        { name: "Emma Roux", position: "Ailière Gauche", numero: 7 },
        { name: "Julie Blanc", position: "Arrière Centrale", numero: 10 },
        { name: "Clara Vidal", position: "Pivot", numero: 15 },
        { name: "Léa Girard", position: "Ailière Droite", numero: 11 }
      ]
    },
    {
      name: "Juniors -18 ans",
      description: "Jeunes talents en formation",
      players: [
        { name: "Hugo Lambert", position: "Gardien", numero: 1 },
        { name: "Nathan Perrin", position: "Ailier Gauche", numero: 7 },
        { name: "Arthur Morel", position: "Arrière Central", numero: 10 },
        { name: "Théo Garnier", position: "Pivot", numero: 15 }
      ]
    },
    {
      name: "Cadets -15 ans",
      description: "École de handball",
      players: [
        { name: "Paul Robin", position: "Gardien", numero: 1 },
        { name: "Louis André", position: "Ailier Gauche", numero: 7 },
        { name: "Gabriel Mercier", position: "Arrière Central", numero: 10 },
        { name: "Baptiste Fournier", position: "Pivot", numero: 15 }
      ]
    }
  ];

  const palmares = [
    { year: "2023", achievement: "Champion Régional Division 2" },
    { year: "2022", achievement: "Finaliste Coupe Provinciale" },
    { year: "2021", achievement: "3ème place Championnat Régional" },
    { year: "2020", achievement: "Vainqueur Tournoi de Noël" },
    { year: "2019", achievement: "Champion Provincial Juniors" },
    { year: "2018", achievement: "Meilleure progression Région Wallonne" }
  ];

  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Notre équipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez le staff technique et les joueurs qui font la force du HC Mouscron, 
            unis par la passion du handball et l'esprit d'équipe.
          </p>
        </div>

        {/* Staff Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Staff Technique
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {staff.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge className="bg-hc-orange text-white mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Players by Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Nos équipes
          </h2>
          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-hc-orange">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.players.map((player, playerIndex) => (
                    <Card key={playerIndex} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-hc-green rounded-full flex items-center justify-center text-white font-bold">
                            {player.numero}
                          </div>
                          <div>
                            <div className="font-semibold">{player.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {player.position}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Palmares Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Palmarès
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {palmares.map((achievement, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-hc-orange rounded-lg flex items-center justify-center text-white font-bold">
                          {achievement.year}
                        </div>
                        <div className="font-semibold text-lg">
                          {achievement.achievement}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
