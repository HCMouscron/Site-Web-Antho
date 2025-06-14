
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

  // Les catégories et palmarès ne sont plus utilisées, mais on garde la structure pour une éventuelle réutilisation.

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

        {/* Players by Category - SECTION VIDE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-hc-green">
            Nos équipes
          </h2>
          {/* Section intentionnellement laissée vide */}
        </section>

        {/* Section Palmarès SUPPRIMÉE */}
      </div>
    </div>
  );
};

export default Team;

